import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'

Vue.use(Router)

export default new Router({
  routes: [
    // 先进行重定位操作
    {
      path: '/',
      redirect: '/App'
    },
    {
      path: '/App',
      component: App
    }
  ]
})
