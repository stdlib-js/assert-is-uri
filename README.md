<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# isURI

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is a [URI][uri].



<section class="usage">

## Usage

```javascript
import isURI from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-uri@esm/index.mjs';
```

#### isURI( value )

Tests if a `value` is a [URI][uri].

```javascript
var bool = isURI( 'https://google.com' );
// returns true

bool = isURI( 'ftp://ftp.is.co.za/rfc/rfc1808.txt' );
// returns true

bool = isURI( '' );
// returns false

bool = isURI( 'foo' );
// returns false

bool = isURI( null );
// returns false

bool = isURI( NaN );
// returns false

bool = isURI( true );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   For more information regarding the URI scheme, see [RFC 3986][rfc-3986] and [Wikipedia][uri].
-   On the distinction between URI, URL, and URN, see [The Difference Between URLs and URIs][difference-url-uri].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import isURI from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-uri@esm/index.mjs';

/* Valid */

var bool = isURI( 'http://google.com' );
// returns true

bool = isURI( 'http://localhost/' );
// returns true

bool = isURI( 'http://example.w3.org/path%20with%20spaces.html' );
// returns true

bool = isURI( 'http://example.w3.org/%20' );
// returns true

bool = isURI( 'ftp://ftp.is.co.za/rfc/rfc1808.txt' );
// returns true

bool = isURI( 'ftp://ftp.is.co.za/../../../rfc/rfc1808.txt' );
// returns true

bool = isURI( 'http://www.ietf.org/rfc/rfc2396.txt' );
// returns true

bool = isURI( 'ldap://[2001:db8::7]/c=GB?objectClass?one' );
// returns true

bool = isURI( 'mailto:John.Doe@example.com' );
// returns true

bool = isURI( 'news:comp.infosystems.www.servers.unix' );
// returns true

bool = isURI( 'tel:+1-816-555-1212' );
// returns true

bool = isURI( 'telnet://192.0.2.16:80/' );
// returns true

bool = isURI( 'urn:oasis:names:specification:docbook:dtd:xml:4.1.2' );
// returns true

/* Invalid */

// No scheme:
bool = isURI( '' );
// returns false

// No scheme:
bool = isURI( 'foo' );
// returns false

// No scheme:
bool = isURI( 'foo@bar' );
// returns false

// No scheme:
bool = isURI( '://foo/' );
// returns false

// Illegal characters:
bool = isURI( 'http://<foo>' );
// returns false

// Invalid path:
bool = isURI( 'http:////foo.html' );
// returns false

// Incomplete hex escapes...
bool = isURI( 'http://example.w3.org/%a' );
// returns false

bool = isURI( 'http://example.w3.org/%a/foo' );
// returns false

bool = isURI( 'http://example.w3.org/%at' );
// returns false

</script>
</body>
</html>
```

</section>

<!-- /.examples -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-uri.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-uri

[test-image]: https://github.com/stdlib-js/assert-is-uri/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-uri/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-uri/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-uri?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-uri.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-uri/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/assert-is-uri#cli
[cli-url]: https://github.com/stdlib-js/assert-is-uri/tree/cli
[@stdlib/assert-is-uri]: https://github.com/stdlib-js/assert-is-uri/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-uri/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-uri/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-uri/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-uri/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-uri/main/LICENSE

[uri]: https://en.wikipedia.org/wiki/URI_scheme

[rfc-3986]: https://tools.ietf.org/html/rfc3986

[difference-url-uri]: https://danielmiessler.com/study/url-uri/

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

</section>

<!-- /.links -->
