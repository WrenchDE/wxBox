(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3c6d3b7b"],{"0f06":function(t,r,e){var n=e("3156");e("a481"),e("cadf"),e("551c"),e("097d");var o={"/api":{target:"http://api.heliyou.com/userapi/v1/",changeOrigin:!0,pathRewrite:{"^/api":"/"}}},i={};for(var a in o)i[a.replace(/\//,"")]=a;t.exports=n({proxy:o},i)},"1c88":function(t,r,e){},"1da1":function(t,r,e){"use strict";function n(t,r,e,n,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void e(t)}s.done?r(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise(function(o,i){var a=t.apply(r,e);function s(t){n(a,o,i,s,c,"next",t)}function c(t){n(a,o,i,s,c,"throw",t)}s(void 0)})}}e.d(r,"a",function(){return o})},3156:function(t,r,e){var n=e("9523");t.exports=function(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{},o=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(r){n(t,r,e[r])})}return t}},"3c06":function(t,r,e){"use strict";e.r(r);var n=[function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("header",{staticClass:"header"},[n("p",[n("img",{attrs:{src:e("c056"),alt:""}}),t._v("\n      交易成功\n    ")])])}],o=(e("f751"),e("96cf"),e("1da1")),i=e("be94"),a=(e("cadf"),e("551c"),e("097d"),e("365c")),s=e("0f06").api,c=function(t){return a.a.post("".concat(s,"/saleOrderDetail"),t)},u=e("2f62"),f={data:function(){return{a:1,row:{},goodsData:{}}},computed:Object(i.a)({way:function(){var t;switch(this.goodsData.pay_type){case 1:t="微信";break;case 2:t="支付宝";break;case 3:t="余额";break;default:t="未知"}return t}},Object(u.c)(["user"])),methods:{firstShow:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c(Object.assign({},this.row));case 2:r=t.sent,this.goodsData=r.data.return_data;case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),viewQuestion:function(){this.$router.push({name:"question"})}},created:function(){"row"in this.$route.query?this.row=Object.assign({},this.user,JSON.parse(this.$route.query.row)):this.row=Object.assign({},this.user,this.$route.query),this.firstShow()}},l=(e("7faa"),e("2877")),h=Object(l.a)(f,function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"all"},[t._m(0),e("div",{staticClass:"container"},[t.goodsData.goods_info?e("ul",{staticClass:"content"},t._l(t.goodsData.goods_info,function(r,n){return e("li",{key:n},[e("div",{staticClass:"goodsRow"},[e("img",{attrs:{src:r.goods_img}}),e("div",{staticClass:"goodsContent"},[e("div",{staticClass:"goodsContentTop"},[e("font",{staticClass:"goodsContentTopLeft"},[e("span",[t._v(t._s(r.goods_name))]),e("span",[t._v("\n                  ￥"+t._s(r.goods_price)),e("br"),e("br"),e("div",{staticStyle:{"text-align":"right"}},[t._v("×"+t._s(r.goods_number))])])]),e("div",{staticClass:"abstract"},[e("span",[t._v("规格 "+t._s(r.goods_spec))]),t._v(" \n                "),e("cube-button",{attrs:{inline:"",outline:""},on:{click:t.viewQuestion}},[t._v("联系客服")])],1)],1)])])])}),0):t._e(),e("ul",{staticClass:"list listOne"},[e("li",[e("font",[t._v("订单编号")]),e("span",[t._v(t._s(t.goodsData.order_sn))])],1),e("li",[e("font",[t._v("下单时间")]),e("span",[t._v(t._s(t.goodsData.create_time))])],1)]),e("ul",{staticClass:"list"},[e("li",[e("font",[t._v("支付方式")]),e("span",[t._v(t._s(t.way))])],1),e("li",[e("font",[t._v("商品总额")]),e("span",[t._v(t._s(t.goodsData.total_fee))])],1),Number(t.goodsData.preferential_amount)?t._e():e("li",[e("font",[t._v("优惠")]),e("span",[t._v("-"+t._s(t.goodsData.preferential_amount))])],1)]),e("footer",{staticClass:"foorter"},[e("p",[t._v("实付款: "),e("font",[t._v(t._s(t.goodsData.pay_fee))])],1)])])])},n,!1,null,"80aa6a24",null);h.options.__file="orderDetails.vue",r.default=h.exports},"7faa":function(t,r,e){"use strict";var n=e("1c88");e.n(n).a},9523:function(t,r){t.exports=function(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}},"96cf":function(t,r){!function(r){"use strict";var e,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",u="object"==typeof t,f=r.regeneratorRuntime;if(f)u&&(t.exports=f);else{(f=r.regeneratorRuntime=u?t.exports:{}).wrap=b;var l="suspendedStart",h="suspendedYield",p="executing",v="completed",d={},g={};g[a]=function(){return this};var y=Object.getPrototypeOf,m=y&&y(y(F([])));m&&m!==n&&o.call(m,a)&&(g=m);var w=x.prototype=A.prototype=Object.create(g);_.prototype=w.constructor=x,x.constructor=_,x[c]=_.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===_||"GeneratorFunction"===(r.displayName||r.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},f.awrap=function(t){return{__await:t}},S(L.prototype),L.prototype[s]=function(){return this},f.AsyncIterator=L,f.async=function(t,r,e,n){var o=new L(b(t,r,e,n));return f.isGeneratorFunction(r)?o:o.next().then(function(t){return t.done?t.value:o.next()})},S(w),w[c]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},f.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},f.values=F,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),C(e),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;C(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:F(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}}}function b(t,r,e,n){var o=r&&r.prototype instanceof A?r:A,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw i;return R()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var s=j(a,e);if(s){if(s===d)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=v,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var c=E(t,r,e);if("normal"===c.type){if(n=e.done?v:h,c.arg===d)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n=v,e.method="throw",e.arg=c.arg)}}}(t,e,a),i}function E(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}function A(){}function _(){}function x(){}function S(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function L(t){function r(e,n,i,a){var s=E(t[e],t,n);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(t){r("next",t,i,a)},function(t){r("throw",t,i,a)}):Promise.resolve(u).then(function(t){c.value=t,i(c)},a)}a(s.arg)}var e;this._invoke=function(t,n){function o(){return new Promise(function(e,o){r(t,n,e,o)})}return e=e?e.then(o,o):o()}}function j(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=E(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function C(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function F(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){for(;++n<t.length;)if(o.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:R}}function R(){return{value:e,done:!0}}}(function(){return this}()||Function("return this")())},c056:function(t,r){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAFjUlEQVRoQ82aeahVVRTGf19RRgNlBVZEiUZkhBmmGZUGFWhCFJVmWSlYZFlZ/aFISWXRZNEoWJGVGZlgCA0UjdJAUUbzYFkRzbPRYNOK73Hu477rPffsc++59RZc8HHW+tb6zj577bXWVlQkEbEDMAYYCewD7A5sC2yTufgZ+An4BHgTeAV4QdL3VYSgTkAiwkEeDZwEHAoMKIn3O/AUcA+wStIvJe171dsikr39c4EzAa9EFfINcLN/7axSKSIRsSlgAhcB21URfROM74BLMkKR6iOZSETsAdwLjEoF71DvWWCqJO+pQkkiEhGTgcXZ5i0ErVDhW2C6pAeLMAuJRMQ5wA1FQF18/jdwuqQ7WvloSSQizgOu62KQZaBN5rY8g1wiETENWFLGU5d1vfGPkbSqmZ+mRCLCh9pzbZwLXebCeuAASe82OtqISHbI+eTdrdtRtYn/DrCvpD/r7ZsRWQTMbNNJVWZfADu3AFsgaX4ukYjwGfFSVdG0gfMRcAawP3B5C3uvxl6S1tV0+qxIRDwNjGsjgCpMlgKzJK2PiDuBUwtAV0iatBGRiBgLPFNFRCUx/gHmSFpYs4uIx4AjCnCcxYZJes96vSsSESud3koG0an6BmCKpAfqgSLiNWB4AvgiSWf1EomIHYHPgc0SjKtS+QM4StKjjYAR8XHWzxT5+hHYSdKGnhWJiNOAW4usKn7ulbivGWZEuFBMTf8TJT1cI/Jff1bzJF2R92IiYg2wX+KLc/9ytiLCZJy3ByUadqq2UtKxrUAiYhlwYqKjNZJGmsgQ4MNEo07V7GekJPfuuRIRU7LeJ8WfE8ZAExkPPJJi0aHOX8BoSa8WkHDffzzgcyVVhpvIDCC3PE5FStCbL2lBAYmJWd8+OAGvXmWCicwBrixp2Kj+G/AycEgOjovQEZLcJDWViPDmn9tmHFNNxMa5GSQB+CFgNvAl4FrJZ1KjHCzJbcFGklXby4EJCb7yVGaZyPnAtW2A+C3PlvREzTYiPGG5vgFrqaRTckhsDzxeItXmhXmBiXg2dUsJIp4MujK9qbEniAhXBmvrTuVfgSGSvmrEj4iBgIvUlFKkKLyZJlIm1blXuViSh2l53/rJwN3Zw8skeQbWRyLCo1STGFEUYeLzySZSpur1iXu7f42rUe8wIl7PVmWwpB8anjm9+nM8KDHIFLWxJrIL8FmKdp3OG9m8yYPoZhv4ODdHkjbKQhHhjd3bR5T029RdT+HoJyWLtBqYU6nPBX8+fdJqNlodIMl7pFci4tJs3FpB/L0Q6yQNrRHp5C2t9kks6etW0UWEV2lFlQwyrGWSptaI1G/Qdnz5/Bgv6f2cT21YNgvYuh3wApsTJC2vEfHVgCvgThorH4iHS3qr4XPaEnB9tWcXSPh+ZZD7/PpW18vu5e9EPHQeJ+ntGkhEuGFz49YN6fmsDFxPxNMT5/ZOxSszVtLaiDgScAnTLRkj6cU+RPxHRDwPHFiBV/fcvk90IblrBXjNIJ6UdFjtQeNcy9Wrs1AV4vvAraoAysEYJckvqkeajUx9MenLzf4siyV5ItkrzYg4g7nE8InfH8Wp3kNsX3fnE8n2ij8xb/xN+hkTz3y9wV3z9ZFWFz2zXKr3MyLTJN3VLKaiqzf3HfP6CZm5kq7KiyXlMtSF4YX/MxkPua9uFUMhkWzPOEPc2GEJ0867cAqfkTdaLdzszTxGxGjg/sThcjtBN9r4im2SJM8GCiVpRWooEeHq1a2r7963KERvT8EXntcACyW5KEySUkTqCA117551epsneSpWchPmjORGzVccpaQtInWEPPqfno04925WKRRE487Slzpu7Ja0GmoUseqISD14RHiVXEF7mOF/++f/z1U7VB20h9cfZCMjX/OtlvRpUZApz/8FJ6bK6ztI7/oAAAAASUVORK5CYII="}}]);