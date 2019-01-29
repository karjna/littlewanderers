import Vue from 'vue'
import PrismicVue from 'prismic-vue'
import linkResolver from './prismic/link-resolver'
import htmlSerializer from './prismic/html-serializer'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'vue-moment'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver,
  htmlSerializer
})

Vue.use(require('vue-moment'));


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
