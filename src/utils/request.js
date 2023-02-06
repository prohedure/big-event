// 封装 axios 请求
// 步骤1：获取 axios 实例
import store from '@/store'
import axios from 'axios'

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

export default myAxios
