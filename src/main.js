import Vue from 'vue'
//<引入ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//兼容ie
import 'babel-polyfill'
import App from './App'

import router from './router'
Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
//通过beforeEach来判断用户是否登录，如果登录继续加载组件，没有进入login
router.beforeEach((to, from, next) => {
    if (to.path == '/login') {
        sessionStorage.removeItem('user');
    }
    let user = JSON.parse(sessionStorage.getItem('user'));
    console.log(user)
    console.log(to.path)
    if (!user && to.path != '/login') {
        next({ path: '/login' })
    } else{
        next()
    }
})
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
//默认页面/
// router.push('/')
