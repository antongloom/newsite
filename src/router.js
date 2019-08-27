import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: {layout: 'empty'},
      component: () => import('./views/Login.vue')
    },
     {
      path: '/',
      name: 'home',
      component: Home,
      meta: {layout: 'main'}
    },
    {
      path: '/categories',
      name: 'Categories',
      meta: {layout: 'main'},
      component: () => import('./views/Categories.vue')
    },
    {
      path: '/history',
      name: 'History',
      meta: {layout: 'main'},
      component: () => import('./views/History.vue')
    },
    {
      path: '/planning',
      name: 'Planning',
      meta: {layout: 'main'},
      component: () => import('./views/Planning.vue')
    },
    {
      path: '/record',
      name: 'Record',
      meta: {layout: 'main'},
      component: () => import('./views/Record.vue')
    }
  ]
})
