<template>
  <div class="sidebar" ref="sidebar">
    <!--        <el-radio-group v-model="isCollapse" style="margin-bottom: 50px;width:200px;">
     <el-radio-button :label="false"  width="200px">展开</el-radio-button>
     <el-radio-button :label="true">收起</el-radio-button> -->
    <!--      <div class="menu-toggle" @click.prevent="isCollapse">wwwww
         <i class="iconfont icon-menufold" v-show="!isCollapse"></i>
         <i class="iconfont icon-menuunfold" v-show="isCollapse"></i> -->
    <!--  </div> -->
    <!--<div @click="isCollapse=true" v-if="!isCollapse">-->
      <!--<i class="el-icon-d-arrow-left" style="font-size: 25px;margin-left: 85px;" @click="collLeft"></i>-->
    <!--</div>-->
    <!--<div  @click="isCollapse=false" v-if="isCollapse">-->
      <!--<i class="el-icon-d-arrow-right" style="font-size: 25px;margin-left: 40px;" @click="collRight"></i>-->
    <!--</div>-->
    <!--<el-menu @open="handleOpen" @close="handleClose" :collapse="isCollapse" :default-active="onRoutes"-->
             <!--class="el-menu-vertical-demo" router theme="dark" unique-opened background-color="#2E363F"-->
             <!--text-color="#C0C0C0">-->
      <!--<template v-for="item in items">-->
        <!--<el-submenu :index="item.index" >-->
          <!--<template slot="title"><i :class="item.icon"></i> <i class="el-icon-tickets"></i>{{ item.label }}</template>-->
          <!--<template v-for="(subItem,i) in item.children">-->
          <!--<template v-if="subItem.children">-->
            <!--<el-submenu :index="subItem.index" >-->
              <!--<template  slot="title"><i class="el-icon-document"></i>{{subItem.label}}</template>-->
              <!--<el-menu-item v-for="(subw,i) in subItem.children" :key="i" :index="subw.index">{{ subw.label }}-->
              <!--</el-menu-item>-->
            <!--</el-submenu>-->
          <!--</template>-->
          <!--<template  v-if="!subItem.children">-->
            <!--<el-menu-item :key="i" :index="subItem.index">{{ subItem.label }}-->
            <!--</el-menu-item>-->
          <!--</template>-->
        <!--</template>-->
        <!--</el-submenu>-->
      <!--</template>-->
    <!--</el-menu>-->
    <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>首页</span>
        </template>
        <el-menu-item-group>
          <template slot="title">sho</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <router-link to="/home/" tag="div">
        <el-menu-item index="1" >
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
      </router-link>
      <router-link to="/vipManage/" tag="div">
        <el-menu-item index="2" >
          <i class="el-icon-menu"></i>
          <span slot="title">会员管理</span>
        </el-menu-item>
      </router-link>
      <router-link to="/remind/" tag="div">
        <el-menu-item index="3" >
          <i class="el-icon-document"></i>
          <span slot="title">跟踪提醒</span>
        </el-menu-item>
      </router-link>
      <router-link to="/activity/" tag="div">
        <el-menu-item  index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">促销活动</span>
        </el-menu-item>
      </router-link>
      <router-link to="/deviceManage/" tag="div">
        <el-menu-item index="5">
          <i class="el-icon-setting"></i>
          <span slot="title">设备管理</span>
        </el-menu-item>
      </router-link>
      <router-link to="/vipManage/user/addUser" tag="div">
        <button class="addUser"><i class="el-icon-plus"></i> 添加会员</button>
      </router-link>
    </el-menu>

  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    created:function(){

      var   menuListData=JSON.parse(sessionStorage.getItem("menuListData"));
      console.log(999);
      console.log(this.items);
      this.items=menuListData;
      //console.log(999);
      console.log(this.items);
    },
    mounted() {
      //$('.side').css('background-clolr','!red');
      $(this.$refs.sidebar).animate({width:'250px'},10);//初始化左侧菜单样式,主要是宽度

    },
    methods: {

      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      collLeft:function () {
//        alert()
      },
      collRight:function () {
//        alert()

      }
    },
    computed:{
      onRoutes(){
        return this.$route.path.replace('/','');
      },
    },
    watch: {
      isCollapse:function  () {
        if(this.isCollapse==true){
          console.log(this.$refs.sidebar)
          //this.$refs.sidebar.style.width="100px";
          $(this.$refs.sidebar).animate({width:'100px'});
          $('.content').animate({left:'100px'});
          // $('.content').css('transform','scale(1.03)')
        }else{
          $(this.$refs.sidebar).animate({width:'200px'},10);
          $('.content').animate({left:'200px'});
        }
      }
    }
  }
</script>

<style scoped>
  .sidebar{
    display: block;
    position: absolute;
    width: 250px;
    left: 0;
    top: 64px;
    bottom:0;
    background: #4E5558;
  }
  .sidebar > ul {
    height:100%;
  }
  .sidebar > ul li i{
    padding-left: 40px;
  }
  /*      .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 100px;
      min-height: 400px;
    }*/
  .el-menu{
    border-right:0px;
  }
  .addUser{
    display: block;
    width: 140px;
    height:45px;
    line-height: 45px;
    border-radius: 25px;
    color: #fff;
    font-size: 16px;
    text-align: center;
    border: none;
    margin: 100px auto 0;
    background: -webkit-linear-gradient(left,#2BD5D3,#2AB4E6); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right,#2BD5D3,#2AB4E6); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right,#2BD5D3,#2AB4E68); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right,#2BD5D3,#2AB4E6); /* 标准的语法 */
  }
  /*  .el-menu--collapse{
      width: 300px;
      min-height: 400px;
    }*/
</style>
