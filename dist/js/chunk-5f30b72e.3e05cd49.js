(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5f30b72e"],{"1bfb":function(t,e,n){"use strict";n.d(e,"f",function(){return o}),n.d(e,"e",function(){return s}),n.d(e,"g",function(){return c}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return u}),n.d(e,"a",function(){return d}),n.d(e,"b",function(){return l}),n("cadf"),n("551c"),n("097d");var r=n("365c"),a=n("0f06").api,o=function(t){return r.a.post("".concat(a,"/shopPoint"),t)},s=function(t){return r.a.post("".concat(a,"/shopList"),t)},c=function(t){return r.a.post("".concat(a,"/shoppingDesc"),t)},i=function(t){return r.a.post("".concat(a,"/shopExchangeRecords"),t)},u=function(t){return r.a.post("".concat(a,"/shopInformation"),t)},d=function(t){return r.a.post("".concat(a,"/integral"),t)},l=function(t){return r.a.post("".concat(a,"/personalCenter"),t)}},d2f3:function(t,e,n){"use strict";n.r(e);var r=(n("f751"),n("96cf"),n("1da1")),a=n("be94"),o=(n("cadf"),n("551c"),n("097d"),n("4875")),s=n("1bfb"),c=n("2f62"),i={components:{sxInputNumber:o.a},computed:Object(a.a)({},Object(c.c)(["user"])),data:function(){return{row:{},formStruct:{user_name:{label:"姓名",placeholder:"请输入姓名"},telephone:{label:"电话",placeholder:"请输入手机号"},address:{label:"地址",placeholder:"请输入地址"},exchange_num:"数量"},formModel:{user_name:"",telephone:"",address:""},exchange_num:1,disabled:!1}},methods:{exchangeNow:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.formModel.user_name){t.next=3;break}return t.abrupt("return",this.$createToast({txt:"请输入姓名",type:"txt",time:1e3}).show());case 3:if(this.formModel.telephone){t.next=5;break}return t.abrupt("return",this.$createToast({txt:"请输入手机号",type:"txt",time:1e3}).show());case 5:if(this.formModel.address){t.next=7;break}return t.abrupt("return",this.$createToast({txt:"请输入地址",type:"txt",time:1e3}).show());case 7:if(/(?:^1[3456789]|^9[28])\d{9}$/.test(this.formModel.telephone)){t.next=9;break}return t.abrupt("return",this.$createToast({txt:"请输入正确手机号",type:"txt",time:1e3}).show());case 9:return this.disabled=!0,t.next=12,Object(s.d)(Object.assign({},this.user,this.formModel,this.row,{exchange_num:this.exchange_num,order_origin:4}));case 12:if(e=t.sent,this.disabled=!1,200!==e.data.return_code){t.next=16;break}return t.abrupt("return",this.$createToast({txt:e.data.return_msg,type:"txt",time:1200}).show());case 16:this.$createDialog({type:"confirm",content:e.data.return_msg,confirmBtn:{text:"确定",active:!0,href:"javascript:;"},cancelBtn:{text:"取消",href:"javascript:;"},onConfirm:function(){},onCancel:function(){}}).show();case 17:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},created:function(){"row"in this.$route.query?this.row=JSON.parse(this.$route.query.row):this.row=this.$route.query}},u=(n("f248"),n("2877")),d=Object(u.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"all"},[n("div",{staticClass:"detailsContent"},[n("header",{staticClass:"header"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:t.row.goods_img,alt:""}})]),n("div",{staticClass:"content"},[n("header",{staticClass:"goodsName"},[t._v(t._s(t.row.goods_name))]),n("footer",{staticClass:"payPoints"},[t._v(t._s(t.row.pay_points)+"积分")])])]),n("br"),n("br"),n("div",{staticClass:"container"},[t._v("\n      收货信息\n      "),t._l(t.formModel,function(e,r){return n("label",{key:r},[n("p",[t._v(t._s(t.formStruct[r].label))]),n("cube-input",{attrs:{disabled:t.disabled,placeholder:t.formStruct[r].placeholder,type:"telephone"===r?"number":""},model:{value:t.formModel[r],callback:function(e){t.$set(t.formModel,r,e)},expression:"formModel[index]"}})],1)}),n("label",[n("p",[t._v(t._s(t.formStruct.exchange_num))]),n("sx-input-number",{attrs:{max:99},model:{value:t.exchange_num,callback:function(e){t.exchange_num=e},expression:"exchange_num"}})],1)],2)]),n("footer",{staticClass:"footer"},[n("cube-button",{attrs:{primary:""},on:{click:t.exchangeNow}},[t._v("立即兑换")])],1)])},[],!1,null,"648688b1",null);d.options.__file="exchangeDetails.vue",e.default=d.exports},d7df:function(t,e,n){},f248:function(t,e,n){"use strict";var r=n("d7df");n.n(r).a}}]);