import Vue from 'vue'
import App from './App.vue'
// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入路由
import router from '@/router.js';
// 引入格式化样式文件
import '@/styles/index.less'

Vue.config.productionTip = false
Vue.use(ElementUI);

// 添加路由导航前置守卫
router.beforeEach((to, from, next) => {
  // 获取token值
  var token = localStorage.getItem('token')
  if (token || to.path === '/login') {
    next();
  } else if (!token || to.path !== '/login') {
    next({name:'login'})
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
