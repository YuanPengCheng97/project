// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/css/main.css'
import 'mint-ui/lib/style.css'
import 'lib-flexible'
import './assets/icon/iconfont.css'
import Vue from 'vue'
import Mint from 'mint-ui'
import App from './App'
import router from './router'
import store from './store'
import moment from 'moment'
import filters from './filters'
import initComponent from './module/initComponents'

Vue.use(Mint)
Vue.use(initComponent)
Vue.config.productionTip = false
moment.locale('zh-Cn')

Vue.prototype.$moment = moment
Vue.prototype.$success = (msg) => {
  Mint.Toast({
    message: msg || '操作成功',
    iconClass: 'mint-toast-icon mintui mintui-field-success'
  })
}
Vue.prototype.$error = (msg) => {
  Mint.Toast({
    message: msg || '操作失败',
    iconClass: 'mint-toast-icon mintui mintui-field-error'
  })
}
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  mounted () {
    this.hasLogin()
  },
  methods: {
    hasLogin () {
      if (!store.state.logined) {
        router.push('login')
      }
    }
  },
  template: '<App/>'
})
