import Vue from 'vue'
import App from './App.vue'
import DragenliUI from './index.js'

Vue.use(DragenliUI)
new Vue({
  el: '#app',
  render: h => h(App)
})
