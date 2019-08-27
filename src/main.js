import Vue from 'vue'
import App from './App.vue'
import store from './store'
// 引入axios模块
import axios from 'axios'

Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
