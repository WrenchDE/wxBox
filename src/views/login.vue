<template>
  <div class="all">
    <img src="../assets/images/logo.jpg" alt="">
    <cube-input class="telephone" placeholder="请输入手机号" v-model="telephone" type="number"></cube-input>
    <cube-input class="telephone" v-model="password" type="password" placeholder="请输入密码"></cube-input>
    <div style="text-align:right">
      <span @click="goRegister">还没有账号？去注册→</span>
    </div>
    <cube-button class="btn" :primary="true" @click="submit">登录</cube-button>
    <div @click="goForget">
      忘记密码
      <!-- 获取验证码，表示已经同意<span @click="openAgreement">《注册协议》</span> -->
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import { userLogin } from '../api/login'
export default {
  data() {
    return {
      telephone: '',
      password: ''
    }
  },
  created() {
    sessionStorage.clear()
  },
  computed: {
    ...mapState([
      'phone',
      'user'
    ])
  },
  methods: {
    ...mapMutations([
      'setPhone',
      'setUser',
      'setBoxNo'
    ]),
    async submit () {
      if (!this.telephone) return this.$createToast({ txt: '请输入手机号', type: 'txt' }).show()
      if (!this.password) return this.$createToast({ txt: '请输入密码', type: 'txt' }).show()
      if (this.password.length < 6) return this.$createToast({ txt: `密码至少6位`, type: 'txt' }).show()
      if (!/(?:^1[3456789]|^9[28])\d{9}$/.test(this.telephone)) return this.$createToast({ txt: '请输入正确手机号', type: 'txt' }).show()
      console.log('success' ,this.telephone)
      const toast = this.$createToast({
        time: 0
      })
      toast.show()
      let ul = await userLogin({telephone: this.telephone, password: this.$md5(this.password)})
      toast.hide()
      if (ul.data.return_code === 200) {
        let o = ul.data.return_data
        this.setUser({school_id: o.school_id, box_id: o.box_id, box_no: o.box_no, user_id: o.user_id, login_token: o.login_token, user_name: o.user_name})
        if (o.box_no) return this.$router.replace('goodsBox')
        this.$router.replace('info')
      } else return this.$createToast({ txt: ul.data.return_msg, type: 'txt' }).show()
      // let that = this
      // if (this.telephone === '15733133384') {
      //   this.$createDialog({
      //     type: 'confirm',
      //     // icon: 'cubeic-alert',
      //     title: '提示',
      //     content: '尚无注册信息，是否前往注册？',
      //     confirmBtn: {
      //       text: '确定',
      //       active: true,
      //       disabled: false,
      //       href: 'javascript:;'
      //     },
      //     cancelBtn: {
      //       text: '取消',
      //       active: false,
      //       disabled: false,
      //       href: 'javascript:;'
      //     },
      //     onConfirm () {
      //       that.$store.commit('setPhone', that.telephone)
      //       that.$router.push({ name: 'register'})
      //     },
      //     onCancel () {}
      //   }).show()
      // }
    },
    goRegister () {
      this.$router.push({name: 'register'})
    },
    goForget () {
      this.$router.push({name: 'forget'})
    },
    openAgreement () {
      this.$createToast({ txt: 'opening agreement', type: 'txt' }).show()
    }
  },
  mounted() {
    document.title = '登陆'
  }
}
</script>
<style lang="scss" scoped>

.all {
  padding: 30px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    width: 55%;
    align-self: center;
  }
  .telephone {
    background: transparent;
  }
  div {
    font-size: $medium;
    color: $lightgray;
    span {
      color: $primary;
    }
  }
  .btn {
    margin-top: 30px;
  }
  /deep/ .cube-input {
    font-size: $medium;
  }
  /deep/ .cube-input::after {
    // border: 0px;
    border-left: 0px;
    border-top: 0px;
    border-right: 0px;
    border-bottom-color: $lightgray;
    
  }
 /deep/ .cube-input_active::after {
    border-bottom-color: $primary !important;
  }
}

</style>
