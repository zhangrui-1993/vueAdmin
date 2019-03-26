<template>
    <div class="vipManage bBox">
        <!--<div>会员管理</div>-->
        <div class="headerCom">
            <span class="titleN">会员管理</span>
            <el-form ref="sizeForm" :model="sizeForm" label-width="80px" size="mini" class="form">
                <el-form-item label="姓名：" prop="name" class="item">
                    <el-input v-model="sizeForm.name" class="name"></el-input>
                </el-form-item>
                <el-form-item label="手机号：" prop="phone" class="item">
                    <el-input v-model="sizeForm.phone" class="phone"></el-input>
                </el-form-item>
                <el-form-item  prop="vipLevel" class="item noLabel">
                    <el-select v-model="sizeForm.vipLevel" placeholder="请选择会员级别">
                        <el-option label="普通会员" value="普通会员"></el-option>
                        <el-option label="高级会员" value="高级会员"></el-option>
                        <el-option label="金牌会员" value="金牌会员"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item  prop="sex" class="item noLabel">
                    <el-select v-model="sizeForm.sex" placeholder="请选择性别">
                        <el-option label="男" value="男"></el-option>
                        <el-option label="女" value="女"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="注册时间:" prop="valueDate" class="item">
                    <el-date-picker
                            v-model="sizeForm.valueDate"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item size="large" class="item noLabel buttonB">
                    <el-button @click="onSubmit" class="buttonS find">查询</el-button>
                    <el-button @click="resetForm('sizeForm')" class="buttonS">重置</el-button>
                    <el-button class="addVip buttonS"><router-link to="/vipManage/user/addUser" tag="div">添加会员</router-link></el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="tableCon">
            <el-table
                    :data="vipInfo"
                    style="width: 100%"
                    class="tableS"
                    :header-cell-style="{background:'#F3F4F5',color:'#1A1A1A'}"
                    max-height="250">
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="sex"
                        label="性别"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="dateBirth"
                        label="出生日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="numberAcc"
                        label="账号"
                        width="200">
                </el-table-column>
                <el-table-column
                        prop="vipLevel"
                        label="会员级别"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="dateReg"
                        label="注册时间"
                       min-width="150">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="200">
                    <template slot-scope="scope">
                        <el-button
                                @click.native.prevent="deleteRow(scope.$index, tableData4)"
                                type="text"
                                size="small">
                            移除
                        </el-button>
                        <el-button
                                type="text"
                                size="small">
                            <router-link to="/user/" tag="div">查看用户</router-link>
                        </el-button>
                        <el-button
                                type="text"
                                size="small">
                            提醒
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="block">
                <span class="demonstration">显示总数</span>
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page.sync="currentPage1"
                        :page-size="2"
                        layout="total, prev, pager, next"
                        :total="vipInfoTotal">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                currentPage1: 5,
                sizeForm: {
                    name: '',
                    phone:'',
                    vipLevel: '',
                    sex:'',
                    valueDate: '',
                },
                vipInfo: [{
                    name: '王小虎',
                    sex: '男',
                    dateBirth: '2018-09-10',
                    numberAcc:'1830287644',
                    vipLevel: '普通会员',
                    dateReg: '2016-05-03 14:13',
                },{
                    name: '木木',
                    sex: '女',
                    dateBirth: '2018-09-10',
                    numberAcc:'1830287644',
                    vipLevel: '普通会员',
                    dateReg: '2018-09-1014:13',
                },{
                    name: '王小虎',
                    sex: '男',
                    dateBirth: '2018-09-10',
                    numberAcc:'1830287644',
                    vipLevel: '普通会员',
                    dateReg: '2016-05-03 14:13',
                },{
                    name: '木木',
                    sex: '女',
                    dateBirth: '2018-09-10',
                    numberAcc:'1830287644',
                    vipLevel: '普通会员',
                    dateReg: '2018-09-1014:13',
                },{
                    name: '王小虎',
                    sex: '男',
                    dateBirth: '2018-09-10',
                    numberAcc:'1830287644',
                    vipLevel: '普通会员',
                    dateReg: '2016-05-03 14:13',
                },{
                    name: '木木',
                    sex: '女',
                    dateBirth: '2018-09-10',
                    numberAcc:'1830287644',
                    vipLevel: '普通会员',
                    dateReg: '2018-09-1014:13',
                },{
                    name: '王小虎',
                    sex: '男',
                    dateBirth: '2018-09-10',
                    numberAcc:'1830287644',
                    vipLevel: '普通会员',
                    dateReg: '2016-05-03 14:13',
                },{
                    name: '木木',
                    sex: '女',
                    dateBirth: '2018-09-10',
                    numberAcc:'1830287644',
                    vipLevel: '普通会员',
                    dateReg: '2018-09-1014:13',
                }],
                vipInfoTotal:'',
            };
        },
        //调用mounted生命周期钩子，执行获取数据getData()函数
        mounted:function () {
            console.log(this);
           this.getData()
        },
        methods: {
            getData(){
                console.log(this.vipInfo);
                this.vipInfoTotal=this.vipInfo.length;
                console.log(this.$ajax);
//                this.$ajax.post('http://sc.yunzhenshi.com/inquiry/service/clinic/professors').then(res=>{
//                    console.log(res)
//                })
                //创建请求时使用的方法,get('url',parasm,.then,.catch)
                this.$ajax.get(this.preUrl+'inquiry/service/clinic/professors', {
                    params: {                    //需要发送的数据
                        pageNum: 1,
                        pageSize: 2,
                    }
                })
                .then(function (response) {
                    console.log("返回数据")
                    console.log(response);

                })
                .catch(function (error) {
                    console.log(error);
                })
            },
            onSubmit() {
                console.log('submit!');
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            deleteRow(index, rows) {
                rows.splice(index, 1);
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
    };
</script>

<style scoped>
    .form{
         overflow: hidden;
        padding-left: 20px;
     }
    .item{
        display: block;
        float: left;
        line-height: 64px;
        margin-right: 30px;
    }
    /*.phone{}*/
    .name,.phone{
        width: 200px;
    }
    .noLabel{
        margin-left: -80px;
    }
    .buttonB{
        float: right;
        margin-top: -5px;
    }
    .buttonS{
        height: 32px;
        width: 88px;
        padding: 0;
        font-size: 14px;
        line-height: 32px;
    }
    .find{
        background: #2AB1E8;
        color: #fff;
    }
    .addVip{
        border:1px solid #2AB1E8;
        height: 30px;
        color: #2AB1E8;
        width: 86px;
        padding: 0;
        font-size: 14px;
        line-height: 30px;
    }
    .tableCon{
        margin:0 20px;
    }
    .tableCon .tableS{
        border:1px solid #B5B5B5;
    }
</style>
