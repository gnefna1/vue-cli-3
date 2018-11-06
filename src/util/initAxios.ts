import axios from "axios";
import { Loading } from "element-ui";
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log(Loading)
    Loading.service({ fullscreen: true });
    return config;
}, function (error) {
    // 对请求错误做些什么
    Loading.service({ fullscreen: true }).close()
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    Loading.service({ fullscreen: true }).close()
    return response;
}, function (error) {
    // 对响应错误做点什么
    Loading.service({ fullscreen: true }).close()
    return Promise.reject(error);
});
export  {axios}