// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.2-esm/index.mjs";var s=/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?[^#]*)?(?:#.*)?/,e=/[^a-z0-9:\/?#\[\]@!$&'()*+,;=.\-_~%]/i,a=/%[^0-9a-f]/i,r=/%[0-9a-f](:?[^0-9a-f]|$)/i,i=/^\/\//,n=/^[a-z][a-z0-9+\-.]*$/;function f(f){var o,d,m,h;return!!t(f)&&(!e.test(f)&&(!a.test(f)&&!r.test(f)&&(d=(m=f.match(s))[1],o=m[2],h=m[3],!!(d&&d.length&&n.test(d.toLowerCase()))&&!(!o&&i.test(h)))))}export{f as default};
//# sourceMappingURL=index.mjs.map
