<template>
  <div class="login">
    <div class="bodys">
      <div class="logo_box">
        <img src="../../../../static/img/Grounp3.png" alt="" class="grounp3">
        <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container loginBox">
          <el-form-item prop="account" class="inputB">
            <img src="../../../../static/img/user.png" alt="">
            <input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="请输入用户名或者账号" class="inputC"/>
          </el-form-item>
          <el-form-item prop="checkPass" class="inputB">
            <img src="../../../../static/img/password.png" alt="">
            <input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="请输入密码"/>
          </el-form-item>
          <el-checkbox v-model="checked" checked class="remember">记住用户名和密码</el-checkbox>
          <div class="toFgetpwd"><a href="#" class="login-fgetpwd">忘记密码</a>&nbsp;？</div>
          <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining" class="loginButton">登录</el-button>
          </el-form-item>
          <div class="inputBg"></div>
        </el-form>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
  import {requestLogin} from '../../../api/api'
  import router from '../../../router/index.js';
  var code;
  export default {
    name: 'Login',
    data () {
      return {
          logining: false,
          ruleForm2: {
              account: 'admin',
              checkPass: '123456'
          },
          rules2: {
              account: [
                  { required: true, message: '请输入账号', trigger: 'blur' },
                  //{ validator: validaePass }
              ],
              checkPass: [
                  { required: true, message: '请输入密码', trigger: 'blur' },
                  //{ validator: validaePass2 }
              ]
          },
          checked: true
      }
    },
    created:function(){

    },
    mounted:function(){
      var that=this;
    },
    methods:{
        handleSubmit2(ev) {
            var _this = this;
//            _this.$router.replace('/table');
            this.$refs.ruleForm2.validate((valid) => {
                console.log(valid)
                if (valid) {
                    this.logining = true;
                    //NProgress.start();
                    var params = { username: this.ruleForm2.account, password: this.ruleForm2.checkPass };
//                    this.$instance.post(_this.$base_url+'/login/', this.$qs.stringify(params)).then(function(res){
//                      this.$instance.post(_this.$base_url+'/login/', this.$qs.stringify(params)).then(function(res){
                    requestLogin(params).then(data=> {
//                        var code = res.data.result;
                        var code = data.result
                        console.log(code)
                        if(code == '01'){
                            var userinfo = params;
//                            userinfo.chineseName = res.data.user.chinesename;
                            sessionStorage.setItem('user', JSON.stringify(userinfo));
                            _this.$router.push({path: '/'});
                        }else{
                            _this.logining = false;
                            if(code == '02'){
                                _this.msg = "账号或密码错误！";
                            }else if(code == '03'){
                                _this.msg = "系统错误，请联系管理员！";
                            }else{
                                _this.msg = "未知错误，请联系管理员！";
                            }
                        }
                    }).catch(function (error) {
                        _this.logining = false;
                        _this.msg ="服务器走神了，请联系管理员！";
                        console.log(error);
                    });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    },
    computed: {
    },
    components:{
    }
  }
</script>

<style scoped>
  /*@import '../../static/css/style.css';*/
  /*@import '../../static/css/supersized.css';*/
  *{
    margin: 0;
    padding: 0;
    text-align: left;
  }

  .bodys{
    font-family: "微软雅黑";
    position: relative;
    font-size: 14px;
    width: 100%;
    /*height: 100%;*/
    /*background: url(../../../../static/img/56a46b7590f5672af5b8.jpg) fixed center center;*/
    background: url(../../../../static/img/loginBG.jpg)  center center;
  }
  .grounp3{
    margin-top: -160px;
    margin-bottom: 30px;
  }
  .logo_box{
    width: 440px;
    height: 490px;
    padding:280px 35px 35px;
    color: #EEE;
    margin-left: 30%;
    margin-top: 0px;
    margin-bottom: 300px;
  }
  .loginBox{
    box-shadow: 0 2px 14px 0 rgba(180,171,171,0.50);
    border-radius: 4px;
    padding: 35px;
    background: none;
    position: relative;
  }
  .loginBox *{
    position: relative;
    z-index: 10;
  }
  .loginBox .inputBg{
    opacity: 0.7;
    filter:alpha(opacity=70);
    background: #FFFFFF;
    box-shadow: 0 2px 14px 0 rgba(180,171,171,0.50);
    width: 100%;
    height:100%;
    border-radius: 4px;
    position: absolute;
    left: 0;
    top:0;
    z-index: 1;
  }
  .inputB {
    background: #fff;
    margin-bottom: 10px;
    border-radius: 4px;
  }
  .remember{
    color: #999999;
  }
  .inputB img{
    width: 20px;
    height:20px;
    float: left;
    margin: 9px;
  }
  .inputB input{
    float: left;
    width: 250px;
    height: 38px;
    line-height: 38px;
    font-size: 14px;
    border: none;
    padding: 0 14px;
  }
  .loginButton{
    width: 100%;
    height:40px;
    line-height: 40px;
    text-align: center;
    border: none;
    margin-top: 10px;
    background: -webkit-linear-gradient(left,#2BD5D2,#2AB3E7,#2AB1E8); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right,#2BD5D2,#2AB3E7,#2AB1E8); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right,#2BD5D2,#2AB3E7,#2AB1E8); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right,#2BD5D2,#2AB3E7,#2AB1E8); /* 标准的语法 */
  }
  .toFgetpwd{
    float: right;
    color: #2AB1E8;
    font-size: 14px;
  }
  .login-fgetpwd{
    color: #2AB1E8;
    font-size: 14px;
    border-bottom:1px solid #2AB1E8;
    padding-bottom: 4px;
  }
</style>
<style>
  .el-checkbox__input.is-checked+.el-checkbox__label{
    color: #999;
  }
</style>
