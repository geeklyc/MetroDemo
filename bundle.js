var __BUNDLE_START_TIME__=this.nativePerformanceNow?nativePerformanceNow():Date.now(),__DEV__=false,process=this.process||{},__METRO_GLOBAL_PREFIX__='';process.env=process.env||{};process.env.NODE_ENV=process.env.NODE_ENV||"production";
!(function(e){"use strict";e.__r=i,e[`${__METRO_GLOBAL_PREFIX__}__d`]=function(e,n,o){if(null!=t[n])return;const i={dependencyMap:o,factory:e,hasError:!1,importedAll:r,importedDefault:r,isInitialized:!1,publicModule:{exports:{}}};t[n]=i},e.__c=o,e.__registerSegment=function(e,r,n){p[e]=r,n&&n.forEach(r=>{t[r]||h.has(r)||h.set(r,e)})};var t=o();const r={},{hasOwnProperty:n}={};function o(){return t=Object.create(null)}function i(e){const r=e,n=t[r];return n&&n.isInitialized?n.publicModule.exports:d(r,n)}function l(e){const n=e;if(t[n]&&t[n].importedDefault!==r)return t[n].importedDefault;const o=i(n),l=o&&o.__esModule?o.default:o;return t[n].importedDefault=l}function u(e){const o=e;if(t[o]&&t[o].importedAll!==r)return t[o].importedAll;const l=i(o);let u;if(l&&l.__esModule)u=l;else{if(u={},l)for(const e in l)n.call(l,e)&&(u[e]=l[e]);u.default=l}return t[o].importedAll=u}i.importDefault=l,i.importAll=u;let c=!1;function d(t,r){if(!c&&e.ErrorUtils){let n;c=!0;try{n=_(t,r)}catch(t){e.ErrorUtils.reportFatalError(t)}return c=!1,n}return _(t,r)}const s=16,a=65535;function f(e){return{segmentId:e>>>s,localId:e&a}}i.unpackModuleId=f,i.packModuleId=function(e){return(e.segmentId<<s)+e.localId};const p=[],h=new Map;function _(r,n){if(!n&&p.length>0){var o;const e=null!==(o=h.get(r))&&void 0!==o?o:0,i=p[e];null!=i&&(i(r),n=t[r],h.delete(r))}const c=e.nativeRequire;if(!n&&c){const{segmentId:e,localId:o}=f(r);c(o,e),n=t[r]}if(!n)throw m(r);if(n.hasError)throw g(r,n.error);n.isInitialized=!0;const{factory:d,dependencyMap:s}=n;try{const t=n.publicModule;return t.id=r,d(e,i,l,u,t,t.exports,s),n.factory=void 0,n.dependencyMap=void 0,t.exports}catch(e){throw n.hasError=!0,n.error=e,n.isInitialized=!1,n.publicModule.exports=void 0,e}}function m(e){return Error('Requiring unknown module "'+e+'".')}function g(e,t){return Error('Requiring module "'+e+'", which threw an exception: '+t)}})('undefined'!=typeof globalThis?globalThis:'undefined'!=typeof global?global:'undefined'!=typeof window?window:this);
__d(function(g,r,i,a,m,e,d){"use strict";const{printLog:o}=r(d[0]);o("hello world")},0,[1]);
__d(function(g,r,i,a,m,e,d){"use strict";m.exports={printLog:function(o){console.log("[Metro Log]",o)}}},1,[]);
__r(0);