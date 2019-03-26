<template>
    <div class="header">
        <div class="logo" style="color:white;">致医健康连锁药店</div> <div class="storeLabel">总店</div>
        <div class="user-info">
            <span class="el-dropdown-link">
                 <!--<img class="user-logo" src="../../../static/img/img.jpg">-->
                欢迎回来，{{username}}&nbsp;|
            </span>
            <el-dropdown >
                <span trigger="hover" @command="handleCommand"  class="el-dropdown-link">
                    退出登录
                </span>
                <el-dropdown-menu slot="dropdown">
                    <router-link to="/home/storeInfo" tag="div">
                        <el-dropdown-item command="loginout">门店信息</el-dropdown-item>
                    </router-link>
                    <router-link to="/home/changePassword" tag="div">
                        <el-dropdown-item command="loginout">修改密码</el-dropdown-item>
                    </router-link>
                    <el-dropdown-item command="loginout" ><el-button type="text" @click="centerDialogVisible = true">退出登录</el-button></el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <el-dialog
            title="提示"
            :visible.sync="centerDialogVisible"
            width="30%"
            center>
            <span class="dialog-con">是否退出此账号</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
              </span>
        </el-dialog>
    </div>
</template>
<script>
  import router from '../../router/index';
    export default {
        data() {
            return {
                name: 'zr',
                centerDialogVisible:false
            }
        },
        computed:{
            username(){
                let username = sessionStorage.getItem('username');
                return username ? username : this.name;
            }
        },
        methods:{
            handleCommand(command) {
                if(command == 'loginout'){

                  this.$ajaxSend.sendLogin('/login/logout',{userId:sessionStorage.userId},function(r){
                    sessionStorage.clear();
                    router.push('/login');

                  });

                }
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            }
        }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 64px;
        font-size: 22px;
        line-height: 64px;
        color: #fff;
        background: -webkit-linear-gradient(left,#2BD5D2,#2AB3E7,#2AB1E8); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right,#2BD5D2,#2AB3E7,#2AB1E8); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right,#2BD5D2,#2AB3E7,#2AB1E8); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right,#2BD5D2,#2AB3E7,#2AB1E8); /* 标准的语法 */
    }
    .header .logo{
        float: left;
        width:250px;
        text-align: center;
    }
    .header .storeLabel{
        float: left;
        width: 100px;
    }
    .user-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #fff;
    }
    .user-info .el-dropdown-link{
        position: relative;
        display: inline-block;
        padding-left: 0;
        color: #fff;
        cursor: pointer;
        vertical-align: middle;
    }
    .user-info .user-logo{
        position: absolute;
        left:0;
        top:15px;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
</style>
