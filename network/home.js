import { request } from './request.js'
export function getHomeGoods(type,page) {
  return request({
    url: '/home/data',
    data: {
      type,
      page
    }
  })
}