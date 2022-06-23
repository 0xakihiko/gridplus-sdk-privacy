"use strict";(self.webpackChunkgridplus_sdk=self.webpackChunkgridplus_sdk||[]).push([[181],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return s}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),o=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):d(d({},e),t)),n},m=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},N={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),k=o(n),s=r,u=k["".concat(p,".").concat(s)]||k[s]||N[s]||i;return n?a.createElement(u,d(d({ref:e},m),{},{components:n})):a.createElement(u,d({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,d=new Array(i);d[0]=k;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,d[1]=l;for(var o=2;o<i;o++)d[o]=n[o];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8891:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),d=["components"],l={id:"constants",title:"Module: constants",custom_edit_url:null},p=void 0,o={unversionedId:"api/modules/constants",id:"api/modules/constants",title:"Module: constants",description:"Variables",source:"@site/docs/api/modules/constants.md",sourceDirName:"api/modules",slug:"/api/modules/constants",permalink:"/gridplus-sdk/api/modules/constants",editUrl:null,tags:[],version:"current",frontMatter:{id:"constants",title:"Module: constants",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: util",permalink:"/gridplus-sdk/api/modules/util"},next:{title:"Module: calldata/evm",permalink:"/gridplus-sdk/api/modules/calldata_evm"}},m=[{value:"Variables",id:"variables",children:[{value:"EXTERNAL",id:"external",children:[{value:"Type declaration",id:"type-declaration",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"EXTERNAL_NETWORKS_BY_CHAIN_ID_URL",id:"external_networks_by_chain_id_url",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"NETWORKS_BY_CHAIN_ID",id:"networks_by_chain_id",children:[{value:"Type declaration",id:"type-declaration-1",children:[],level:4},{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3}],level:2}],N={toc:m};function k(t){var e=t.components,n=(0,r.Z)(t,d);return(0,i.kt)("wrapper",(0,a.Z)({},N,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"external"},"EXTERNAL"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"EXTERNAL"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"Externally exported constants used for building requests"),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"GET_ADDR_FLAGS")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"ED25519_PUB"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 4; ",(0,i.kt)("inlineCode",{parentName:"td"},"SECP256K1_PUB"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 3 }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"GET_ADDR_FLAGS.ED25519_PUB")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"GET_ADDR_FLAGS.SECP256K1_PUB")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"SIGNING")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"CURVES"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"ED25519"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 1; ",(0,i.kt)("inlineCode",{parentName:"td"},"SECP256K1"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 0 } ; ",(0,i.kt)("inlineCode",{parentName:"td"},"ENCODINGS"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"EVM"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 4; ",(0,i.kt)("inlineCode",{parentName:"td"},"NONE"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 1; ",(0,i.kt)("inlineCode",{parentName:"td"},"SOLANA"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 2; ",(0,i.kt)("inlineCode",{parentName:"td"},"TERRA"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 3 } ; ",(0,i.kt)("inlineCode",{parentName:"td"},"HASHES"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"KECCAK256"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 1; ",(0,i.kt)("inlineCode",{parentName:"td"},"NONE"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 0; ",(0,i.kt)("inlineCode",{parentName:"td"},"SHA256"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 2 }  }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"SIGNING.CURVES")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"ED25519"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 1; ",(0,i.kt)("inlineCode",{parentName:"td"},"SECP256K1"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 0 }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"SIGNING.CURVES.ED25519")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"SIGNING.CURVES.SECP256K1")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"SIGNING.ENCODINGS")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"EVM"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 4; ",(0,i.kt)("inlineCode",{parentName:"td"},"NONE"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 1; ",(0,i.kt)("inlineCode",{parentName:"td"},"SOLANA"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 2; ",(0,i.kt)("inlineCode",{parentName:"td"},"TERRA"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 3 }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"SIGNING.ENCODINGS.EVM")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"SIGNING.ENCODINGS.NONE")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"SIGNING.ENCODINGS.SOLANA")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"SIGNING.ENCODINGS.TERRA")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"SIGNING.HASHES")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"KECCAK256"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 1; ",(0,i.kt)("inlineCode",{parentName:"td"},"NONE"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 0; ",(0,i.kt)("inlineCode",{parentName:"td"},"SHA256"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," = 2 }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"SIGNING.HASHES.KECCAK256")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"SIGNING.HASHES.NONE")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"SIGNING.HASHES.SHA256")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/GridPlus/gridplus-sdk/blob/c8c14c3/src/constants.ts#L330"},"constants.ts:330")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"external_networks_by_chain_id_url"},"EXTERNAL","_","NETWORKS","_","BY","_","CHAIN","_","ID","_","URL"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"EXTERNAL","_","NETWORKS","_","BY","_","CHAIN","_","ID","_","URL"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"https://gridplus.github.io/chains/chains.json"')),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/GridPlus/gridplus-sdk/blob/c8c14c3/src/constants.ts#L531"},"constants.ts:531")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"networks_by_chain_id"},"NETWORKS","_","BY","_","CHAIN","_","ID"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"NETWORKS","_","BY","_","CHAIN","_","ID"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"1")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"apiRoute"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'api?module=contract&action=getabi'; ",(0,i.kt)("inlineCode",{parentName:"td"},"baseUrl"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = '",(0,i.kt)("a",{parentName:"td",href:"https://api.etherscan.io'"},"https://api.etherscan.io'"),"; ",(0,i.kt)("inlineCode",{parentName:"td"},"name"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'ethereum' }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"1.apiRoute")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"1.baseUrl")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"1.name")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"137")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"apiRoute"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'api?module=contract&action=getabi'; ",(0,i.kt)("inlineCode",{parentName:"td"},"baseUrl"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = '",(0,i.kt)("a",{parentName:"td",href:"https://api.polygonscan.com'"},"https://api.polygonscan.com'"),"; ",(0,i.kt)("inlineCode",{parentName:"td"},"name"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'polygon' }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"137.apiRoute")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"137.baseUrl")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"137.name")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"43114")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"apiRoute"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'api?module=contract&action=getabi'; ",(0,i.kt)("inlineCode",{parentName:"td"},"baseUrl"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = '",(0,i.kt)("a",{parentName:"td",href:"https://api.snowtrace.io'"},"https://api.snowtrace.io'"),"; ",(0,i.kt)("inlineCode",{parentName:"td"},"name"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'avalanche' }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"43114.apiRoute")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"43114.baseUrl")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"43114.name")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"56")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"apiRoute"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'api?module=contract&action=getabi'; ",(0,i.kt)("inlineCode",{parentName:"td"},"baseUrl"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = '",(0,i.kt)("a",{parentName:"td",href:"https://api.bscscan.com'"},"https://api.bscscan.com'"),"; ",(0,i.kt)("inlineCode",{parentName:"td"},"name"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," = 'binance' }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"56.apiRoute")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"56.baseUrl")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"56.name")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/GridPlus/gridplus-sdk/blob/c8c14c3/src/constants.ts#L534"},"constants.ts:534")))}k.isMDXComponent=!0}}]);