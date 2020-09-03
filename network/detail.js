import { request } from './request.js'
export function getDetail(iid) {
  return request ({
    url :'/detail',
    data :{
      iid
    }
  })
}