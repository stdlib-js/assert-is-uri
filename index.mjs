// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";var s=t.isPrimitive,e=/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?[^#]*)?(?:#.*)?/,a=/[^a-z0-9:\/?#\[\]@!$&'()*+,;=.\-_~%]/i,i=/%[^0-9a-f]/i,r=/%[0-9a-f](:?[^0-9a-f]|$)/i,n=/^\/\//,f=/^[a-z][a-z0-9+\-.]*$/;var m=function(t){var m,o,d,v;return!!s(t)&&(!a.test(t)&&(!i.test(t)&&!r.test(t)&&(o=(d=t.match(e))[1],m=d[2],v=d[3],!!(o&&o.length&&f.test(o.toLowerCase()))&&!(!m&&n.test(v)))))};export{m as default};
//# sourceMappingURL=index.mjs.map
