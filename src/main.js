// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/css/main.css'
import Vue from 'vue'
import Mint from 'mint-ui'
import 'lib-flexible'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import store from './store'

Vue.use(Mint)
Vue.config.productionTip = false

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
