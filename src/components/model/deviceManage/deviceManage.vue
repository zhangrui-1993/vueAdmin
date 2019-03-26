<template>
    <!--<div>设备管理</div>-->
    <div class="deviceM bBox">
        <div class="headerCom">
            <!--<span class="titleN">设备管理</span>-->
            <el-form ref="deviceForm" :model="deviceForm" size="mini" class="form" >
                <el-form-item label="登记人姓名：" prop="name" class="itemB" label-width="100px">
                    <el-input v-model="deviceForm.name" class="name item"  placeholder="请输入登记人姓名"></el-input>
                </el-form-item>
                <el-form-item  prop="activityState" class="item noLabel">
                    <el-select v-model="deviceForm.activityState" placeholder="请选择活动状态" class="item">
                        <el-option label="进行中" value="进行中"></el-option>
                        <el-option label="未开启" value="未开启"></el-option>
                        <el-option label="已结束" value="已结束"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item size="large" class="item noLabel buttonB">
                    <el-button @click="resetForm('deviceForm')" class="buttonS">重置</el-button>
                    <el-button @click="onSubmit" class="buttonS search">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="info">
            <div class="tableCon">
                <el-table
                        :data="tableData4"
                        style="width: 100%;border: 1px solid #ebeef5"
                        class="tableS"
                        :gutter="0"
                        :header-cell-style="{background:'#F3F4F5',color:'#1A1A1A'}"
                        max-height="500px">
                    <el-table-column
                            prop="orderNumber"
                            label="序号"
                            min-width="100px"
                            style="width:50px;padding-left: 50px" >
                    </el-table-column>
                    <el-table-column
                            prop="deviceName"
                            label="设备名称"
                            min-width="120px"
                            style="width:50px;padding-left: 50px" >
                    </el-table-column>
                    <el-table-column
                            prop="brand"
                            label="品牌"
                            min-width="120px"
                            style="width:50px;padding-left: 50px" >
                    </el-table-column>
                    <el-table-column
                            prop="xhModel"
                            label="型号"
                            min-width="100px"
                            style="width:50px;padding-left: 50px" >
                    </el-table-column>
                    <el-table-column
                            prop="useState"
                            label="主账号"
                            min-width="120px"
                            style="width:50px;padding-left: 50px">
                    </el-table-column>
                    <el-table-column
                            prop="registrant"
                            label="登记人"
                            min-width="120px"
                            style="width:50px;padding-left: 50px">
                    </el-table-column>
                    <el-table-column
                            prop="djTime"
                            label="登记日期"
                            min-width="220px"
                            style="padding-left: 50px">
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
                deviceForm: {
                    name:'',
                    activityState:'',
                },
                tableData4: [{
                    orderNumber: '2',
                    deviceName: '血压计',
                    brand: '致医健康',
                    xhModel: '18',
                    useState: '正常',
                    registrant: '呆呆',
                    djTime: '2018.09.10 13:01:01',
                },{
                    orderNumber: '1',
                    deviceName: '血压计',
                    brand: '致医健康',
                    xhModel: '128',
                    useState: '正常',
                    registrant: '呆呆',
                    djTime: '2018.09.10 13:01:01',
                },{
                    orderNumber: '2',
                    deviceName: '血压计',
                    brand: '致医健康',
                    xhModel: '18',
                    useState: '正常',
                    registrant: '呆呆',
                    djTime: '2018.09.10 13:01:01',
                }]
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }

    }
</script>

<style scoped>
    .form{
        padding: 20px;
    }
    .itemB{
        overflow: hidden;
        float: left;
        margin-right: 35px;
    }
    .item{
        width: 220px;
        float: left;
    }
    .headerCom{
        overflow: hidden;
        line-height: 40px;
        padding: 20px 0;
    }
    .buttonB{
        float: right;
    }
    .buttonS{
        float: right;
        margin-right: 60px;
        background: #fff;
        height:32px;
        line-height: 32px;
        width: 65px;
        border-radius: 4px;
        color: #666;
        padding: 0px;
        border: 1px solid rgba(0,0,0,0.15);
    }
    .buttonS.search{
        float: right;
        margin-right: 10px;
        background: #2AB1E8;
        height:32px;
        line-height: 32px;
        width: 65px;
        border-radius: 4px;
        color: #fff;
        padding: 0px;
        border: 1px solid #2AB1E8;
    }
</style>
<style>
    .el-table__header .cell,.el-table__body .cell{
        padding-left: 50px;
    }
    .search span{
        font-size: 14px;
    }
    .gutter{
        width: 0px;
    }
</style>
