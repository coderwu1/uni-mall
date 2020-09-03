const BASE_URL = "http://152.136.185.210:8000/api/z8"
export const request = (options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL+options.url,
			method: options.method || 'GET',
			data: options.data || {},
			timeout:100000,
			success: resolve,
			fail: reject
		})
	})
}