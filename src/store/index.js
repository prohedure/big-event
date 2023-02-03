// 持久化存储
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  // 配置 token 字段
  state: {
    token: ''
  },
  getters: {},
  mutations: {
    // 配置 更新 token 的方法
    updateToken(state, val) {
      state.token = val
    }
  },
  actions: {},
  modules: {},
  plugins: [
    // 配置 vuex 持久化存储的插件
    createPersistedState()
  ]
})
