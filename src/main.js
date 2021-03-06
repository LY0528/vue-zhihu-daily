import Vue from 'vue'
import App from './App'
import { Header, Swipe, SwipeItem } from 'mint-ui'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
// 引入mint组件
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.use(VueRouter)
import './common/stylus/index.styl'
import homePage from './components/homePage/homePage'
import themeDetail from './components/themeDetail/themeDetail'
import moreNews from './components/moreNews/moreNews'
var routes = [
	{path:'/homePage',component:homePage},
	{path:'/themeDetail/:id',component:themeDetail},
	{path:'/moreNews/:id',component:moreNews}
]
var router = new VueRouter({
	routes,
	linkActiveClass: 'active'
})
var app = new Vue({
	router,
	render: h => h(App)
})
app.$mount('#app')
router.push('/homePage')
