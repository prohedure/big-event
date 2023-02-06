// 持久化存储
import { userInfoAPI } from '@/api'
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  // 配置 token 字段
  state: {
    token: '',
    userinfo: {}
  },
  // 属性编辑
  getters: {
    nickname: (state) => state.userinfo.nickname,
    username: (state) => state.userinfo.username,
    user_pic: (state) => state.userinfo.user_pic
  },
  mutations: {
    // 配置 更新 token 的方法
    updateToken(state, val) {
      state.token = val
    },
    // 配置 更新 userinfo 的方法
    updateUserinfo(state, val) {
      state.userinfo = val
    }
  },
  actions: {
    async getUserinfoActions(store) {
      const { data: res } = await userInfoAPI()
      console.log(`output-> res`, res.data)
      store.commit('updateUserinfo', res.data)
    }
  },
  modules: {},
  plugins: [
    // 配置 vuex 持久化存储的插件
    createPersistedState()
  ]
})
