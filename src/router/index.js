import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/common/Home.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: function (resolve) {
          require(['../components/model/login/login.vue'], resolve)
      }
    },
      {
        path: '/',
        name: 'Home',
        component: Home,
          children:[
              {
                  path:'/',
                  component: function(resolve) { require(['../components/model/home/home.vue'], resolve) }
              },
          ]
      },
      //首页
      {
          path: '/home',
          name:'home',
          component:Home,
          children:[
              {
                  path:'/',
                  component: function(resolve) { require(['../components/model/home/home.vue'], resolve) }
              },
              {
                  path:'/storeInfo',
                  component: function(resolve) { require(['../components/model/home/storeInfo.vue'], resolve) }
              },
              {
                  path:'/changePassword',
                  component: function(resolve) { require(['../components/model/home/changePassword.vue'], resolve) }
              }
          ]
      },
      //门店信息
      {
          path: '/home/storeInfo',
          name:'home',
          component:Home,
          children:[
              {
                  path:'',
                  component: function(resolve) { require(['../components/model/home/storeInfo.vue'], resolve) }
              },
          ]
      },
      //修改密码
      {
          path: '/home/changePassword',
          name:'home',
          component:Home,
          children:[
              {
                  path:'',
                  component: function(resolve) { require(['../components/model/home/changePassword.vue'], resolve) }
              },
          ]
      },
      //添加会员
      {
          path: '/vipManage/user/addUser',
          name:'home',
          component:Home,
          children:[
              {
                  path: '',
          //         name: 'user',
                  component: function(resolve) { require(['../components/model/vipManage/user/addUser.vue'], resolve) },
              },
          ]
      },
      //会员管理
      {
          path: '/vipManage',
          name: 'vipManage',
          // meta:{title:"会员管理"},
          component: Home,
          children:[
              {
                  path: '/',
                  component: function(resolve) { require(['../components/model/vipManage/vipManage.vue'], resolve) }
              },
              {
                  path: '/user',
                  name: 'user',
                  component: function(resolve) { require(['../components/model/vipManage/user/userDetil.vue'], resolve) },
                  children:[
                      {
                          path:'',
                          component: function(resolve) { require(['../components/model/vipManage/user/check.vue'], resolve) },
                      },
                      {
                          path:'/edit',
                          component: function(resolve) { require(['../components/model/vipManage/user/edit.vue'], resolve) },
                      },
                      {
                          path:'/addUser',
                          component: function(resolve) { require(['../components/model/vipManage/user/addUser.vue'], resolve) },
                      },
                      {
                          path:'/userDetil',
                          component: function(resolve) { require(['../components/model/vipManage/user/userDetil.vue'], resolve) },
                      },
                  ]
              },
          ]
      },
      //跟踪提醒
      {
          path: '/remind',
          name: 'remind',
          component: Home,
          children:[
              {
                  path:'/',
                  component: function(resolve) { require(['../components/model/remind/remind.vue'], resolve) }
              },
          ]
      },
      //优惠活动
      {
          path: '/activity',
          name: 'activity',
          component: Home,
          children:[
              {
                  path:'/',
                  component: function(resolve) { require(['../components/model/activity/activity.vue'], resolve) }
              },
              {
                  path:'/new',
                  component: function(resolve) { require(['../components/model/activity/new.vue'], resolve) }
              }
          ]
      },
      //设备管理
      {
          path: '/deviceManage',
          name: 'deviceManage',
          component: Home,
          children:[
              {
                  path:'/',
                  component: function(resolve) { require(['../components/model/deviceManage/deviceManage.vue'], resolve) }
              },
          ]
      },
  ]
});

