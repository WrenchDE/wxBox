<template>
  <div class="all">
    <div class="content">
      <div class="container">
        <div class="searchNav" ref="searchNav">
          <transition name="back">
            <i class="cubeic-back backIcon" @click="back" v-if="![0].includes(searching)"></i>
          </transition>
          <cube-input type="search" ref="searchInput" v-model="searchData" @focus="focusSearch" @blur="blurSearch" @keyup.enter.native="searchingSubmit" placeholder="请输入商品名称">
            <i class="cubeic-search" slot="prepend"></i>
          </cube-input>
        </div>
        <div class="searchContent" ref="searchContent">
          <!-- <sx-scroll v-if="[0, 3].includes(searching)"></sx-scroll> -->
          <div class="left" ref="searchContentLeft" v-show="[0].includes(searching)">
            <sx-menu :menusData="menusData" :defaultActive="defaultActive" @select="handleSelect"></sx-menu>
          </div>
          <cube-scroll
            v-show="[0, 3].includes(searching)"
            class="right"
            ref="scroll"
            :options="options"
            @pulling-up="onPullingUp"
            :scroll-events="['scroll']"
            @scroll="scrollHandler">
            <ul class="rightDetails" v-if="goodsData.length">
              <li v-for="(food, index) in goodsData" :key="index">
                <div class="goodsRow">
                  <img :src="food.goods_img">
                  <div class="goodsContent">
                    <div class="goodsContentTop">
                      {{food.goods_name}}
                      <div class="abstract">
                        <span>{{food.goods_spec}}</span>&nbsp;
                        <span>{{food.stock_num > 0 ? `库存${food.stock_num}${food.goods_unit}` : '已售空'}}</span>
                      </div>
                    </div>
                    <div class="goodsContentBottom">
                      <font><span>￥{{food.goods_price}}</span>/{{food.goods_unit}}</font>
                      <sx-input-number v-if="food.stock_num > 0" v-model="chooseCommodity[food.goods_id].goods_number" :max="food.stock_num" @isMax="isMax" :item="food" @clickAction="clickAction"></sx-input-number>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div v-else class="noGoodsData">
              <img src="../assets/images/zwsj.png" alt="">
              暂无商品
              <!-- {{defaultActiveItem.label}} 已售空 -->
            </div>
          </cube-scroll>
          <div >
          </div>
          <div v-if="[1].includes(searching)" class="noSearch">
            <img src="../assets/images/kongbaiye.png" alt="">
            没有搜索结果
            <!-- <span>换个关键词试试吧</span> -->
          </div>
          <sx-search-panel :panelData="panelData" @panelIcon="panelIcon" @getPanelCell="getPanelCell" v-if="[4].includes(searching)"/>
          <sx-search-list :listData="listData" @getListRow="getListRow" v-if="[5].includes(searching)"/>
        </div>
      </div>
      <sx-popup ref="popup">
        <div slot="left" class="popupLeft">
          已选商品 <span>(共{{cartLength}}件商品)</span>
        </div>
        <div slot="right" class="popupRight" @click="clearCart">
          <i class="box-lajitong"></i>清空
        </div>
        <transition-group name="list">
          <div v-for="(row, i) in cart" :key="row.goods_id" :data-index="i" class="popupContent list-item">
            <div class="popupContentDetails">
              <span>{{row.goods_name}} {{row.goods_spec}}/{{row.goods_unit}}</span>
              <span>￥{{row.goods_price}}</span>
            </div>            
            <sx-input-number v-model="row.goods_number" :max="row.stock" @isMax="isMax" :item="row" @clickAction="clickAction"></sx-input-number>
          </div>
        </transition-group>
      </sx-popup>
    </div>
    <div class="bottom" ref="bottom">
      <div class="box"  @click="closePopup">
        <div class="shoppingCart" @click.stop="openTheshoppingBox" :style="{transition: 'all .3s ease', backgroundColor: !cartLength ? '#cccccc' : ''}">
          <i class="box-gouwuche"></i>
          <span v-show="cartLength">{{cartLength}}</span>
        </div>
        <div  class="info" v-if="!cartLength"><span>未选购商品</span></div>
        <div class="info" v-else>
          <p>合计 ￥{{cartMoney}}</p>
        </div>
      </div>
      <div class="rightBtn">
        <cube-button :primary="true" :disabled="!Boolean(Number(cartMoney))" @click="submit">结算</cube-button>
      </div>
    </div>
    <sx-drop-ball ref="drop" :destination="destination"></sx-drop-ball>
  </div>
</template>
<script>
import sxDropBall from '../components/dropBall'
// import sxScroll from '../components/scroll'
import sxMenu from '../components/goods/menu'
import sxInputNumber from '../components/inputNumber'
import sxPopup from '../components/popup'
import sxSearchPanel from '../components/goods/searchPanel'
import sxSearchList from '../components/goods/searchList'
import { orderWeixinSearchLogDelete, WeixinOrderScan, WeixinOrderScanList, orderWeixinSearchGoodsLog, orderWeixinSearchGoodsHot, weixinOrderSerach } from '../api/buyGoods'
import { mapState, mapMutations } from 'vuex'
import { authority, options, prepayWeixinOrder, weixinPaySaleOrder, cancelSaleOrder } from '../api/wx'
import wx from 'weixin-js-sdk'

export default {
  components: {
    sxDropBall,
    // sxScroll,
    sxMenu,
    sxInputNumber,
    sxPopup,
    sxSearchPanel,
    sxSearchList
  },
  data() {
    return {
      // 所以商品
      data: [],
      menusData: [],
      defaultActive: '',
      defaultActiveItem: {},
      goodsData: [],
      options: {
        pullUpLoad: true
      },
      current: '',
      scrollY: 0,
      // 购物车 选择的商品  goods_number 不为 0的 商品
      cart: {},
      // 商品列表 选择的商品 cart 与 chooseCommodity  是全部商品id + goods_number 后的对象
      chooseCommodity: {},
      // 0、商品全部展示  1、暂无数据  2、开始搜索  3、 搜索（无nav） 4、搜索面板  5、搜索列表(输入后)
      searching: 0,
      searchData: '',
      timer: '',
      shoppingBoxImage: '',
      shoppingBoxImageStatus: {
        none: 'https://alipic.lanhuapp.com/psc793f421061964d0-27b0-4e37-8345-29e37a0a96c1',
        open: 'https://alipic.lanhuapp.com/ps82d84fa175b0fa70-7d84-430a-8140-566ea882f225',
        full: 'https://alipic.lanhuapp.com/ps106a53bfaa2ac380-6244-4eac-9069-1d49d36b310f'
      },
      page: 1,
      panelData: null,
      listData: null,
      searchFalse: false,
      box_no: 'CEF33961',
      wxData: null
    }
  },
  computed: {
    ...mapState([
      'user'
    ]),
    destination() {
      return { top: window.innerHeight - 40, left: 45 }
    },
    cartLength () {
      return Object.keys(this.cart).length
    },
    cartMoney () {
      let money = 0
      for (let i in this.cart) {
        money += this.cart[i].goods_price * this.cart[i].goods_number
      }
      return money.toFixed(2)
    }
  },
  watch: {
    searchData () {
      if (this.searchFalse) return
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.changeSearch()
      }, 200)
    },
    '$route' () {
      this.routerInit()
    }
  },
  created() {
    console.log(wx)
    // http://localhost:8088/buyGoods?box_no=FF541857
    console.log(this.$route.query)
    sessionStorage.removeItem('wxData')
    if ('box_no' in this.$route.query) {
      this.box_no = this.$route.query['box_no']
    } else {
      return this.$createToast({txt: '不存在盒子编号', type: 'txt'}).show()
    }
    if ('code' in this.$route.query) {
      sessionStorage.setItem('wxData', JSON.stringify(this.$route.query))
    }
    this.wxData = sessionStorage.getItem('wxData')
    if (!this.wxData) return this.wxAuthority()
    this.shoppingBoxImage = this.shoppingBoxImageStatus.none
    this.routerInit(false)
    this.firstShow()
  },
  methods: {
    ...mapMutations([
      'wxAuthority',
      'closeWindow'
    ]),
    async routerInit (tf = true) {
      // 0、商品全部展示  1、暂无数据  2、开始搜索  3、 搜索（无nav） 4、搜索面板  5、搜索列表(输入后)
      let index = this.$route.name.match(/\d+/g) ? this.$route.name.match(/\d+/g) : []
      if (!index.length) index[0] = 0
      this.searching = Number(index[0])
      if (this.searching === 4) this.showSearchData()
      if (this.searching === 0 && tf) {
        this.back()
      }
    },
    async goodsShow () {
      // 基于左侧商品 right
      let orhg = await WeixinOrderScanList({cate_id: this.defaultActive, page: this.page, order_origin: 4, box_no: this.box_no})
      this.goodsData = orhg.data.return_data
      for (let i of this.goodsData) {
        this.$set(this.chooseCommodity, i.goods_id, Object.assign({}, i, { goods_number: 0 }, this.chooseCommodity[i.goods_id]))
      }
      return orhg.data.return_data
    },
    async searchShow (val) {
      // 基于左侧商品 right
      console.log(val, 'valvalvalvalvalvalval')
      let goods = await this.searchingSubmit(false, val)
      this.goodsData = goods
      for (let i of this.goodsData) {
        this.$set(this.chooseCommodity, i.goods_id, Object.assign({}, i, { goods_number: 0 }, this.chooseCommodity[i.goods_id]))
      }
      if (goods.length) this.$router.push({name: 'buyGoods3'})
      else this.$router.push({name: 'buyGoods1'})
    },
    async firstShow () {
      // left
      let orl = await WeixinOrderScan({box_no: this.box_no})
      // this.menusData = orl.data.returun_data
      if (!orl) return
      let list = orl.data.return_data
      for (let i in list) {
        this.$set(this.menusData, i, Object.assign({}, list[i], {label: list[i].cate_name, value: list[i].cate_id}))
      }
      this.menusData.unshift({label: '全' + '\xa0\xa0\xa0\xa0' +'部', value: 0, cate_id: 0, cate_name: '全' + '\xa0\xa0\xa0\xa0' +'部'})
      if (!this.menusData.length) return
      this.defaultActive = this.menusData[0].value
      this.goodsShow()
    },
    async showGoods () {
      // let goods = await this.goodsShow()
      let orhg = await WeixinOrderScanList({cate_id: this.defaultActive, page: this.page, order_origin: 4, box_no: this.box_no})
      // console.log(!orhg.data.return_data.length)
      if (!orhg.data.return_data.length) return this.$createToast({txt: '该分类无更多商品', type: 'txt'}).show()
      this.goodsData = await this.goodsData.concat(orhg.data.return_data)
      for (let i of this.goodsData) {
        this.$set(this.chooseCommodity, i.goods_id, Object.assign({}, i, { goods_number: 0 }, this.chooseCommodity[i.goods_id]))
      }
    },
    scrollHandler({ y }) {
      this.scrollY = -y
    },
    async handleSelect (item, index) {
      const toast = this.$createToast({
        time: 0
      })
      toast.show()
      this.page = 1
      this.defaultActive = item.value
      // let orhg = await WeixinOrderScanList(Object.assign({}, this.user, {cate_id: item.value}, {order_origin: 4, page: this.page}))
      // this.goodsData = orhg.data.return_data
      await this.goodsShow()
      console.log(item, index)
      toast.hide()
      this.defaultActiveItem = item
      this.$refs.scroll.scrollTo(0, 0)
      this.$refs.scroll.refresh()
    },
    changeHandler(label) {
      console.log('changed to:', label)
    },
    stickyChangeHandler(current) {
      console.log('sticky-change', current)
    },
    onPullingDown() {
      setTimeout(() => {
        this.$refs.scroll.forceUpdate()
      }, 1000)
    },
    async onPullingUp() {
      this.page++
      await this.showGoods()
      this.$refs.scroll.forceUpdate()
      this.$refs.scroll.refresh()
    },
    parabola(e) {
      this.$refs.drop.drop(e)
    },
    openTheshoppingBox () {
      if (!Object.keys(this.cart).length) return false
      this.$nextTick(() => {
        if (this.$refs.popup.isVisible) {
          this.$refs.popup.closePopup()
        } else {
          this.$refs.popup.openPopup()
        }
      })
    },
    closePopup () {
      this.$nextTick(() => {
        this.$refs.popup.closePopup()
      })
    },
    isMax() {
      const toast = this.$createToast({
        txt: '库存不足',
        type: 'txt'
      })
      toast.show()
    },
    clickAction(e, item) {
      this.$set(this.cart, item.goods_id, this.chooseCommodity[item.goods_id])
      // this.$refs.drop.drop(e)
      if (!this.cart[item.goods_id].goods_number) this.$delete(this.cart, item.goods_id)
      if (!Object.keys(this.cart).length) {
        this.shoppingBoxImage = this.shoppingBoxImageStatus.none
        this.$refs.popup.closePopup()
      } else this.shoppingBoxImage = this.shoppingBoxImageStatus.open
    },
    clearCart () {
      for (let i in this.cart) {
        this.$delete(this.cart, i)
      }
      for (let z in this.chooseCommodity) {
        this.$set(this.chooseCommodity[z], 'goods_number', 0)
      }
      this.shoppingBoxImage = this.shoppingBoxImageStatus.none
      this.$refs.popup.closePopup()
    },
    async focusSearch () {
      if (this.searchData) return
      if (this.panelData) return this.$router.push({name: 'buyGoods4'})
      this.$router.push({name: 'buyGoods4'})
    },
    async showSearchData () {
      this.panelData = []
      let osgl = {osgl: await orderWeixinSearchGoodsLog({box_no: this.box_no})}.osgl
      let osglData = osgl.data.return_data
      this.$set(this.panelData, 0, {label: '历史搜索', icon: 'box-lajitong'})
      this.$set(this.panelData[0], 'children', [])
      for (let i of osglData) {
        this.panelData[0].children.push({label: i.goods_name, value: i.goods_name})
      }
      let osgh = {osgh: await orderWeixinSearchGoodsHot({box_no: this.box_no})}.osgh
      let osghData = osgh.data.return_data
      if (osghData.length) {
        this.$set(this.panelData, 1, {label: '热门搜索'})
        this.$set(this.panelData[1], 'children', [])
        for (let z of osghData) {
          this.panelData[1].children.push({label: z.goods_name, value: z.goods_name})
        }
      }
    },
    async changeSearch () {
      // if (this.searchFalse) return
      // console.log(222222)
      if (!this.searchData.length) return this.$router.replace({name: 'buyGoods4'})
      console.log(this.searchData)
      let list = await this.searchingSubmit(false)
      if (!list.length) return this.$router.replace({name: 'buyGoods1'})
      this.listData = []
      for (let i in list) {
        this.$set(this.listData, i, {label: list[i].goods_name})
      }
      this.$router.replace({name: 'buyGoods5'})
    },
    blurSearch () {
      // 0、商品全部展示  1、暂无数据  2、开始搜索  3、 搜索（无nav） 4、搜索面板  5、搜索列表(输入后)
      switch (this.searching) {
        case 1:
        case 2:
        case 4:
        case 5:
          if (this.searchFalse) return
          this.$refs.searchInput.$refs.input.focus()
          break
      }
    },
    async searchingSubmit (tf = true, goodsName) {
      if (tf) return this.searchShow(this.searchData)
      let osg = await weixinOrderSerach({box_no: this.box_no, order_origin: 4, goods_name: goodsName ? goodsName : this.searchData})
      console.log(this.searchData)
      console.log(osg)
      console.log(tf)
      return osg.data.return_data
    },
    async back () {
      this.searchFalse = true
      this.searchData = ''
      await this.$router.replace({name: 'buyGoods', query: { box_no: this.box_no}})
      await this.$refs.searchInput.$refs.input.blur()
      this.page = 1
      this.defaultActive = 0
      await this.goodsShow()
      setTimeout(() => {
        this.searchFalse = false
      }, 300)
      this.$refs.scroll.refresh()
      // this.$router.go(-1)
    },
    async submit () {
      if (!this.wxData) return this.$createToast({txt: '请授权登陆', type: 'txt'}).show()
      const toast = this.$createToast({
        time: 0,
        mask: true
      })
      toast.show()
      let authorityToken = sessionStorage.getItem('authorityToken')
      let buyAuthority = sessionStorage.getItem('buyAuthority')
      if (!authorityToken || !buyAuthority) {
        let a = await authority(Object.assign({}, { user_id: 0 }, JSON.parse(this.wxData)))
        sessionStorage.setItem('authorityToken',  JSON.stringify(a.data.return_data))
        authorityToken = sessionStorage.getItem('authorityToken')
        let redirectUrl = location.href
        let o = await options({token: a.data.return_data.token, url: redirectUrl})
        sessionStorage.setItem('buyAuthority',  JSON.stringify(o.data.return_data.config))
        buyAuthority = sessionStorage.getItem('buyAuthority')
      }
      // if (!buyAuthority) {
      //   let a = await authority(Object.assign({}, { user_id: this.user.user_id }, JSON.parse(this.wxData)))
      //   console.log(a)
      //   let redirectUrl = location.href
      //   let o = await options({token: a.data.return_data.token, url: redirectUrl})
      //   sessionStorage.setItem('buyAuthority',  JSON.stringify(o.data.return_data.config))
      //   buyAuthority = sessionStorage.getItem('buyAuthority')
      // }
      // if (JSON.parse(buyAuthority).return_code === 400) {
      //   this.$createToast({txt: JSON.parse(buyAuthority).return_msg, type: 'txt'}).show()
      //   return this.wxAuthority()
      // }
      let goods_info = []
      for (let i in this.cart) {
        goods_info.push({goods_code: this.cart[i].goods_code, goods_number: this.cart[i].goods_number, goods_name: this.cart[i].goods_name})
      }
      console.log(goods_info)
      let br = await prepayWeixinOrder({ token: JSON.parse(authorityToken).token, goods_info: goods_info, box_no: this.box_no, order_source: 4, original_price: 0, preferential_amount: 0, payable_fee: 0, preferential_type: 0, discount_id: 0, user_coupon_id: 0 })
      console.log(br, 'prepayWeixinOrderprepayWeixinOrder')
      let wxpso = await weixinPaySaleOrder(Object.assign({token: JSON.parse(authorityToken).token, order_origin: 4, channel: 1}, br.data.return_data))
      toast.hide()
      let that = this
      wx.config(JSON.parse(sessionStorage.getItem('buyAuthority')))
      wx.ready(() => {
        wx.chooseWXPay(Object.assign({
          timeStamp: wxpso.data.return_data.msg.timestamp,
          success () {
            that.$createToast({ txt: '支付成功', type: 'txt' }).show()
            setTimeout(() => {
              that.$router.push({name: 'paySuccess'})
            }, 300)
          },
          // async cancel () {
          //   alert(JSON.stringify(br.data.return_data) + 'cancel')
          // },
          // async fail () {
          //   alert(JSON.stringify(br.data.return_data) + 'fail')
          // }
          async cancel () {
            let cso = await cancelSaleOrder(br.data.return_data)
            that.$createToast({ txt: cso.data.return_msg ? cso.data.return_msg : '支付失败', type: 'txt' }).show()
          },
          async fail () {
            let cso = await cancelSaleOrder(br.data.return_data)
            that.$createToast({ txt: cso.data.return_msg ? cso.data.return_msg : '支付失败', type: 'txt' }).show()
          }
        }, wxpso.data.return_data.msg))
      })
      /* eslint-disable */
    },
    async panelIcon (data) {
      console.log(this.user, '!!!!!')
      if (data.row.label === '历史搜索') {
        let osld = await orderWeixinSearchLogDelete({box_no: this.box_no})
        console.log(osld)
        this.$createToast({ txt: osld.data.return_msg, type: 'txt' }).show()
        this.showSearchData()
      }
    },
    async getPanelCell (cellData) {
      this.searchFalse = true
      this.searchData = cellData.cell.label
      await this.searchShow(cellData.cell.data)
      this.searchFalse = false
      // this.searchFalse = false
    },
    async getListRow (rowData) {
      this.searchFalse = true
      this.searchData = rowData.row.label
      await this.searchShow(rowData.row.label)
      this.searchFalse = false
      // this.goodsShow()
    }
  },
  mounted() {
    document.title = '商品列表'
    // this.$refs.searchContent.style.height = `calc(100% - ${this.$refs.bottom.offsetHeight}px)`
  }
}
</script>
<style scoped lang="scss">
.all {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  & .content {
    overflow: hidden;
    flex: 1;
    height: 100%;
    // overflow: auto;
    // display: flex;
    position: relative;
    box-sizing: border-box;
    & .popupContent {
      padding: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 60px;
      border-bottom: 1px solid #e8e8e8;
      padding-left: $small;
      padding-right: $small;
      color: $drakblack;
      font-size: $medium;
      .popupContentDetails {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        span:nth-child(2) {
          color: $red;
        }
      }
    }
    & .popupContent:last-child{
      border: none;
    }
    .pullup-wrapper {
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.9vw;
    }
  }
  & .content .container {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    .notice {
      padding: $small;
      background: $lightprimary;
      color: $orange;
      font-size: $small;
      i {
        margin-right: $mini;
      }
    }
    .noSearch {
      flex: 1;
      height: 260px;
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: $medium;
      color: $lightblack;
      // line-height: $large;
      img {
        width: 30%;
        margin-bottom: $default;
      }
      span {
        color: $gray;
        font-size: $small
      }
    }
    .searchNav {
      display: flex;
      justify-content: center;
      width: 100%;
      align-items: center;
      padding: $medium;
      .cubeic-search {
        font-size: $medium;
        padding-left: $medium;
      }
      .backIcon {
        font-size: $large;
        width: 39px;
      }
      .cube-input {
        display: flex;
        flex: 1;
        align-items: center;
      }
    }
    .searchContent {
      // height: calc(100% - 103.1px);
      height: 100%;
      display: flex;
      .left {
        height: 100%;
        width: 25vw;
        background: $nav;
        padding-bottom: 100px;
      }
      .right {
        flex: 1;
        height: 100%;
        /deep/ .cube-scroll-content {
          padding-bottom: 100px;
        }
        .goodsRow {
          display: flex;
          justify-content: space-around;
          align-items: center;
          box-sizing: border-box;
          background: white;
          height: 110px;
          padding: $small;
          img {
            width: 90px;
          }
          .goodsContent {      
            flex: 1;
            height: 100%;
            display: flex;
            padding-left: $small;
            box-sizing: border-box;
            justify-content: space-between;
            flex-direction: column;
            .goodsContentTop {
              font-size: $medium;
              line-height: $large;
              .abstract {
                color: $gray;
                font-size: $small;          
              }
            }
            .goodsContentBottom {
              font-size: $medium;
              color: $gray;
              display: flex;
              justify-content: space-between;
              font {
                span {
                  color: $red;
                }
              }
            }
          }
        }
        .noGoodsData {
          font-size: $medium;
          color: $lightblack;
          margin: 76px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          img {
            width: 30%;
            margin-bottom: $large;
          }
        }
      }
    }
  }
  & .isSearch {

  }
  .bottom {
    width: 100%;
    height: 50px;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    background: $lightblack;
    .box {
      // width: 100%;
      // display: flex;
      // align-items: center;
      // .shoppingBox {
      //   position: relative;
      //   z-index: 111;
      //   transition: all .3 ease;
      //   margin-left: 13px;
      //   margin-bottom: 24px;
      //   width: 68px;
      //   display: flex;
      //   justify-content: center;
      //   align-items: center;
      //   font-size: 20px;
      //   color: white;
      //   img {
      //     width: 100%;
      //   }
      //   span {
      //     background: red;
      //     padding: 1.2px;
      //     padding-left: 6px;
      //     padding-right: 6px;
      //     font-size: 10px;
      //     border-radius: 43%;
      //     position: absolute;
      //     top: -1px;
      //     right: -5px;
      //   }
      // }
      // .info {
      //   flex: 1;
      //   padding-left: 6px;
      //   line-height: $default;
      //   display: flex;
      //   flex-direction: column;
      //   justify-content: center;
      //   box-sizing: border-box;
      //   height: 60%;
      //   color: $gray;
      //   font-size: $small;
      //   s {
      //     font-size: $small;
      //   }
      //   p {
      //     font-weight: bold;
      //     font-size: $default;
      //     color: white;
      //   }
      //   span {
      //     color: $lightgray;
      //   }
      // }
    }
    .box {
      width: 100%;
      display: flex;
      align-items: center;
      .shoppingCart {
        position: relative;
        z-index: 111;
        transition: all .3 ease;
        margin-left: 23px;
        margin-bottom: 24px;
        width: 55px;
        height: 55px;
        background-color: $primary;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        color: white;
        i {
          font-size: 30px;
        }
        span {
          background: $red;
          width: $default;
          height: $default;
          display: flex;
          justify-content: center;
          align-items: center;
          // padding-left: 6px;
          // padding-right: 6px;
          font-size: $mini;
          border-radius: 50%;
          position: absolute;
          top: 5px;
          right: -3px;
        }
      }
      .info {
        flex: 1;
        padding-left: 6px;
        line-height: $default;
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-sizing: border-box;
        height: 60%;
        color: $gray;
        font-size: $small;
        s {
          font-size: $small;
        }
        p {
          font-weight: bold;
          font-size: $default;
          color: white;
        }
        span {
          color: $lightgray;
        }
      }
    }
    .rightBtn {
      position: relative;
      right: 0;
      width: 30vw;
    }
  }
}
.popupLeft {
  font-size: $default;
  color: $lightblack;
  span {
    font-size: $small;
    color: $gray;
  }
}
.popupRight {
  color: $gray;
  display: flex;
  align-items: center;
  i {
    font-size: $default;
    padding-right: 6px;
  }
  font-size: $small;
}
// 过渡
.list-item {
  overflow: hidden;
  transition: all .3s ease;
}
.list-enter, .list-leave-to {
  opacity: 0;
  height: 0px !important;
}
.list-leave-active {
  height: 10px;
}

// back transition
.back-enter-active, .back-leave-active {
  transition: all .3s ease;
}
.back-enter, .back-leave-to{
  width: 0px !important;
  opacity: 0;
}

// search transition
.search-enter-active, .search-leave-active {
  transition: all .3s ease;
}
.search-enter, .search-leave-to{
  height: 0px !important;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  opacity: 0;
}
</style>
