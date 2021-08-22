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

# Cube Root of Epsilon

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> [Cube root][@stdlib/math/base/special/cbrt] of [single-precision floating-point epsilon][@stdlib/constants/float32/eps].

<section class="installation">

## Installation

```bash
npm install @stdlib/constants-float32-cbrt-eps
```

</section>

<section class="usage">

## Usage

```javascript
var FLOAT32_CBRT_EPSILON = require( '@stdlib/constants-float32-cbrt-eps' );
```

#### FLOAT32_CBRT_EPSILON

[Cube root][@stdlib/math/base/special/cbrt] of [single-precision floating-point epsilon][@stdlib/constants/float32/eps].

```javascript
var bool = ( FLOAT32_CBRT_EPSILON === 0.004921566694974899 );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var abs = require( '@stdlib/math-base-special-abs' );
var max = require( '@stdlib/math-base-special-max' );
var float64ToFloat32 = require( '@stdlib/number-float64-base-to-float32' );
var randu = require( '@stdlib/random-base-randu' );
var FLOAT32_CBRT_EPSILON = require( '@stdlib/constants-float32-cbrt-eps' );

var bool;
var a;
var b;
var i;

function isApprox( a, b ) {
    var delta;
    var tol;

    delta = float64ToFloat32( abs( a - b ) );
    tol = float64ToFloat32( FLOAT32_CBRT_EPSILON * max( abs( a ), abs( b ) ) );

    return ( delta <= tol );
}

for ( i = 0; i < 100; i++ ) {
    a = float64ToFloat32( randu()*10.0 );
    b = float64ToFloat32( a + (randu()*0.02) - 0.01 );
    bool = isApprox( a, b );
    console.log( '%d %s approximately equal to %d', a, ( bool ) ? 'is' : 'is not', b );
}
```

</section>

<!-- /.examples -->


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

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/constants-float32-cbrt-eps.svg
[npm-url]: https://npmjs.org/package/@stdlib/constants-float32-cbrt-eps

[test-image]: https://github.com/stdlib-js/constants-float32-cbrt-eps/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/constants-float32-cbrt-eps/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/constants-float32-cbrt-eps/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/constants-float32-cbrt-eps?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/constants-float32-cbrt-eps.svg
[dependencies-url]: https://david-dm.org/stdlib-js/constants-float32-cbrt-eps/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/constants-float32-cbrt-eps/main/LICENSE

[@stdlib/math/base/special/cbrt]: https://github.com/stdlib-js/math-base-special-cbrt

[@stdlib/constants/float32/eps]: https://github.com/stdlib-js/constants-float32-eps

</section>

<!-- /.links -->
