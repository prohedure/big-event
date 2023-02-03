// 持久化存储
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 配置 token
  state: {
    token: ''
  },
  getters: {},
  mutations: {
    updateToken(state, val) {
      state.token = val
    }
  },
  actions: {},
  modules: {}
})
