import axios from '../index'
const { api } = require('../../dev')

// 分类列表
export const WeixinOrderScan = data => {
  return axios.post(`${api}/WeixinOrderScan`, data)
}

// 分类商品
export const WeixinOrderScanList = data => {
  return axios.post(`${api}/WeixinOrderScanList`, data)
}

// getBoxHandlingFee  盒子补货页tips金额
export const getBoxHandlingFee = data => {
  return axios.post(`${api}/getBoxHandlingFee`, data)
}

// 盒子认领
export const boxReceive = data => {
  return axios.post(`${api}/boxReceive`, data)
}

// orderSearchGoodsLog 搜索页历史记录
export const orderSearchGoodsLog = data => {
  return axios.post(`${api}/orderSearchGoodsLog`, data)
}

// 搜索页历史记录
export const orderSearchGoodsHot = data => {
  return axios.post(`${api}/orderSearchGoodsHot`, data)
}

// 搜索
export const orderSearchGoods = data => {
  return axios.post(`${api}/orderSearchGoods`, data)
}