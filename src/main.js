// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import('../css/style.css')
import('/home/lou/Documents/S2/Techno Web/lou_and_maxime_project/node_modules/bulma/css/bulma.css')

Vue.config.productionTip = false
Vue.prototype.$name = 'nom'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})

