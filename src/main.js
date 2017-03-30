// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入路由模块
import VueRouter from 'vue-router'
//引入网络请求模块
import VueReSource from 'vue-resource'
Vue.use(VueRouter)
Vue.use(VueReSource)
//引入相应文件
import Home from './pages/home/home'
import Cart from './pages/cart/cart'
import Market from './pages/market/market'
import Mine from './pages/mine/mine'
//配置路由
const routes = [
	{path:'/', component:Home},
	{path:'/home', component:Home},
	{path:'/cart', component:Cart},
	{path:'/market', component:Market},
	{path:'/mine', component:Mine}
]
Vue.config.productionTip = false
//实例化路由
var router = new VueRouter({
	routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
