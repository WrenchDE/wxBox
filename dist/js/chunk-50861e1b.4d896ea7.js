(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-50861e1b"],{"0a18":function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i}),n.d(t,"d",function(){return s}),n.d(t,"c",function(){return c}),n.d(t,"e",function(){return u}),n.d(t,"f",function(){return d}),n("cadf"),n("551c"),n("097d");var r=n("365c"),a=n("0f06").api,o=function(e){return r.a.post("".concat(a,"/WeixinOrderScan"),e)},i=function(e){return r.a.post("".concat(a,"/WeixinOrderScanList"),e)},s=function(e){return r.a.post("".concat(a,"/orderWeixinSearchGoodsLog"),e)},c=function(e){return r.a.post("".concat(a,"/orderWeixinSearchGoodsHot"),e)},u=function(e){return r.a.post("".concat(a,"/orderWeixinSearchLogDelete"),e)},d=function(e){return r.a.post("".concat(a,"/weixinOrderSerach"),e)}},"18a0":function(e,t){!function(t,n){e.exports=function(e,t){function n(t,n,r){e.WeixinJSBridge?WeixinJSBridge.invoke(t,a(n),function(e){i(t,e,r)}):c(t,r)}function r(t,n,r){e.WeixinJSBridge?WeixinJSBridge.on(t,function(e){r&&r.trigger&&r.trigger(e),i(t,e,n)}):c(t,r||n)}function a(e){return(e=e||{}).appId=T.appId,e.verifyAppId=T.appId,e.verifySignType="sha1",e.verifyTimestamp=T.timestamp+"",e.verifyNonceStr=T.nonceStr,e.verifySignature=T.signature,e}function o(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function i(e,t,n){"openEnterpriseChat"==e&&(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var r=t.errMsg;r||(r=t.err_msg,delete t.err_msg,r=function(e,t){var n=e,r=f[n];r&&(n=r);var a="ok";if(t){var o=t.indexOf(":");"confirm"==(a=t.substring(o+1))&&(a="ok"),"failed"==a&&(a="fail"),-1!=a.indexOf("failed_")&&(a=a.substring(7)),-1!=a.indexOf("fail_")&&(a=a.substring(5)),"access denied"!=(a=(a=a.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=a||(a="permission denied"),"config"==n&&"function not exist"==a&&(a="ok"),""==a&&(a="fail")}return n+":"+a}(e,r),t.errMsg=r),(n=n||{})._complete&&(n._complete(t),delete n._complete),r=t.errMsg||"",T.debug&&!n.isInnerInvoke&&alert(JSON.stringify(t));var a=r.indexOf(":");switch(r.substring(a+1)){case"ok":n.success&&n.success(t);break;case"cancel":n.cancel&&n.cancel(t);break;default:n.fail&&n.fail(t)}n.complete&&n.complete(t)}function s(e){if(e){for(var t=0,n=e.length;t<n;++t){var r=e[t],a=h[r];a&&(e[t]=a)}return e}}function c(e,t){if(!(!T.debug||t&&t.isInnerInvoke)){var n=f[e];n&&(e=n),t&&t._complete&&delete t._complete}}function u(){return(new Date).getTime()}function d(t){w&&(e.WeixinJSBridge?t():g.addEventListener&&g.addEventListener("WeixinJSBridgeReady",t,!1))}function l(){M.invoke||(M.invoke=function(t,n,r){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,a(n),r)},M.on=function(t,n){e.WeixinJSBridge&&WeixinJSBridge.on(t,n)})}function p(e){if("string"==typeof e&&e.length>0){var t=e.split("?")[0],n=e.split("?")[1];return t+=".html",void 0!==n?t+"?"+n:t}}if(!e.jWeixin){var h={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},f=function(){var e={};for(var t in h)e[h[t]]=t;return e}(),g=e.document,m=g.title,v=navigator.userAgent.toLowerCase(),_=navigator.platform.toLowerCase(),b=!(!_.match("mac")&&!_.match("win")),x=-1!=v.indexOf("wxdebugger"),w=-1!=v.indexOf("micromessenger"),y=-1!=v.indexOf("android"),k=-1!=v.indexOf("iphone")||-1!=v.indexOf("ipad"),S=function(){var e=v.match(/micromessenger\/(\d+\.\d+\.\d+)/)||v.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),I={initStartTime:u(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},C={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:k?1:y?2:-1,clientVersion:S,url:encodeURIComponent(location.href)},T={},O={_completes:[]},A={state:0,data:{}};d(function(){I.initEndTime=u()});var $=!1,P=[],M={config:function(e){T=e,c("config",e);var t=!1!==T.check;d(function(){if(t)n(h.config,{verifyJsApiList:s(T.jsApiList)},function(){O._complete=function(e){I.preVerifyEndTime=u(),A.state=1,A.data=e},O.success=function(e){C.isPreVerifyOk=0},O.fail=function(e){O._fail?O._fail(e):A.state=-1};var e=O._completes;return e.push(function(){!function(e){if(!(b||x||T.debug||S<"6.0.2"||C.systemType<0)){var t=new Image;C.appId=T.appId,C.initTime=I.initEndTime-I.initStartTime,C.preVerifyTime=I.preVerifyEndTime-I.preVerifyStartTime,M.getNetworkType({isInnerInvoke:!0,success:function(e){C.networkType=e.networkType;var n="https://open.weixin.qq.com/sdk/report?v="+C.version+"&o="+C.isPreVerifyOk+"&s="+C.systemType+"&c="+C.clientVersion+"&a="+C.appId+"&n="+C.networkType+"&i="+C.initTime+"&p="+C.preVerifyTime+"&u="+C.url;t.src=n}})}}()}),O.complete=function(t){for(var n=0,r=e.length;n<r;++n)e[n]();O._completes=[]},O}()),I.preVerifyStartTime=u();else{A.state=1;for(var e=O._completes,r=0,a=e.length;r<a;++r)e[r]();O._completes=[]}}),l()},ready:function(e){0!=A.state?e():(O._completes.push(e),!w&&T.debug&&e())},error:function(e){S<"6.0.2"||(-1==A.state?e(A.data):O._fail=e)},checkJsApi:function(e){n("checkJsApi",{jsApiList:s(e.jsApiList)},(e._complete=function(e){if(y){var t=e.checkResult;t&&(e.checkResult=JSON.parse(t))}e=function(e){var t=e.checkResult;for(var n in t){var r=f[n];r&&(t[r]=t[n],delete t[n])}return e}(e)},e))},onMenuShareTimeline:function(e){r(h.onMenuShareTimeline,{complete:function(){n("shareTimeline",{title:e.title||m,desc:e.title||m,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){r(h.onMenuShareAppMessage,{complete:function(t){"favorite"===t.scene?n("sendAppMessage",{title:e.title||m,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):n("sendAppMessage",{title:e.title||m,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){r(h.onMenuShareQQ,{complete:function(){n("shareQQ",{title:e.title||m,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){r(h.onMenuShareWeibo,{complete:function(){n("shareWeiboApp",{title:e.title||m,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){r(h.onMenuShareQZone,{complete:function(){n("shareQZone",{title:e.title||m,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){n("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){n("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){n("startRecord",{},e)},stopRecord:function(e){n("stopRecord",{},e)},onVoiceRecordEnd:function(e){r("onVoiceRecordEnd",e)},playVoice:function(e){n("playVoice",{localId:e.localId},e)},pauseVoice:function(e){n("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){n("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){r("onVoicePlayEnd",e)},uploadVoice:function(e){n("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){n("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){n("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){n("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(y){var t=e.localIds;try{t&&(e.localIds=JSON.parse(t))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){n(h.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){n("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){n("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===$?($=!0,n("getLocalImgData",{localId:e.localId},(e._complete=function(e){if($=!1,P.length>0){var t=P.shift();wx.getLocalImgData(t)}},e))):P.push(e)},getNetworkType:function(e){n("getNetworkType",{},(e._complete=function(e){e=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var n=e.subtype;if(delete e.subtype,n)e.networkType=n;else{var r=t.indexOf(":"),a=t.substring(r+1);switch(a){case"wifi":case"edge":case"wwan":e.networkType=a;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){n("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},n(h.getLocation,{type:e.type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){n("hideOptionMenu",{},e)},showOptionMenu:function(e){n("showOptionMenu",{},e)},closeWindow:function(e){n("closeWindow",{},e=e||{})},hideMenuItems:function(e){n("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){n("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){n("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){n("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){n("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(k){var t=e.resultStr;if(t){var n=JSON.parse(t);e.resultStr=n&&n.scan_code&&n.scan_code.scan_result}}},e))},openAddress:function(e){n(h.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))},openProductSpecificView:function(e){n(h.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,r=[],a=0,o=t.length;a<o;++a){var i=t[a],s={card_id:i.cardId,card_ext:i.cardExt};r.push(s)}n(h.addCard,{card_list:r},(e._complete=function(e){var t=e.card_list;if(t){for(var n=0,r=(t=JSON.parse(t)).length;n<r;++n){var a=t[n];a.cardId=a.card_id,a.cardExt=a.card_ext,a.isSuccess=!!a.is_succ,delete a.card_id,delete a.card_ext,delete a.is_succ}e.cardList=t,delete e.card_list}},e))},chooseCard:function(e){n("chooseCard",{app_id:T.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var t=e.cardList,r=[],a=0,o=t.length;a<o;++a){var i=t[a],s={card_id:i.cardId,code:i.code};r.push(s)}n(h.openCard,{card_list:r},e)},consumeAndShareCard:function(e){n(h.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){n(h.chooseWXPay,o(e),e)},openEnterpriseRedPacket:function(e){n(h.openEnterpriseRedPacket,o(e),e)},startSearchBeacons:function(e){n(h.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){n(h.stopSearchBeacons,{},e)},onSearchBeacons:function(e){r(h.onSearchBeacons,e)},openEnterpriseChat:function(e){n("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){n("launchMiniProgram",{targetAppId:e.targetAppId,path:p(e.path),envVersion:e.envVersion},e)},miniProgram:{navigateBack:function(e){e=e||{},d(function(){n("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)})},navigateTo:function(e){d(function(){n("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)})},redirectTo:function(e){d(function(){n("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)})},switchTab:function(e){d(function(){n("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)})},reLaunch:function(e){d(function(){n("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)})},postMessage:function(e){d(function(){n("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)})},getEnv:function(t){d(function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})})}}},j=1,L={};return g.addEventListener("error",function(e){if(!y){var t=e.target,n=t.tagName,r=t.src;if(("IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n)&&-1!=r.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var a=t["wx-id"];if(a||(a=j++,t["wx-id"]=a),L[a])return;L[a]=!0,wx.ready(function(){wx.getLocalImgData({localId:r,success:function(e){t.src=e.localData}})})}}},!0),g.addEventListener("load",function(e){if(!y){var t=e.target,n=t.tagName;if(t.src,"IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n){var r=t["wx-id"];r&&(L[r]=!1)}}},!0),t&&(e.wx=e.jWeixin=M),M}}(t)}(window)},cca0:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"d",function(){return i}),n.d(t,"c",function(){return s}),n.d(t,"e",function(){return c}),n.d(t,"f",function(){return u}),n.d(t,"b",function(){return d}),n("cadf"),n("551c"),n("097d");var r=n("365c"),a=n("0f06").api,o=function(e){return r.a.post("".concat(a,"/authority"),e)},i=function(e){return r.a.post("".concat(a,"/options"),e)},s=function(e){return r.a.post("".concat(a,"/getLocation"),e)},c=function(e){return r.a.post("".concat(a,"/prepayWeixinOrder"),e)},u=function(e){return r.a.post("".concat(a,"/weixinPaySaleOrder"),e)},d=function(e){return r.a.post("".concat(a,"/cancelSaleOrder"),e)}},de3d:function(e,t,n){},f06d:function(e,t,n){"use strict";n.r(t);var r=(n("a481"),n("f751"),n("ac4d"),n("8a81"),n("c5f6"),n("4917"),n("96cf"),n("1da1")),a=(n("ac6a"),n("456d"),n("be94")),o=n("2740"),i=n("17ab"),s=n("4875"),c=n("7766"),u=n("e57e"),d=n("7457"),l=n("0a18"),p=n("2f62"),h=n("cca0"),f=n("18a0"),g=n.n(f),m={components:{sxDropBall:o.a,sxMenu:i.a,sxInputNumber:s.a,sxPopup:c.a,sxSearchPanel:u.a,sxSearchList:d.a},data:function(){return{data:[],menusData:[],defaultActive:"",defaultActiveItem:{},goodsData:[],options:{pullUpLoad:!0},current:"",scrollY:0,cart:{},chooseCommodity:{},searching:0,searchData:"",timer:"",shoppingBoxImage:"",shoppingBoxImageStatus:{none:"https://alipic.lanhuapp.com/psc793f421061964d0-27b0-4e37-8345-29e37a0a96c1",open:"https://alipic.lanhuapp.com/ps82d84fa175b0fa70-7d84-430a-8140-566ea882f225",full:"https://alipic.lanhuapp.com/ps106a53bfaa2ac380-6244-4eac-9069-1d49d36b310f"},page:1,panelData:null,listData:null,searchFalse:!1,box_no:"CEF33961",wxData:null}},computed:Object(a.a)({},Object(p.c)(["user"]),{destination:function(){return{top:window.innerHeight-40,left:45}},cartLength:function(){return Object.keys(this.cart).length},cartMoney:function(){var e=0;for(var t in this.cart)e+=this.cart[t].goods_price*this.cart[t].goods_number;return e.toFixed(2)}}),watch:{searchData:function(){var e=this;this.searchFalse||(clearTimeout(this.timer),this.timer=setTimeout(function(){e.changeSearch()},200))},$route:function(){this.routerInit()}},created:function(){return sessionStorage.removeItem("wxData"),"box_no"in this.$route.query?(this.box_no=this.$route.query.box_no,"code"in this.$route.query&&sessionStorage.setItem("wxData",JSON.stringify(this.$route.query)),this.wxData=sessionStorage.getItem("wxData"),this.wxData?(this.shoppingBoxImage=this.shoppingBoxImageStatus.none,this.routerInit(!1),void this.firstShow()):this.wxAuthority()):this.$createToast({txt:"不存在盒子编号",type:"txt"}).show()},methods:Object(a.a)({},Object(p.b)(["wxAuthority","closeWindow"]),{routerInit:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){var t,n,r=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=!(r.length>0&&void 0!==r[0])||r[0],(n=this.$route.name.match(/\d+/g)?this.$route.name.match(/\d+/g):[]).length||(n[0]=0),this.searching=Number(n[0]),4===this.searching&&this.showSearchData(),0===this.searching&&t&&this.back();case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),goodsShow:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){var t,n,r,a,o,i,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.b)({cate_id:this.defaultActive,page:this.page,order_origin:4,box_no:this.box_no});case 2:for(t=e.sent,this.goodsData=t.data.return_data,n=!0,r=!1,a=void 0,e.prev=7,o=this.goodsData[Symbol.iterator]();!(n=(i=o.next()).done);n=!0)s=i.value,this.$set(this.chooseCommodity,s.goods_id,Object.assign({},s,{goods_number:0},this.chooseCommodity[s.goods_id]));e.next=15;break;case 11:e.prev=11,e.t0=e.catch(7),r=!0,a=e.t0;case 15:e.prev=15,e.prev=16,n||null==o.return||o.return();case 18:if(e.prev=18,!r){e.next=21;break}throw a;case 21:return e.finish(18);case 22:return e.finish(15);case 23:return e.abrupt("return",t.data.return_data);case 24:case"end":return e.stop()}},e,this,[[7,11,15,23],[16,,18,22]])}));return function(){return e.apply(this,arguments)}}(),searchShow:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(t){var n,r,a,o,i,s,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,this.searchingSubmit(!1,t);case 3:for(n=e.sent,this.goodsData=n,r=!0,a=!1,o=void 0,e.prev=8,i=this.goodsData[Symbol.iterator]();!(r=(s=i.next()).done);r=!0)c=s.value,this.$set(this.chooseCommodity,c.goods_id,Object.assign({},c,{goods_number:0},this.chooseCommodity[c.goods_id]));e.next=16;break;case 12:e.prev=12,e.t0=e.catch(8),a=!0,o=e.t0;case 16:e.prev=16,e.prev=17,r||null==i.return||i.return();case 19:if(e.prev=19,!a){e.next=22;break}throw o;case 22:return e.finish(19);case 23:return e.finish(16);case 24:n.length?this.$router.push({name:"buyGoods3"}):this.$router.push({name:"buyGoods1"});case 25:case"end":return e.stop()}},e,this,[[8,12,16,24],[17,,19,23]])}));return function(t){return e.apply(this,arguments)}}(),firstShow:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){var t,n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.a)({box_no:this.box_no});case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return");case 5:for(r in n=t.data.return_data)this.$set(this.menusData,r,Object.assign({},n[r],{label:n[r].cate_name,value:n[r].cate_id}));if(this.menusData.unshift({label:"全    部",value:0,cate_id:0,cate_name:"全    部"}),this.menusData.length){e.next=10;break}return e.abrupt("return");case 10:this.defaultActive=this.menusData[0].value,this.goodsShow();case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),showGoods:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){var t,n,r,a,o,i,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.b)({cate_id:this.defaultActive,page:this.page,order_origin:4,box_no:this.box_no});case 2:if((t=e.sent).data.return_data.length){e.next=5;break}return e.abrupt("return",this.$createToast({txt:"该分类无更多商品",type:"txt"}).show());case 5:return e.next=7,this.goodsData.concat(t.data.return_data);case 7:for(this.goodsData=e.sent,n=!0,r=!1,a=void 0,e.prev=11,o=this.goodsData[Symbol.iterator]();!(n=(i=o.next()).done);n=!0)s=i.value,this.$set(this.chooseCommodity,s.goods_id,Object.assign({},s,{goods_number:0},this.chooseCommodity[s.goods_id]));e.next=19;break;case 15:e.prev=15,e.t0=e.catch(11),r=!0,a=e.t0;case 19:e.prev=19,e.prev=20,n||null==o.return||o.return();case 22:if(e.prev=22,!r){e.next=25;break}throw a;case 25:return e.finish(22);case 26:return e.finish(19);case 27:case"end":return e.stop()}},e,this,[[11,15,19,27],[20,,22,26]])}));return function(){return e.apply(this,arguments)}}(),scrollHandler:function(e){var t=e.y;this.scrollY=-t},handleSelect:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(r=this.$createToast({time:0})).show(),this.page=1,this.defaultActive=t.value,e.next=6,this.goodsShow();case 6:r.hide(),this.defaultActiveItem=t,this.$refs.scroll.scrollTo(0,0),this.$refs.scroll.refresh();case 11:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),changeHandler:function(e){},stickyChangeHandler:function(e){},onPullingDown:function(){var e=this;setTimeout(function(){e.$refs.scroll.forceUpdate()},1e3)},onPullingUp:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.page++,e.next=3,this.showGoods();case 3:this.$refs.scroll.forceUpdate(),this.$refs.scroll.refresh();case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),parabola:function(e){this.$refs.drop.drop(e)},openTheshoppingBox:function(){var e=this;if(!Object.keys(this.cart).length)return!1;this.$nextTick(function(){e.$refs.popup.isVisible?e.$refs.popup.closePopup():e.$refs.popup.openPopup()})},closePopup:function(){var e=this;this.$nextTick(function(){e.$refs.popup.closePopup()})},isMax:function(){this.$createToast({txt:"库存不足",type:"txt"}).show()},clickAction:function(e,t){this.$set(this.cart,t.goods_id,this.chooseCommodity[t.goods_id]),this.cart[t.goods_id].goods_number||this.$delete(this.cart,t.goods_id),Object.keys(this.cart).length?this.shoppingBoxImage=this.shoppingBoxImageStatus.open:(this.shoppingBoxImage=this.shoppingBoxImageStatus.none,this.$refs.popup.closePopup())},clearCart:function(){for(var e in this.cart)this.$delete(this.cart,e);for(var t in this.chooseCommodity)this.$set(this.chooseCommodity[t],"goods_number",0);this.shoppingBoxImage=this.shoppingBoxImageStatus.none,this.$refs.popup.closePopup()},focusSearch:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.searchData){e.next=2;break}return e.abrupt("return");case 2:if(!this.panelData){e.next=4;break}return e.abrupt("return",this.$router.push({name:"buyGoods4"}));case 4:this.$router.push({name:"buyGoods4"});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),showSearchData:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){var t,n,r,a,o,i,s,c,u,d,p,h,f,g,m,v;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.panelData=[],e.next=3,Object(l.d)({box_no:this.box_no});case 3:for(e.t0=e.sent,t=e.t0,n=t.data.return_data,this.$set(this.panelData,0,{label:"历史搜索",icon:"box-lajitong"}),this.$set(this.panelData[0],"children",[]),r=!0,a=!1,o=void 0,e.prev=11,i=n[Symbol.iterator]();!(r=(s=i.next()).done);r=!0)c=s.value,this.panelData[0].children.push({label:c.goods_name,value:c.goods_name});e.next=19;break;case 15:e.prev=15,e.t1=e.catch(11),a=!0,o=e.t1;case 19:e.prev=19,e.prev=20,r||null==i.return||i.return();case 22:if(e.prev=22,!a){e.next=25;break}throw o;case 25:return e.finish(22);case 26:return e.finish(19);case 27:return e.next=29,Object(l.c)({box_no:this.box_no});case 29:if(e.t2=e.sent,u=e.t2,!(d=u.data.return_data).length){e.next=54;break}for(this.$set(this.panelData,1,{label:"热门搜索"}),this.$set(this.panelData[1],"children",[]),p=!0,h=!1,f=void 0,e.prev=38,g=d[Symbol.iterator]();!(p=(m=g.next()).done);p=!0)v=m.value,this.panelData[1].children.push({label:v.goods_name,value:v.goods_name});e.next=46;break;case 42:e.prev=42,e.t3=e.catch(38),h=!0,f=e.t3;case 46:e.prev=46,e.prev=47,p||null==g.return||g.return();case 49:if(e.prev=49,!h){e.next=52;break}throw f;case 52:return e.finish(49);case 53:return e.finish(46);case 54:case"end":return e.stop()}},e,this,[[11,15,19,27],[20,,22,26],[38,42,46,54],[47,,49,53]])}));return function(){return e.apply(this,arguments)}}(),changeSearch:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.searchData.length){e.next=2;break}return e.abrupt("return",this.$router.replace({name:"buyGoods4"}));case 2:return e.next=5,this.searchingSubmit(!1);case 5:if((t=e.sent).length){e.next=8;break}return e.abrupt("return",this.$router.replace({name:"buyGoods1"}));case 8:for(n in this.listData=[],t)this.$set(this.listData,n,{label:t[n].goods_name});this.$router.replace({name:"buyGoods5"});case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),blurSearch:function(){switch(this.searching){case 1:case 2:case 4:case 5:if(this.searchFalse)return;this.$refs.searchInput.$refs.input.focus()}},searchingSubmit:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){var t,n,r,a=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=!(a.length>0&&void 0!==a[0])||a[0],n=a.length>1?a[1]:void 0,!t){e.next=4;break}return e.abrupt("return",this.searchShow(this.searchData));case 4:return e.next=6,Object(l.f)({box_no:this.box_no,order_origin:4,goods_name:n||this.searchData});case 6:return r=e.sent,e.abrupt("return",r.data.return_data);case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),back:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.searchFalse=!0,this.searchData="",e.next=4,this.$router.replace({name:"buyGoods",query:{box_no:this.box_no}});case 4:return e.next=6,this.$refs.searchInput.$refs.input.blur();case 6:return this.page=1,this.defaultActive=0,e.next=10,this.goodsShow();case 10:setTimeout(function(){t.searchFalse=!1},300),this.$refs.scroll.refresh();case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),submit:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){var t,n,a,o,i,s,c,u,d,l,p;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.wxData){e.next=2;break}return e.abrupt("return",this.$createToast({txt:"请授权登陆",type:"txt"}).show());case 2:if((t=this.$createToast({time:0,mask:!0})).show(),n=sessionStorage.getItem("authorityToken"),a=sessionStorage.getItem("buyAuthority"),n&&a){e.next=18;break}return e.next=9,Object(h.a)(Object.assign({},{user_id:0},JSON.parse(this.wxData)));case 9:return o=e.sent,sessionStorage.setItem("authorityToken",JSON.stringify(o.data.return_data)),n=sessionStorage.getItem("authorityToken"),i=location.href,e.next=15,Object(h.d)({token:o.data.return_data.token,url:i});case 15:s=e.sent,sessionStorage.setItem("buyAuthority",JSON.stringify(s.data.return_data.config)),a=sessionStorage.getItem("buyAuthority");case 18:for(u in c=[],this.cart)c.push({goods_code:this.cart[u].goods_code,goods_number:this.cart[u].goods_number,goods_name:this.cart[u].goods_name});return e.next=23,Object(h.e)({token:JSON.parse(n).token,goods_info:c,box_no:this.box_no,order_source:4,original_price:0,preferential_amount:0,payable_fee:0,preferential_type:0,discount_id:0,user_coupon_id:0});case 23:return d=e.sent,e.next=27,Object(h.f)(Object.assign({token:JSON.parse(n).token,order_origin:4,channel:1},d.data.return_data));case 27:l=e.sent,t.hide(),p=this,g.a.config(JSON.parse(sessionStorage.getItem("buyAuthority"))),g.a.ready(function(){g.a.chooseWXPay(Object.assign({timeStamp:l.data.return_data.msg.timestamp,success:function(){p.$createToast({txt:"支付成功",type:"txt"}).show(),setTimeout(function(){p.$router.push({name:"paySuccess"})},300)},cancel:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.b)(d.data.return_data);case 2:t=e.sent,p.$createToast({txt:t.data.return_msg?t.data.return_msg:"支付失败",type:"txt"}).show();case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),fail:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.b)(d.data.return_data);case 2:t=e.sent,p.$createToast({txt:t.data.return_msg?t.data.return_msg:"支付失败",type:"txt"}).show();case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},l.data.return_data.msg))});case 32:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),panelIcon:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("历史搜索"!==t.row.label){e.next=8;break}return e.next=4,Object(l.e)({box_no:this.box_no});case 4:n=e.sent,this.$createToast({txt:n.data.return_msg,type:"txt"}).show(),this.showSearchData();case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getPanelCell:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.searchFalse=!0,this.searchData=t.cell.label,e.next=4,this.searchShow(t.cell.data);case 4:this.searchFalse=!1;case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getListRow:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.searchFalse=!0,this.searchData=t.row.label,e.next=4,this.searchShow(t.row.label);case 4:this.searchFalse=!1;case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}),mounted:function(){document.title="商品列表"}},v=(n("fa47"),n("2877")),_=Object(v.a)(m,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"all"},[r("div",{staticClass:"content"},[r("div",{staticClass:"container"},[r("div",{ref:"searchNav",staticClass:"searchNav"},[r("transition",{attrs:{name:"back"}},[[0].includes(e.searching)?e._e():r("i",{staticClass:"cubeic-back backIcon",on:{click:e.back}})]),r("cube-input",{ref:"searchInput",attrs:{type:"search",placeholder:"请输入商品名称"},on:{focus:e.focusSearch,blur:e.blurSearch},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.searchingSubmit(t):null}},model:{value:e.searchData,callback:function(t){e.searchData=t},expression:"searchData"}},[r("i",{staticClass:"cubeic-search",attrs:{slot:"prepend"},slot:"prepend"})])],1),r("div",{ref:"searchContent",staticClass:"searchContent"},[r("div",{directives:[{name:"show",rawName:"v-show",value:[0].includes(e.searching),expression:"[0].includes(searching)"}],ref:"searchContentLeft",staticClass:"left"},[r("sx-menu",{attrs:{menusData:e.menusData,defaultActive:e.defaultActive},on:{select:e.handleSelect}})],1),r("cube-scroll",{directives:[{name:"show",rawName:"v-show",value:[0,3].includes(e.searching),expression:"[0, 3].includes(searching)"}],ref:"scroll",staticClass:"right",attrs:{options:e.options,"scroll-events":["scroll"]},on:{"pulling-up":e.onPullingUp,scroll:e.scrollHandler}},[e.goodsData.length?r("ul",{staticClass:"rightDetails"},e._l(e.goodsData,function(t,n){return r("li",{key:n},[r("div",{staticClass:"goodsRow"},[r("img",{attrs:{src:t.goods_img}}),r("div",{staticClass:"goodsContent"},[r("div",{staticClass:"goodsContentTop"},[e._v("\n                    "+e._s(t.goods_name)+"\n                    "),r("div",{staticClass:"abstract"},[r("span",[e._v(e._s(t.goods_spec))]),e._v(" \n                      "),r("span",[e._v(e._s(t.stock_num>0?"库存"+t.stock_num+t.goods_unit:"已售空"))])])]),r("div",{staticClass:"goodsContentBottom"},[r("font",[r("span",[e._v("￥"+e._s(t.goods_price))]),e._v("/"+e._s(t.goods_unit))]),t.stock_num>0?r("sx-input-number",{attrs:{max:t.stock_num,item:t},on:{isMax:e.isMax,clickAction:e.clickAction},model:{value:e.chooseCommodity[t.goods_id].goods_number,callback:function(n){e.$set(e.chooseCommodity[t.goods_id],"goods_number",n)},expression:"chooseCommodity[food.goods_id].goods_number"}}):e._e()],1)])])])}),0):r("div",{staticClass:"noGoodsData"},[r("img",{attrs:{src:n("1a10"),alt:""}}),e._v("\n            暂无商品\n            ")])]),r("div"),[1].includes(e.searching)?r("div",{staticClass:"noSearch"},[r("img",{attrs:{src:n("74c1"),alt:""}}),e._v("\n          没有搜索结果\n          ")]):e._e(),[4].includes(e.searching)?r("sx-search-panel",{attrs:{panelData:e.panelData},on:{panelIcon:e.panelIcon,getPanelCell:e.getPanelCell}}):e._e(),[5].includes(e.searching)?r("sx-search-list",{attrs:{listData:e.listData},on:{getListRow:e.getListRow}}):e._e()],1)]),r("sx-popup",{ref:"popup"},[r("div",{staticClass:"popupLeft",attrs:{slot:"left"},slot:"left"},[e._v("\n        已选商品 "),r("span",[e._v("(共"+e._s(e.cartLength)+"件商品)")])]),r("div",{staticClass:"popupRight",attrs:{slot:"right"},on:{click:e.clearCart},slot:"right"},[r("i",{staticClass:"box-lajitong"}),e._v("清空\n      ")]),r("transition-group",{attrs:{name:"list"}},e._l(e.cart,function(t,n){return r("div",{key:t.goods_id,staticClass:"popupContent list-item",attrs:{"data-index":n}},[r("div",{staticClass:"popupContentDetails"},[r("span",[e._v(e._s(t.goods_name)+" "+e._s(t.goods_spec)+"/"+e._s(t.goods_unit))]),r("span",[e._v("￥"+e._s(t.goods_price))])]),r("sx-input-number",{attrs:{max:t.stock,item:t},on:{isMax:e.isMax,clickAction:e.clickAction},model:{value:t.goods_number,callback:function(n){e.$set(t,"goods_number",n)},expression:"row.goods_number"}})],1)}),0)],1)],1),r("div",{ref:"bottom",staticClass:"bottom"},[r("div",{staticClass:"box",on:{click:e.closePopup}},[r("div",{staticClass:"shoppingCart",style:{transition:"all .3s ease",backgroundColor:e.cartLength?"":"#cccccc"},on:{click:function(t){return t.stopPropagation(),e.openTheshoppingBox(t)}}},[r("i",{staticClass:"box-gouwuche"}),r("span",{directives:[{name:"show",rawName:"v-show",value:e.cartLength,expression:"cartLength"}]},[e._v(e._s(e.cartLength))])]),e.cartLength?r("div",{staticClass:"info"},[r("p",[e._v("合计 ￥"+e._s(e.cartMoney))])]):r("div",{staticClass:"info"},[r("span",[e._v("未选购商品")])])]),r("div",{staticClass:"rightBtn"},[r("cube-button",{attrs:{primary:!0,disabled:!Boolean(Number(e.cartMoney))},on:{click:e.submit}},[e._v("结算")])],1)]),r("sx-drop-ball",{ref:"drop",attrs:{destination:e.destination}})],1)},[],!1,null,"70718c3c",null);_.options.__file="buyGoods.vue",t.default=_.exports},fa47:function(e,t,n){"use strict";var r=n("de3d");n.n(r).a}}]);