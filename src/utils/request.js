// 封装 axios 请求
// 步骤1：获取 axios 实例
import axios from 'axios'

// 设置 api 请求根路径
const myAxios = axios.create({
  baseURL: 'http://big-event-vue-api-t.itheima.net'
})

export default myAxios
