import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入路由组件
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import Welcome from '@/views/Welcome.vue'
import Users from '@/views/users/index.vue'

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
      component: Home,
      redirect: { path: '/home/wel' },
      children: [
        {
          path: 'wel',
          component:Welcome
        },
        {
          name:'Users',
          path: 'users',
          component:Users
          
        }
      ]
    }
  ]
})

// 暴露
export default router