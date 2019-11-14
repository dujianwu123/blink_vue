import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/index'
import Book from '@/pages/book/index'
import My from '@/pages/my/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/my',
      name: 'My',
      component: My
    }
  ]
})
