(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5e51073c"],{"1b67":function(t,e,n){"use strict";var o=n("7b5d");n.n(o).a},"5efe":function(t,e,n){"use strict";n.r(e);var o=n("be94"),c=n("2f62"),i={data:function(){return{}},computed:Object(o.a)({},Object(c.c)(["box_no"])),created:function(){},mounted:function(){},methods:{copyUrl:function(){var t=document.createElement("input");document.body.appendChild(t),t.setAttribute("value","http://192.168.0.113:8088"),this.box_no&&t.setAttribute("value","http://192.168.0.113:8088/wxinbox/product_list.html?box_no=".concat(this.box_no)),t.select(),document.execCommand("copy")&&document.execCommand("copy"),document.body.removeChild(t)}}},u=(n("1b67"),n("2877")),a=Object(u.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"all"},[n("i",{staticClass:"cubeic-warn icon"}),n("a",{attrs:{href:"weixin://"}},[n("cube-button",{attrs:{light:""},on:{click:t.copyUrl}},[t._v("请在微信中打开链接, 点击前往微信")])],1)])},[],!1,null,"3247429e",null);a.options.__file="goWx.vue",e.default=a.exports},"7b5d":function(t,e,n){}}]);