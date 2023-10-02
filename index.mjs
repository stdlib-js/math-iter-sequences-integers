// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-safe-integer@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function d(e,t){return n(t)?s(t,"iter")&&(e.iter=t.iter,!i(t.iter))?new TypeError(o("0a92t,G9","iter",t.iter)):null:new TypeError(o("0a92V,FD",t))}var m=2*r;function l(r){var n,s,i,o,p,a,j;if(n={iter:m},arguments.length&&(o=d(n,r)))throw o;return p=-1,a=0,j=0,e(s={},"next",v),e(s,"return",f),t&&e(s,t,h),s;function v(){return a+=1,i||a>n.iter?{done:!0}:1===a?{value:0,done:!1}:(p<0&&(j+=1),{value:(p*=-1)*j,done:!1})}function f(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}}function h(){return l(n)}}export{l as default};
//# sourceMappingURL=index.mjs.map
