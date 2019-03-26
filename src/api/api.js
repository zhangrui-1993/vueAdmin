import Vue from 'vue'
import axios from 'axios';

// 配置接口地址
import qs from 'qs';
//与ajax一起使用
//测试地址 http://sc.yunzhenshi.com/;
// 正式地址  "http://huizhen.yunzhenshi.com/inquiry/";
Vue.prototype.preUrl= 'http://sc.yunzhenshi.com/';
let base =  'http://yunwei.zhiyimall.com';
//开发中用的接口
// let base ='http://192.168.31.59:8080';
// 创建一个实例；
var axios_instance = axios.create({
    transformRequest: [function (params) {
        // 对 data 进行任意转换处理,config里面有这个transformRquest，这个选项会在发送参数前进行处理。
        params = qs.stringify(params,{ indices: false });  //qs.stringify()将对象序列化url的形式，以&进行拼接
        return params;
    }],
    withCredentials: true, // 默认的  `withCredentials` 表示跨域请求时是否需要使用凭证
    timeout: 1000,
    headers:{"Content-Type": "application/x-www-form-urlencoded;charset=utf-8",}
})
export const requestLogin = params => { return axios_instance.post( base+'/login/',params).then(res => res.data);}
