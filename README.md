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

# isURI

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is a [URI][uri].

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-is-uri
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var isURI = require( '@stdlib/assert-is-uri' );
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

```javascript
var isURI = require( '@stdlib/assert-is-uri' );

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
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use the module as a general utility, install the module globally

```bash
npm install -g @stdlib/assert-is-uri
```

</section>

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

```text
Usage: is-uri [options] [<uri>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ is-uri http://google.com
true
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'http://google.com' | is-uri
true
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

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
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-uri/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-uri/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-uri/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-uri/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-uri/main/LICENSE

[uri]: http://en.wikipedia.org/wiki/URI_scheme

[rfc-3986]: https://tools.ietf.org/html/rfc3986

[difference-url-uri]: https://danielmiessler.com/study/url-uri/

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
