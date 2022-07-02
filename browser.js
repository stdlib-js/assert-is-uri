// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=function(){try{return t({},"x",{}),!0}catch(t){return!1}},r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,l=n.__defineSetter__,a=n.__lookupGetter__,u=n.__lookupSetter__,c=r,f=function(t,e,r){var c,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(a.call(t,e)||u.call(t,e)?(c=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=c):t[e]=r.value),p="get"in r,y="set"in r,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,e,r.get),y&&l&&l.call(t,e,r.set),t},p=e()?c:f,y=function(t,e,r){p(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})},s=function(t){return"string"==typeof t},b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),_=function(){return b&&"symbol"==typeof Symbol.toStringTag},d=Object.prototype.toString,m=d,g=function(t){return m.call(t)},v=Object.prototype.hasOwnProperty,j=function(t,e){return null!=t&&v.call(t,e)},S="function"==typeof Symbol?Symbol.toStringTag:"",h=j,w=S,O=d,P=g,T=function(t){var e,r,n;if(null==t)return O.call(t);r=t[w],e=h(t,w);try{t[w]=void 0}catch(e){return O.call(t)}return n=O.call(t),e?t[w]=r:delete t[w],n},x=_()?T:P,z=String.prototype.valueOf,E=x,$=function(t){try{return z.call(t),!0}catch(t){return!1}},k=_(),A=function(t){return"object"==typeof t&&(t instanceof String||(k?$(t):"[object String]"===E(t)))},C=s,G=A,V=y,F=function(t){return C(t)||G(t)},I=A;V(F,"isPrimitive",s),V(F,"isObject",I);var L=F,R=/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?[^#]*)?(?:#.*)?/,U=/[^a-z0-9:\/?#\[\]@!$&'()*+,;=.\-_~%]/i,q=/%[^0-9a-f]/i,B=/%[0-9a-f](:?[^0-9a-f]|$)/i,D=/^\/\//,H=/^[a-z][a-z0-9+\-.]*$/;return function(t){var e,r,n,o;return!(!L.isPrimitive(t)||U.test(t)||q.test(t)||B.test(t)||(r=(n=t.match(R))[1],e=n[2],o=n[3],!(r&&r.length&&H.test(r.toLowerCase()))||!e&&D.test(o)))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isURI=e();
//# sourceMappingURL=browser.js.map
