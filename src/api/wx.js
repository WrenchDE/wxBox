import axios from './index'
const { api } = require('@/dev')

// 获取各种协议
export const authority = data => {
  return axios.post(`${api}/authority`, data)
}

// options
export const options = data => {
  return axios.post(`${api}/options`, data)
}
