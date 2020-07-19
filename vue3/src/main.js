import Vue from 'vue'
import App from './App.vue'
import VueCompositionAPI from '@vue/composition-api'
import axios from 'axios'
import vueaxios from 'vue-axios'
Vue.use(vueaxios, axios)
Vue.use(VueCompositionAPI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
