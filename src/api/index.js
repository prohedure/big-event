// 封装 axios 请求
// 步骤2：封装具体请求，向外暴露为命名变量
import request from '@/utils/request.js'

// 封装-发起注册请求
// 解构赋值也可以用，但是我会报错，就用的整个对象
/**
 * 登陆接口
 * @param {表单对象，包括 username，password，repassword } obj
 * @returns promise 对象
 */
export const registerAPI = ({ username, password, repassword }) => {
  return request({
    url: '/api/reg',
    method: 'POST',
    data: {
      username,
      password,
      repassword
    }
  })
}

/**
 * 登陆接口
 * @param {username: 用户名，password：密码} param0
 * @returns Promise 对象
 */
export const loginAPI = ({ username, password }) => {
  return request({
    url: '/api/login',
    method: 'POST',
    data: {
      username,
      password
    }
  })
}
