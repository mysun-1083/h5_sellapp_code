import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        redirect: '/goods',
      },
      {
        path: '/goods',
        name: 'goods',
        component: () => import('../views/Goods.vue')
      },
      {
        path: '/merchants',
        name: 'merchants',
        component: () => import('../views/Merchants.vue')
      },
      {
        path: '/evaluate',
        name: 'evaluate',
        component: () => import('../views/Evaluate.vue')
      }
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
