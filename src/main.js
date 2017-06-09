import Vue from 'vue'
import App from './App'
import { Header, Swipe, SwipeItem } from 'mint-ui'

Vue.config.productionTip = false

Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
import './common/stylus/index.styl'

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
