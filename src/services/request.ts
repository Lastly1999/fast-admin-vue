import interceptor from './Interceptor'

type RequestParams = {
    method: 'post' | 'get' | 'put' | 'delete'
    path: string
    data: any
}

// public request method
export const request = (param: RequestParams) => {
    return new Promise((resolve, reject) => {
        interceptor[param.method](param.path, { ...param.data })
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}
