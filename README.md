<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# iterIntegersSeq

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an iterator which generates an [interleaved integer sequence][oeis-a001057].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import iterIntegersSeq from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-iter-sequences-integers@esm/index.mjs';
```

#### iterIntegersSeq( \[options] )

Returns an iterator which generates an interleaved integer sequence.

```javascript
var it = iterIntegersSeq();
// returns <Object>

var v = it.next().value;
// returns 0

v = it.next().value;
// returns 1

v = it.next().value;
// returns -1

v = it.next().value;
// returns 2

v = it.next().value;
// returns -2

// ...
```

The returned iterator protocol-compliant object has the following properties:

-   **next**: function which returns an iterator protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an iterator and returns a single (optional) argument in an iterator protocol-compliant object.

The function supports the following `options`:

-   **iter**: number of iterations. Default: `18014398509481984`.

By default, the function returns a finite iterator to avoid exceeding the maximum safe double-precision floating-point integer. To adjust the number of iterations, set the `iter` option.

```javascript
var opts = {
    'iter': 2
};
var it = iterIntegersSeq( opts );
// returns <Object>

var v = it.next().value;
// returns 0

v = it.next().value;
// returns 1

var bool = it.next().done;
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an environment supports `Symbol.iterator`, the returned iterator is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import iterIntegersSeq from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-iter-sequences-integers@esm/index.mjs';

// Create an iterator:
var opts = {
    'iter': 100
};
var it = iterIntegersSeq( opts );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( v.value );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-iter/sequences/negative-integers`][@stdlib/math/iter/sequences/negative-integers]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a negative integer sequence.</span>
-   <span class="package-name">[`@stdlib/math-iter/sequences/nonnegative-integers`][@stdlib/math/iter/sequences/nonnegative-integers]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a nonnegative integer sequence.</span>
-   <span class="package-name">[`@stdlib/math-iter/sequences/nonpositive-integers`][@stdlib/math/iter/sequences/nonpositive-integers]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a nonpositive integer sequence.</span>
-   <span class="package-name">[`@stdlib/math-iter/sequences/positive-integers`][@stdlib/math/iter/sequences/positive-integers]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a positive integer sequence.</span>

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

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-iter-sequences-integers.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-iter-sequences-integers

[test-image]: https://github.com/stdlib-js/math-iter-sequences-integers/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-iter-sequences-integers/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-iter-sequences-integers/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-iter-sequences-integers?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-iter-sequences-integers.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-iter-sequences-integers/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-iter-sequences-integers/tree/deno
[umd-url]: https://github.com/stdlib-js/math-iter-sequences-integers/tree/umd
[esm-url]: https://github.com/stdlib-js/math-iter-sequences-integers/tree/esm
[branches-url]: https://github.com/stdlib-js/math-iter-sequences-integers/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-iter-sequences-integers/main/LICENSE

[oeis-a001057]: https://oeis.org/A001057

<!-- <related-links> -->

[@stdlib/math/iter/sequences/negative-integers]: https://github.com/stdlib-js/math-iter-sequences-negative-integers/tree/esm

[@stdlib/math/iter/sequences/nonnegative-integers]: https://github.com/stdlib-js/math-iter-sequences-nonnegative-integers/tree/esm

[@stdlib/math/iter/sequences/nonpositive-integers]: https://github.com/stdlib-js/math-iter-sequences-nonpositive-integers/tree/esm

[@stdlib/math/iter/sequences/positive-integers]: https://github.com/stdlib-js/math-iter-sequences-positive-integers/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
