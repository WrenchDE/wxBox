<template>
  <div class="all">
    <div :class="{'searchNav': true, 'changeBg': changeBg}" ref="searchNav">
      <!-- <i class="cubeic-back backIcon" @click="back" v-if="this.$route.name !== 'points'"></i>
      <div>{{title}}</div> -->
    </div>
    <div class="container" ref="container">
      <div class="containerInside" v-if="$route.name === 'points'">
        <header class="header">
          {{headerData}}
          <p>可用积分</p>
        </header>
        <nav class="nav">
          <router-link :to="{name: 'record'}">
            <img src="../../assets/images/record.png" alt="">兑换记录
          </router-link>
          <router-link :to="{name: 'rule'}">
            <img src="../../assets/images/rule.png" alt="">积分规则
          </router-link>
        </nav>
        <div class="subheading">
          <h4>
            <img src="../../assets/images/jifenLeft.png" alt="">
            &nbsp;&nbsp;&nbsp;兑换商品&nbsp;&nbsp;&nbsp;
            <img src="../../assets/images/jifenRight.png" alt="">
          </h4>
          <p>好物随心换</p>
        </div>
        <ul class="content">
          <li v-for="(row, index) in shopListData" :key="index" @click="viewDetails(row, index)">
            <img :src="row.goods_img">
            <header class="goodsName">{{row.goods_name}}</header>
            <footer class="payPoints">{{row.pay_points}}积分</footer>
          </li>
        </ul>
        <footer class="footer">
          {{shopListData.length ? '我是有底线的~' : '暂无商品'}}
        </footer>
      </div>
      <router-view v-else></router-view>
      <!-- <transition name="fade" v-else>
        <router-view/>
      </transition> -->
    </div>
  </div>
</template>

<script>
import { shopPoint, shopList } from '@/api/points'
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      headerData: '',
      shopListData: [],
      title: '',
      changeBg: true,
      row: ''
    }
  },
  watch: {
    $route (val) {
      let title = ''
      this.changeBg = false
      switch (val.name) {
        case 'points':
          this.firstShow()
          this.changeBg = true
          title = '积分商城'
          break
        case 'exchangeDetails':
          title = '兑换信息'
          break
        case 'record':
          title = '兑换记录'
          break
        case 'detail':
          title = '商品详情'
          break
        case 'rule':
          title = '积分规则'
          break
      }
      this.title = title
    }
  },
  computed: {
    ...mapState([
      'user'
    ]),
  },
  methods: {
    ...mapMutations([
      'setUser'
    ]),
    async firstShow () {
      let info = {
        sp: await shopPoint(this.user),
        sl: await shopList(this.user)
      }
      console.log(info)
      this.headerData = info.sp.data.return_data.point
      this.shopListData = info.sl.data.return_data
    },
    back () {
      if (this.$route.name === 'record') return this.$router.push({name: 'points'})
      if (this.$route.name !== 'points') return this.$router.go(-1)
      // window.location.href = 'scheme://post/pathPrefix'
      // console.log('back')
    },
    viewDetails (row, index) {
      console.log(row, index)
      this.$router.push({name: 'detail', query: { row: JSON.stringify(row) }})
    }
  },
  created () {
    if ('row' in this.$route.query) this.row = Object.assign({}, this.user, JSON.parse(this.$route.query.row))
    else this.row = Object.assign({}, this.user, this.$route.query)
    this.setUser(Object.assign({}, this.row))
    if (this.$route.name === 'points') this.firstShow()
  },
  mounted () {
    this.title = '商品详情'
    if (this.$refs.container) this.$refs.container.style.height = `calc(100% - ${this.$refs.searchNav.offsetHeight}px)`
  }
}
</script>

<style lang="scss" scoped>

.all {
  width: 100%;
  height: 100%;
  // overflow: hidden;
  .changeBg {
    background: $nav;
  }
  .subheading {
    width: 100%;
    padding: $medium;
    text-align: center;
    h4 {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 20px;
      }
    }
    p {
      padding-top: $mini;
      font-size: $medium;
      color: $lightblack;
    }
  }
  .searchNav {
    z-index: 1;
    display: flex;
    width: 100%;
    align-items: center;
    padding-left: $medium;
    padding-right: $medium;
    height: 0px;
    .backIcon {
      position: fixed;
      font-size: $large;
      // top: 10px;
    }
    div {
      font-size: $default;
      margin: 0 auto;
    }
  }
  .container {
    width: 100%;
    overflow: auto;
    .containerInside {
      background: $nav;
      width: 100%;
      height: auto;
      font-size: $default;
      display: flex;
      flex-direction: column;
      .header {
        height: 120px;
        margin: $large;
        color: black;
        font-weight: bold;
        font-size: $large;
        line-height: $large;
        margin-bottom: 0;
        border-radius: 6px 6px 0 0;
        background: linear-gradient(to top, #FFEB0F, #FFD909);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        p {
          font-weight: 400;
          color: $lightblack;
          font-size: $small;
        }
      }
      .nav {
        background: white;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        a {
          color: $drakblack;
          width: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: $medium;
          img {
            width: $large;
            margin-right: $mini;
          }
        }
        a:nth-child(1) {
          border-right: 1px solid $lightgray;
        }
      }
      .content {
        height: auto;
        // margin-top: $mini;
        padding: $large;
        background: white;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          width: 43vw;
          margin-bottom: $large;
          height: 230px;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
          // background: $nav;
          img {
            height: 75%;
          }
          .goodsName, .payPoints {
            height: $large;
            width: 100%;
            background: white;
            font-size: $small;
          }
          .goodsName {
            color: $drakblack;
          }
          .payPoints {
            color: $red;
          }
        }
      }
      .footer {
        color: $gray;
        font-size: $small;
        text-align: center;
        background: white;
        height: 60px;
      }
    }
  }
}
</style>
