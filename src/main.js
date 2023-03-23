import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TestSfcCli from '@charlesliuy/test-sfc-cli'
Vue.use(TestSfcCli)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
