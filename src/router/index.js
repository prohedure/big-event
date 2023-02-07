import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  // 懒加载
  { path: '/', component: () => import('@/views/Layout/index.vue') },
  { path: '/login', component: () => import('@/views/Login/index.vue') },

  { path: '/reg', component: () => import('@/views/Register/index.vue') }
]

const router = new VueRouter({
  routes
})

// 不需要登陆即可访问
const whiteList = ['/login', '/reg']

// 全局路由守卫
router.beforeEach((to, from, next) => {
  const token = store.state.token
  // 本地有 token 去存用户信息进到vuex
  if (token) {
    // 放行所有
    if (!store.state.userinfo.username) {
      store.dispatch('getUserinfoActions')
    }
    next()
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
