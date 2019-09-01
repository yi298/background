import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入路由组件
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: { name: 'home' }
    },
    {
      name: 'login',
      path: '/login',
      component:Login
    },
    {
      name: 'home',
      path: '/home',
      component:Home
    }
  ]
})

// 暴露
export default router