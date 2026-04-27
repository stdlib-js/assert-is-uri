"use strict";var n=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var f=n(function(H,s){
var E=require('@stdlib/assert-is-string/dist').isPrimitive,u=/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?[^#]*)?(?:#.*)?/,v=/[^a-z0-9:\/?#\[\]@!$&'()*+,;=.\-_~%]/i,R=/%[^0-9a-f]/i,_=/%[0-9a-f](:?[^0-9a-f]|$)/i,o=/^\/\//,c=/^[a-z][a-z0-9+\-.]*$/;function h(r){var t,e,a,i;return!(!E(r)||v.test(r)||R.test(r)||_.test(r)||(a=r.match(u),e=a[1],t=a[2],i=a[3],!e||!e.length||!c.test(e.toLowerCase()))||!t&&o.test(i))}s.exports=h
});var m=f();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
