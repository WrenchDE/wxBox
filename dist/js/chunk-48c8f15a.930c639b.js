(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-48c8f15a"],{"0826":function(t,r,e){"use strict";e.r(r);var n=(e("f751"),e("96cf"),e("1da1")),o=e("be94"),i=e("2f62"),a=e("1bfb"),c={data:function(){return{recordListData:[],page:1,flag:!0}},computed:Object(o.a)({},Object(i.c)(["user"])),methods:{show:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(a.c)(Object.assign({},this.user,this.row,{page:this.page}));case 2:(r=t.sent).data.return_data.length?this.recordListData=this.recordListData.concat(r.data.return_data):this.flag=!1;case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),scrollHandler:function(){if(this.$refs.ul.scrollTop+this.$refs.ul.offsetHeight+5>=this.$refs.ul.scrollHeight){if(!this.flag)return this.$createToast({txt:"无更多信息",type:"txt",time:1e3}).show();this.page++,this.show()}}},created:function(){"row"in this.$route.query?this.row=Object.assign({},this.user,JSON.parse(this.$route.query.row)):this.row=Object.assign({},this.user,this.$route.query),this.show()},mounted:function(){this.$refs.ul.addEventListener("scroll",this.scrollHandler)}},u=(e("2178"),e("2877")),s=Object(u.a)(c,function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"all"},[t.recordListData.length?t._e():e("footer",{staticClass:"footerMsg"},[t._v("\n    暂无数据\n  ")]),e("ul",{ref:"ul",staticClass:"content"},t._l(t.recordListData,function(r,n){return e("li",{key:n,ref:"li",refInFor:!0,staticClass:"list"},[e("aside",{staticClass:"aside"},[t._v("\n        "+t._s(r.goods_name)+"\n        "),e("font",[t._v(t._s(r.exchange_time))])],1),t._v("\n      -"+t._s(r.use_point)+"\n    ")])}),0)])},[],!1,null,"0c6e8c19",null);s.options.__file="record.vue",r.default=s.exports},"0f06":function(t,r,e){var n=e("3156");e("a481");var o={"/api":{target:"http://192.168.0.103:85/userapi/v1/",changeOrigin:!0,pathRewrite:{"^/api":"/"}}},i={};for(var a in o)i[a.replace(/\//,"")]=a;t.exports=n({proxy:o},i)},"1bfb":function(t,r,e){"use strict";e.d(r,"f",function(){return i}),e.d(r,"e",function(){return a}),e.d(r,"g",function(){return c}),e.d(r,"c",function(){return u}),e.d(r,"d",function(){return s}),e.d(r,"a",function(){return f}),e.d(r,"b",function(){return h}),e("cadf"),e("551c"),e("097d");var n=e("365c"),o=e("0f06").api,i=function(t){return n.a.post("".concat(o,"/shopPoint"),t)},a=function(t){return n.a.post("".concat(o,"/shopList"),t)},c=function(t){return n.a.post("".concat(o,"/shoppingDesc"),t)},u=function(t){return n.a.post("".concat(o,"/shopExchangeRecords"),t)},s=function(t){return n.a.post("".concat(o,"/shopInformation"),t)},f=function(t){return n.a.post("".concat(o,"/integral"),t)},h=function(t){return n.a.post("".concat(o,"/personalCenter"),t)}},"1da1":function(t,r,e){"use strict";function n(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise(function(o,i){var a=t.apply(r,e);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)})}}e.d(r,"a",function(){return o})},2178:function(t,r,e){"use strict";var n=e("982d");e.n(n).a},3156:function(t,r,e){var n=e("9523");t.exports=function(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{},o=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(r){n(t,r,e[r])})}return t}},9523:function(t,r){t.exports=function(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}},"96cf":function(t,r){!function(r){"use strict";var e,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",s="object"==typeof t,f=r.regeneratorRuntime;if(f)s&&(t.exports=f);else{(f=r.regeneratorRuntime=s?t.exports:{}).wrap=b;var h="suspendedStart",l="suspendedYield",p="executing",d="completed",y={},v={};v[a]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g($([])));m&&m!==n&&o.call(m,a)&&(v=m);var w=O.prototype=L.prototype=Object.create(v);_.prototype=w.constructor=O,O.constructor=_,O[u]=_.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===_||"GeneratorFunction"===(r.displayName||r.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,O):(t.__proto__=O,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(w),t},f.awrap=function(t){return{__await:t}},E(j.prototype),j.prototype[c]=function(){return this},f.AsyncIterator=j,f.async=function(t,r,e,n){var o=new j(b(t,r,e,n));return f.isGeneratorFunction(r)?o:o.next().then(function(t){return t.done?t.value:o.next()})},E(w),w[u]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},f.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},f.values=$,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),N(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;N(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:$(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}}}function b(t,r,e,n){var o=r&&r.prototype instanceof L?r:L,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(t,r,e){var n=h;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return G()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=k(a,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===h)throw n=d,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=x(t,r,e);if("normal"===u.type){if(n=e.done?d:l,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=d,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function x(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}function L(){}function _(){}function O(){}function E(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function j(t){function r(e,n,i,a){var c=x(t[e],t,n);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then(function(t){r("next",t,i,a)},function(t){r("throw",t,i,a)}):Promise.resolve(s).then(function(t){u.value=t,i(u)},a)}a(c.arg)}var e;this._invoke=function(t,n){function o(){return new Promise(function(e,o){r(t,n,e,o)})}return e=e?e.then(o,o):o()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=x(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function P(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function N(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function $(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){for(;++n<t.length;)if(o.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:G}}function G(){return{value:e,done:!0}}}(function(){return this}()||Function("return this")())},"982d":function(t,r,e){}}]);