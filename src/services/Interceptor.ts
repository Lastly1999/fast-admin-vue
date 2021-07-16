import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"

// init axios interceptor
const AxiosInterceptor: AxiosInstance = axios.create({
    timeout: 20000,
    baseURL: "",
})

// request interceptor
AxiosInterceptor.interceptors.request.use((config: AxiosRequestConfig) => {
    return config
})

// reqsponse interceptor
AxiosInterceptor.interceptors.response.use((response: AxiosResponse<any>) => {
    console.log(response)
    return response
})

export default AxiosInterceptor
