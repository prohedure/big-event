import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 懒加载
  { path: '/', redirect: '/login' },
  { path: '/login', component: () => import('@/views/Login/index.vue') },

  { path: '/reg', component: () => import('@/views/Register/index.vue') }
]

const router = new VueRouter({
  routes
})

export default router
