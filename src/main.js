import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/reset.css'
import './assets/viewport'
import VueLazyload from 'vue-lazyload'
Vue.config.productionTip = false
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=396805210,4266088262&fm=27&gp=0.jpg',
  loading: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548875654366&di=418ec8d3ac78d5512df001b8d0783648&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201503%2F26%2F20150326075021_uFfLC.thumb.700_0.gif',
  attempt: 1
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
