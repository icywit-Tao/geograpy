import Vue from 'vue'
import App from './App'
import config from './config'
import router from './router'
// import fontAdapt from './fontAdapt'
Vue.config.productionTip = false
// fontAdapt();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
