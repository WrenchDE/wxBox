(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-eca2d5e2"],{"0f06":function(t,e,r){var n=r("3156");r("a481");var o={"/api":{target:"http://192.168.0.103:85/userapi/v1/",changeOrigin:!0,pathRewrite:{"^/api":"/"}}},i={};for(var a in o)i[a.replace(/\//,"")]=a;t.exports=n({proxy:o},i)},"17be":function(t,e,r){t.exports=r.p+"img/logo.bbb349f5.jpg"},"1da1":function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise(function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)})}}r.d(e,"a",function(){return o})},3156:function(t,e,r){var n=r("9523");t.exports=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),o.forEach(function(e){n(t,e,r[e])})}return t}},"3af5":function(t,e,r){},7803:function(t,e,r){"use strict";r.r(e);var n=(r("a481"),r("ac6a"),r("f751"),r("96cf"),r("1da1")),o=r("be94"),i=r("2f62"),a=r("365c"),c=r("0f06").api,s=function(t){return a.a.post("".concat(c,"/getRegisterCode"),t)},u=function(t){return a.a.post("".concat(c,"/userRegister"),t)},h={data:function(){return{registerData:{telephone:"",code:"",code_id:"",password:""},contrast:{telephone:"手机号",code:"验证码",password:"密码"},time:0}},computed:Object(o.a)({},Object(i.c)(["phone","APP_ID","ENCSTR"])),created:function(){},methods:{getCode:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e,r,n=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.time){t.next=2;break}return t.abrupt("return");case 2:if(this.registerData.telephone){t.next=4;break}return t.abrupt("return",this.$createToast({txt:"手机号未知",type:"txt"}).show());case 4:return t.next=6,s({telephone:this.registerData.telephone});case 6:e=t.sent,this.$createToast({txt:e.data.return_msg,type:"txt"}).show(),200===e.data.return_code&&(this.time=60,r=setInterval(function(){n.time--,n.time||clearInterval(r)},1e3),this.registerData.code_id=e.data.return_data.code_id);case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),sumbit:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e,r,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=regeneratorRuntime.keys(this.contrast);case 1:if((t.t1=t.t0()).done){t.next=7;break}if(e=t.t1.value,this.registerData[e]){t.next=5;break}return t.abrupt("return",this.$createToast({txt:"".concat(this.contrast[e],"不能为空"),type:"txt"}).show());case 5:t.next=1;break;case 7:if(!(this.registerData.password.length<6)){t.next=9;break}return t.abrupt("return",this.$createToast({txt:"密码至少6位",type:"txt"}).show());case 9:return(r=this.$createToast({txt:"验证中",mask:!0,time:0})).show(),t.next=13,u(Object.assign({},this.registerData,{password:this.$md5(this.registerData.password)}));case 13:200===(n=t.sent).data.return_code&&this.$router.push({name:"login"}),r.hide(),this.$createToast({txt:n.data.return_msg,type:"txt"}).show();case 17:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),back:function(){this.$router.replace({name:"login"})},viewAgreement:function(){this.$router.push({name:"agreement"})}},mounted:function(){document.title="注册"}},l=(r("d883"),r("2877")),f=Object(l.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"all"},[n("img",{attrs:{src:r("17be"),alt:""}}),n("cube-input",{staticClass:"telephone",attrs:{placeholder:"请输入手机号",type:"number"},model:{value:t.registerData.telephone,callback:function(e){t.$set(t.registerData,"telephone",e)},expression:"registerData.telephone"}}),n("div",{staticClass:"getCode"},[n("cube-input",{staticClass:"code",attrs:{placeholder:"验证码",type:"number"},model:{value:t.registerData.code,callback:function(e){t.$set(t.registerData,"code",e)},expression:"registerData.code"}}),n("cube-button",{attrs:{light:""},on:{click:t.getCode}},[t._v(t._s(t.time?t.time+" s":"获取验证码"))])],1),n("cube-input",{staticClass:"code",attrs:{type:"password",placeholder:"密码"},model:{value:t.registerData.password,callback:function(e){t.$set(t.registerData,"password",e)},expression:"registerData.password"}}),n("cube-button",{staticStyle:{"margin-top":"16px"},attrs:{primary:""},on:{click:t.sumbit}},[t._v("确认")]),n("p",{staticClass:"agreement"},[t._v("获取验证码，表示已同意"),n("span",{on:{click:t.viewAgreement}},[t._v("《注册协议》")])])],1)},[],!1,null,"d7bf0434",null);f.options.__file="register.vue",e.default=f.exports},9523:function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag",u="object"==typeof t,h=e.regeneratorRuntime;if(h)u&&(t.exports=h);else{(h=e.regeneratorRuntime=u?t.exports:{}).wrap=b;var l="suspendedStart",f="suspendedYield",p="executing",d="completed",g={},v={};v[a]=function(){return this};var y=Object.getPrototypeOf,m=y&&y(y(T([])));m&&m!==n&&o.call(m,a)&&(v=m);var w=L.prototype=_.prototype=Object.create(v);k.prototype=w.constructor=L,L.constructor=k,L[s]=k.displayName="GeneratorFunction",h.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},h.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(w),t},h.awrap=function(t){return{__await:t}},O(E.prototype),E.prototype[c]=function(){return this},h.AsyncIterator=E,h.async=function(t,e,r,n){var o=new E(b(t,e,r,n));return h.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},O(w),w[s]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},h.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},h.values=T,$.prototype={constructor:$,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}}}function b(t,e,r,n){var o=e&&e.prototype instanceof _?e:_,i=Object.create(o.prototype),a=new $(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return C()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=x(t,e,r);if("normal"===s.type){if(n=r.done?d:f,s.arg===g)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function _(){}function k(){}function L(){}function O(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function E(t){function e(r,n,i,a){var c=x(t[r],t,n);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"==typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(u).then(function(t){s.value=t,i(s)},a)}a(c.arg)}var r;this._invoke=function(t,n){function o(){return new Promise(function(r,o){e(t,n,r,o)})}return r=r?r.then(o,o):o()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,g;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function D(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function $(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(D,this),this.reset(!0)}function T(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:C}}function C(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},d883:function(t,e,r){"use strict";var n=r("3af5");r.n(n).a}}]);