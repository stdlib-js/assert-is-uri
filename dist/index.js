"use strict";var n=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var f=n(function(H,s){
var E=require('@stdlib/assert-is-string/dist').isPrimitive,u=/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?[^#]*)?(?:#.*)?/,v=/[^a-z0-9:\/?#\[\]@!$&'()*+,;=.\-_~%]/i,R=/%[^0-9a-f]/i,_=/%[0-9a-f](:?[^0-9a-f]|$)/i,o=/^\/\//,c=/^[a-z][a-z0-9+\-.]*$/;function h(t){var r,e,a,i;return!(!E(t)||v.test(t)||R.test(t)||_.test(t)||(a=t.match(u),e=a[1],r=a[2],i=a[3],!e||!e.length||!c.test(e.toLowerCase()))||!r&&o.test(i))}s.exports=h
});var m=f();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
