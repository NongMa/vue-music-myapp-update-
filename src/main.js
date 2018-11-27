import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
// 实现懒加载技术
Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})
// 解决移动端300ms的点击延迟
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
