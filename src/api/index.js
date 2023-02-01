// 封装 axios 请求
// 步骤2：封装具体请求，向外暴露为命名变量
import request from '@/utils/request.js'

// 封装-发起注册请求
export const registerAPI = () => {
  return request({
    url: '/api/reg',
    method: 'POST',
    data: {
      username: 'zsjzsj',
      password: '111111',
      repassword: '111111'
    }
  })
}
