import Vue from 'vue'
import Router from 'vue-router'
const home = () => import('@/pages/home')
const brand = () => import('@/pages/brand.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      name: 'Brand',
      path: '/brand',
      component: brand
    }
  ]
})
