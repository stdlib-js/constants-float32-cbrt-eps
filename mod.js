// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Math.fround?Math.fround:null;var o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var r=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var a="function"==typeof Symbol?Symbol.toStringTag:"";var e=o&&"symbol"==typeof Symbol.toStringTag?function(t){var o,e,l,f,y;if(null==t)return r.call(t);e=t[a],y=a,o=null!=(f=t)&&n.call(f,y);try{t[a]=void 0}catch(o){return r.call(t)}return l=r.call(t),o?t[a]=e:delete t[a],l}:function(t){return r.call(t)},l="function"==typeof Float32Array;var f=Number.POSITIVE_INFINITY,y="function"==typeof Float32Array?Float32Array:null;var u="function"==typeof Float32Array?Float32Array:void 0;var c=new(function(){var t,o,r;if("function"!=typeof y)return!1;try{o=new y([1,3.14,-3.14,5e40]),r=o,t=(l&&r instanceof Float32Array||"[object Float32Array]"===e(r))&&1===o[0]&&3.140000104904175===o[1]&&-3.140000104904175===o[2]&&o[3]===f}catch(o){t=!1}return t}()?u:function(){throw new Error("not implemented")})(1);var i=("function"==typeof t?t:function(t){return c[0]=t,c[0]})(.004921566601151848);export{i as default};
//# sourceMappingURL=mod.js.map
