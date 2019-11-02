import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/components',
    name: 'components',
    alias: '/',
    component: () => import(/* webpackChunkName: "components" */ '../views/Components.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

export default router
