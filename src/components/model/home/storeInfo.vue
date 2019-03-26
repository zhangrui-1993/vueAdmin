<template>
    <!--<div>门店信息</div>-->
    <div class="storeInfo bBox">
        <div class="headerCom">
            <!--<span class="titleN">门店信息</span>-->
            <el-form ref="storeForm" :model="storeForm" size="mini" class="form">
                <div class="inputB">
                    <input type="text" placeholder="请输入姓名/手机号/门店名称">
                </div>
                <el-button class="search">查询</el-button>
            </el-form>
        </div>
        <div class="info">
            <div class="tableCon">
                <el-table
                        :data="tableData4"
                        style="width: 100%;border: 1px solid #ebeef5"
                        class="tableS"
                        :header-cell-style="{background:'#F3F4F5',color:'#1A1A1A'}"
                        max-height="250">
                    <el-table-column
                            prop="apellationName"
                            label="机构名称"
                            style="width:50%;" >
                    </el-table-column>
                    <el-table-column
                            prop="mainNumberAcc"
                            label="主账号"
                            style="width:25%">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="姓名"
                            style="width:25%">
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                storeForm: {
                    name:'',
                },
                tableData4: [{
                    apellationName: '致医健康连锁药房（亦庄店）',
                    mainNumberAcc: '1830287644',
                    name: '呆呆',
                },{
                    apellationName: '致医健康连锁药房（青年路店）',
                    mainNumberAcc: '1830287644',
                    name: '木木店长',
                },{
                    apellationName: '致医健康连锁药房（亦庄店）',
                    mainNumberAcc: '1830287644',
                    name: '呆呆',
                }]
            }
        }
    }
</script>

<style scoped>
    .inputB{
        padding: 10px;
        border: 1px solid #E5E5E5;
        width: 530px;
        border-radius: 4px;
        background: #fff;
        margin: 0 0 0 20px;
        float: left;
    }
    .inputB input{
        border: none;
        width: 500px;
        margin-left: 10px;
    }
    .headerCom{
        overflow: hidden;
        height: 40px;
        box-sizing: content-box;
        padding: 20px;
    }
    .search{
        float: right;
        margin-right: 60px;
        background: #2AB1E8;
        height:32px;
        line-height: 32px;
        width: 65px;
        border-radius: 4px;
        color: #fff;
        padding: 0px;
    }
    .form{
        padding:0 20px;
    }
</style>
<style>
    .el-table__header .cell,.el-table__body .cell{
        padding-left: 50px;
    }
    .search span{
        font-size: 14px;
    }
</style>
