import './assets/reset.css'

import Vue from 'vue'
import App from './App.vue'

import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#multiples')

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js')
    .then(function() { console.log('Multiples Service Worker v1.5 Registered'); });
}
