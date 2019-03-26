<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content">
            <transition name="move" mode="out-in"><router-view></router-view></transition>
          <!--  <router-view></router-view> -->
        </div>
    </div>
</template>

<script>
//    import router from '../../router/index';
//    var configRouter = require('../../js/configRouter');
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';

    export default {
        components:{
            vHead, vSidebar
        },
//      created:function(){
//        var PowRouter=JSON.parse(sessionStorage.getItem('PowRouter'));
//
////        PowRouter[0].component=function  component (resolve) {
////
////          require(['./Home.vue'], resolve);
////        }
//        PowRouter[0].component= resolve =>  require(['./Home.vue'], resolve)
//
//
//
//        console.log(6677888);
//        console.log(PowRouter);
//          if(PowRouter){
//            var PowRouter=JSON.parse(sessionStorage.getItem('PowRouter'));
//            var rou=PowRouter[0].children;
//
//            for(var i=0;i<rou.length;i++){
//              var pa = rou[i].path.split("/")[1];
//              var pas = rou[i].path.split("/")[2];//转小写
//              for (var j = 0; j < configRouter.router.length; j++) {
//                // debugger;
//                  if (pas.toLowerCase() == configRouter.router[j].id) {//路劲根据规则和文件名比较一下是否存在
////                    console.log(2222)
////                    console.log('../model/' + pa + '/' + pas + '.vue');
//                    //alert(pas)
//                    pas = configRouter.router[j].val;
//                   // alert(pas)
////                    rou[i].component=function component (resolve) {
////
////                      require(['../model/' + pa + '/' + pas + '.vue'], resolve)
////                    }
//                    rou[i].component=  resolve =>require(['../model/' + pa + '/' + pas + '.vue'], resolve)
//
//                  }
//
//
//              }
//
//
////              rou[i].component=function (resolve) {
////                require(['../../components/model/sys/UserList.vue'], resolve)
////                //_this.comfun()
////              }
//              //rou[i].component=666;
//            }
//            //this.$router.addRoutes(JSON.parse(sessionStorage.getItem('PowRouter')));
//            //this.$router.addRoutes(PowRouter)
//            console.log(8899955566);
//            console.log(PowRouter);
//          }else{
//            router.push('/login')
//          }
//      },
    }
</script>
<style>
    .content{
        left:250px;
        padding:0;
    }
</style>
