// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,o;t=this,o=function(){"use strict";var t="function"==typeof Math.fround?Math.fround:null,o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),n=Object.prototype.toString,e=n,r=function(t){return e.call(t)},f=Object.prototype.hasOwnProperty,l=function(t,o){return null!=t&&f.call(t,o)},u="function"==typeof Symbol?Symbol.toStringTag:"",i=l,a=u,y=n,c=r,p=function(t){var o,n,e;if(null==t)return y.call(t);n=t[a],o=i(t,a);try{t[a]=void 0}catch(o){return y.call(t)}return e=y.call(t),o?t[a]=n:delete t[a],e},d=o&&"symbol"==typeof Symbol.toStringTag?p:c,b="function"==typeof Float32Array,m=function(t){return b&&t instanceof Float32Array||"[object Float32Array]"===d(t)},s=Number.POSITIVE_INFINITY,S="function"==typeof Float32Array?Float32Array:null,h=m,F=s,A=S,T="function"==typeof Float32Array?Float32Array:void 0,g=function(){throw new Error("not implemented")},v=new(function(){var t,o;if("function"!=typeof A)return!1;try{o=new A([1,3.14,-3.14,5e40]),t=h(o)&&1===o[0]&&3.140000104904175===o[1]&&-3.140000104904175===o[2]&&o[3]===F}catch(o){t=!1}return t}()?T:g)(1),I=t;return"function"!=typeof I&&(I=function(t){return v[0]=t,v[0]}),I(.004921566601151848)},"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(t="undefined"!=typeof globalThis?globalThis:t||self).FLOAT32_CBRT_EPSILON=o();
//# sourceMappingURL=index.js.map
