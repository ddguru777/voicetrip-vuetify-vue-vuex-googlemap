// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import App from './App'
import router from './router'
import Store from './store'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  iconfont: 'md'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: Store,
  components: { App },
  template: '<App/>'
})
