// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入路由模块
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//引入相应文件
import Home from './pages/home/home'
import Cart from './pages/cart/cart'
//配置路由
const routes = [
	{path:'/', component:Home},
	{path:'/home', component:Home},
	{path:'/cart', component:Cart}
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
