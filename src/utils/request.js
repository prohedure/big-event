// 封装 axios 请求
// 步骤1：获取 axios 实例
import router from '@/router'
import store from '@/store'
import axios from 'axios'
import { Message } from 'element-ui'

// 设置 api 请求根路径
const myAxios = axios.create({
  baseURL: 'http://big-event-vue-api-t.itheima.net'
})

// 添加请求拦截器
myAxios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    if (store.state.token) {
      config.headers.Authorization = store.state.token
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
myAxios.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    if (error.response.status === 401) {
      store.commit('updateToken', '')
      store.commit('updateUserinfo', {})

      router.push('/login')

      Message.error('登陆验证已经过期！！')
    }
    return Promise.reject(error)
  }
)

export default myAxios
