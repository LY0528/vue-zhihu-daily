import Vue from 'vue'
import App from './App'
import { Header, Swipe, SwipeItem } from 'mint-ui'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.use(VueRouter)
import './common/stylus/index.styl'
import homePage from './components/homePage/homePage'
import themeDetail from './components/themeDetail/themeDetail'
var routes = [
	{path:'/homePage',component:homePage},
	{path:'/themeDetail/:id',component:themeDetail}
]
var router = new VueRouter({
	routes
})
var app = new Vue({
	router,
	render: h => h(App)
})
app.$mount('#app')
router.push('/homePage')
