import {
  BASE_URL,
  DEFAULT_ACTIVE_WALLETS,
  EMPTY_WALLET_UID,
  getFwVersionConst
} from './constants';
import {
  addKvRecords,
  connect,
  fetchActiveWallet,
  getAddresses,
  getKvRecords,
  pair,
  removeKvRecords,
  sign
} from './functions/index';
import { retryWrapper } from './shared/functions';
import { getP256KeyPair, getP256KeyPairFromPub, randomBytes } from './util';

/**
 * `Client` is a class-based interface for managing a Lattice device.
 */
export class Client {
  /** Is the Lattice paired with this Client. */
  public isPaired: boolean;
  /** The time to wait for a response before cancelling. */
  public timeout: number;
  /** The remote url to which the SDK sends requests. */
  public baseUrl: string;
  public url?: string;
  /** `name` is a human readable string associated with this app on the Lattice */
  private name: string;
  private key: KeyPair;
  /**`privKey` is used to generate a keypair, which is used for maintaining an encrypted messaging channel with the target Lattice  */
  private privKey: Buffer | string;
  private retryCount: number;
  private fwVersion?: Buffer;
  private skipRetryOnWrongWallet: boolean;

  /** Temporary secret that is generated by the Lattice device */
  private _ephemeralPub: KeyPair;
  /** The ID of the connected Lattice */
  private deviceId: string | null;
  /** Information about the current wallet. Should be null unless we know a wallet is present */
  public activeWallets: ActiveWallets;

  /**
   * @param params - Parameters are passed as an object.
   */
  constructor({
    baseUrl,
    name,
    privKey,
    stateData,
    timeout,
    retryCount,
    skipRetryOnWrongWallet,
  }: any) {
    this.name = name || 'Unknown';
    this.baseUrl = baseUrl || BASE_URL;
    this.deviceId = null;
    this.isPaired = false;
    this.activeWallets = DEFAULT_ACTIVE_WALLETS;
    this.timeout = timeout || 60000;
    this.retryCount = retryCount || 3;
    this.skipRetryOnWrongWallet = skipRetryOnWrongWallet || false;
    this.privKey = privKey || randomBytes(32);
    this.key = getP256KeyPair(this.privKey);

    /** The user may pass in state data to rehydrate a session that was previously cached */
    if (stateData) {
      this.unpackAndApplyStateData(stateData);
      return;
    }
  }

  /**
   * Get the shared secret, derived via ECDH from the local private key and the ephemeral public key
   * @internal
   * @returns Buffer
   */
  public get sharedSecret () {
    // Once every ~256 attempts, we will get a key that starts with a `00` byte, which can lead to
    // problems initializing AES if we don't force a 32 byte BE buffer.
    return Buffer.from(
      this.key.derive(this.ephemeralPub.getPublic()).toArray('be', 32),
    );
  }

  public get ephemeralPub () {
    return this._ephemeralPub;
  }

  public set ephemeralPub (ephemeralPub: KeyPair) {
    if (ephemeralPub) {
      this._ephemeralPub = ephemeralPub;
    }
  }

  /**
   * `connect` will attempt to contact a device based on its `deviceId`. The response should include
   * an ephemeral public key, which is used to pair with the device in a later request.
   * @category Lattice
   */
  public async connect (id: string) {
    return retryWrapper({
      fn: connect,
      params: {
        id,
        client: this,
      },
      retries: 3,
      client: this
    })
  }

  /**
   * If a pairing secret is provided, `pair` uses it to sign a hash of the public key, name, and
   * pairing secret. It then sends the name and signature to the device. If no pairing secret is
   * provided, `pair` sends a zero-length name buffer to the device.
   * @category Lattice
   * @returns The active wallet object.
   */
  public async pair (pairingSecret: string) {
    return retryWrapper({
      fn: pair,
      params: {
        pairingSecret,
        client: this,
      },
      retries: 3,
      client: this
    })
  }

  /**
   * `getAddresses` takes a starting path and a number to get the addresses associated with the
   * active wallet.
   * @category Lattice
   * @returns An array of addresses.
   */
  public async getAddresses ({
    startPath,
    n = 1,
    flag = 0,
  }: GetAddressesRequestParams): Promise<Buffer[] | string[]> {
    return retryWrapper({
      fn: getAddresses,
      params: {
        startPath,
        n,
        flag,
        client: this
      },
      retries: 3,
      client: this
    })
  }

  /**
   * `sign` builds and sends a request for signing to the device.
   * @category Lattice
   * @returns The response from the device.
   */
  public async sign ({
    data,
    currency,
    cachedData,
    nextCode,
    retries = 3
  }: SignRequestParams): Promise<SignData> {
    return retryWrapper({
      fn: sign,
      params: {
        data,
        currency,
        cachedData,
        nextCode,
        client: this,
      },
      retries,
      client: this
    })
  }

  /**
   * Fetch the active wallet in the device.
   * @returns callback with an error or null
   */
  public async fetchActiveWallet (): Promise<ActiveWallets> {
    return retryWrapper({
      fn: fetchActiveWallet,
      params: {
        client: this,
      },
      retries: 3,
      client: this
    })
  }

  /**
   * `addKvRecords` takes in a set of key-value records and sends a request to add them to the
   * Lattice.
   * @category Lattice
   * @returns A callback with an error or null.
   */
  async addKvRecords ({
    type = 0,
    records,
    caseSensitive = false,
  }: AddKvRecordsRequestParams): Promise<Buffer> {
    return retryWrapper({
      fn: addKvRecords,
      params: {
        type,
        records,
        caseSensitive,
        client: this,
      },
      retries: 3,
      client: this
    })
  }

  /**
   * `getKvRecords` fetches a list of key-value records from the Lattice.
   * @category Lattice
   */
  public async getKvRecords ({
    type = 0,
    n = 1,
    start = 0,
  }: GetKvRecordsRequestParams): Promise<GetKvRecordsData> {
    return retryWrapper({
      fn: getKvRecords,
      params: {
        type,
        n,
        start,
        client: this,
      },
      retries: 3,
      client: this
    })
  }

  /**
   * `removeKvRecords` takes in an array of ids and sends a request to remove them from the Lattice.
   * @category Lattice
   * @returns A callback with an error or null.
   */
  public async removeKvRecords ({
    type = 0,
    ids = [],
  }: RemoveKvRecordsRequestParams): Promise<Buffer> {
    return retryWrapper({
      fn: removeKvRecords,
      params: {
        type,
        ids,
        client: this,
      },
      retries: 3,
      client: this
    })
  }

  /** Get the active wallet */
  public getActiveWallet () {
    if (
      this.activeWallets.external.uid &&
      !EMPTY_WALLET_UID.equals(this.activeWallets.external.uid)
    ) {
      return this.activeWallets.external;
    } else if (
      this.activeWallets.internal.uid &&
      !EMPTY_WALLET_UID.equals(this.activeWallets.internal.uid)
    ) {
      return this.activeWallets.internal;
    } else {
      return undefined;
    }
  }

  /** Check if the user has an active wallet */
  private hasActiveWallet () {
    return !!this.getActiveWallet();
  }

  /**
   * Reset the active wallets to empty values.
   * @category Device Response
   * @internal
   */
  private resetActiveWallets () {
    this.activeWallets = DEFAULT_ACTIVE_WALLETS;
  }

  /**
   * Get a JSON string containing state data that can be used to rehydrate a session. Pass the
   * contents of this to the constructor as `stateData` to rehydrate.
   */
  public getStateData () {
    return this.packStateData();
  }

  public getFwConstants () {
    return getFwVersionConst(this.fwVersion ?? Buffer.alloc(0));
  }

  /**
   * `getFwVersion` gets the firmware version of the paired device.
   * @returns Either an object with semver properties (fix, minor, and major) or `null`.
   */
  public getFwVersion (): {
    fix: number;
    minor: number;
    major: number;
  } {
    if (this.fwVersion && this.fwVersion.length >= 3) {
      return {
        fix: this.fwVersion[0],
        minor: this.fwVersion[1],
        major: this.fwVersion[2],
      };
    }
    return { fix: 0, minor: 0, major: 0 };
  }

  /**
   * `getAppName` returns the name of the application to which this device is currently paired.
   */
  public getAppName (): string {
    return this.name;
  }

  /**
   * Return JSON-stringified version of state data. Can be used to rehydrate an SDK session without
   * reconnecting to the target Lattice.
   */
  private packStateData () {
    try {
      const data = {
        activeWallets: {
          internal: {
            uid: this.activeWallets.internal.uid?.toString('hex'),
            name: this.activeWallets.internal.name?.toString(),
            capabilities: this.activeWallets.internal.capabilities,
          },
          external: {
            uid: this.activeWallets.external.uid?.toString('hex'),
            name: this.activeWallets.external.name?.toString(),
            capabilities: this.activeWallets.external.capabilities,
          },
        },
        ephemeralPub: this.ephemeralPub.getPublic().encode('hex'),
        fwVersion: this.fwVersion?.toString('hex'),
        deviceId: this.deviceId,
        name: this.name,
        baseUrl: this.baseUrl,
        privKey: this.privKey.toString('hex'),
        retryCount: this.retryCount,
        timeout: this.timeout,
      };
      return JSON.stringify(data);
    } catch (err) {
      console.warn('Could not pack state data.');
      return null;
    }
  }

  /**
   * Unpack a JSON-stringified version of state data and apply it to state. This will allow us to
   * rehydrate an old session.
   */
  private unpackAndApplyStateData (data: string) {
    try {
      const unpacked = JSON.parse(data);
      // Attempt to parse the data
      const internalWallet = {
        uid: Buffer.from(unpacked.activeWallets.internal.uid, 'hex'),
        name: Buffer.from(unpacked.activeWallets.internal.name),
        capabilities: unpacked.activeWallets.internal.capabilities,
        external: false,
      };
      const externalWallet = {
        uid: Buffer.from(unpacked.activeWallets.external.uid, 'hex'),
        name: Buffer.from(unpacked.activeWallets.external.name),
        capabilities: unpacked.activeWallets.external.capabilities,
        external: true,
      };
      const ephemeralPubBytes = Buffer.from(unpacked.ephemeralPub, 'hex');
      const fwVersionBytes = Buffer.from(unpacked.fwVersion, 'hex');
      const privKeyBytes = Buffer.from(unpacked.privKey, 'hex');
      // Apply unpacked params
      this.activeWallets.internal = internalWallet;
      this.activeWallets.external = externalWallet;
      this.ephemeralPub = getP256KeyPairFromPub(ephemeralPubBytes);
      this.fwVersion = fwVersionBytes;
      this.deviceId = unpacked.deviceId;
      this.name = unpacked.name;
      this.baseUrl = unpacked.baseUrl;
      this.url = `${this.baseUrl}/${this.deviceId}`;
      this.privKey = privKeyBytes;
      this.key = getP256KeyPair(this.privKey);
      this.retryCount = unpacked.retryCount;
      this.timeout = unpacked.timeout;
    } catch (err) {
      console.warn('Could not apply state data.');
    }
  }
}
