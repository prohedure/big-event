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

/**
 * 获取用户信息
 * @returns Pomise对象 用户信息
 */
export const userInfoAPI = () => {
  return request({
    url: '/my/userinfo'
  })
}

/**
 * 获取侧边栏导航信息
 * @returns Promise
 */
export const navInfoAPI = () => {
  return request({
    url: '/my/menus'
  })
}

/**
 * 修改用户信息
 * @param {*} param0 vuex 中的用户信息
 * @returns Promise对象
 */
export const updateUserInfoAPI = ({
  id,
  username,
  nickname,
  email,
  user_pic
}) => {
  return request({
    url: '/my/userinfo',
    method: 'PUT',
    data: {
      id,
      username,
      nickname,
      email,
      user_pic
    }
  })
}

/**
 * 上传图片到后台
 * @param {*} avatar 图片的base64字符串
 * @returns Promise
 */
export const uploadAvatarAPI = (avatar) => {
  return request({
    url: '/my/update/avatar',
    method: 'PATCH',
    data: {
      avatar
    }
  })
}
