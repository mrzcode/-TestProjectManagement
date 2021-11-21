import request from '@/utils/request'

export function apiTestSearch(requestBody) {
  return request({
    url: '/api/test/search',
    method: 'post',
    data: requestBody
  })
}

export function reqCreate(body) {
  return request({
    url: '/api/test/create',
    method: 'post',
    data: body
  })
}

export function apiTestInfo(id) {
  return request({
    url: '/api/test/info',
    method: 'get',
    params: { id }
  })
}

export function reqUpdate(body) {
  return request({
    url: '/api/test/update',
    method: 'post',
    data: body
  })
}











