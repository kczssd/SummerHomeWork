import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import vueaxios from 'vue-axios'
Vue.use(vueaxios, axios)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
