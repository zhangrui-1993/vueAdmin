<template>
    <div class="activity bBox">
        <!--<div>会员管理</div>-->
        <div class="headerCom">
            <span class="titleN">优惠活动</span>
            <el-form ref="activityForm" :model="activityForm" label-width="80px" size="mini" class="form">
                <el-form-item label="活动名称:" prop="name" class="item">
                    <el-input v-model="activityForm.name" class="name" placeholder="请输入活动名称"></el-input>
                </el-form-item>
                <el-form-item  prop="vipLevel" class="item noLabel">
                    <el-select v-model="activityForm.vipLevel" placeholder="请选择会员级别">
                        <el-option label="普通会员" value="普通会员"></el-option>
                        <el-option label="高级会员" value="高级会员"></el-option>
                        <el-option label="金牌会员" value="金牌会员"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item  prop="activityState" class="item noLabel">
                    <el-select v-model="activityForm.activityState" placeholder="请选择活动状态">
                        <el-option label="进行中" value="进行中"></el-option>
                        <el-option label="未开启" value="未开启"></el-option>
                        <el-option label="已结束" value="已结束"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="创建时间:" prop="createTime" class="item">
                    <el-date-picker
                            v-model="activityForm.createTime"
                            type="datetimerange"
                            range-separator="-"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期" class="timeW">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="活动时间:" prop="activityTime" class="item">
                    <el-date-picker
                            v-model="activityForm.activityTime"
                            type="datetimerange"
                            range-separator="-"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期" class="timeW">
                    </el-date-picker>
                </el-form-item>
                <el-form-item size="large" class="item noLabel buttonB">
                    <el-button @click="onSubmit" class="buttonS find">查询</el-button>
                    <el-button @click="resetForm('activityForm')" class="buttonS">重置</el-button>
                    <el-button class="addVip buttonS"><router-link to="/new" tag="div">新增活动</router-link></el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="tableCon">
            <el-table
                    :data="tableData4"
                    style="width: 100%"
                    class="tableS"
                    :header-cell-style="{background:'#F3F4F5',color:'#1A1A1A'}"
                    max-height="250">
                <el-table-column
                        prop="createTime"
                        label="创建时间"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="活动名称"
                        width="200">
                </el-table-column>
                <el-table-column
                        prop="vipLevel"
                        label="会员级别"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="sendTime"
                        label="推送时间"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="endTime"
                        label="结束时间"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="activityState"
                        label="活动状态"
                        min-width="150">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="160">
                    <template slot-scope="scope">
                        <el-button
                                @click.native.prevent="deleteRow(scope.$index, tableData4)"
                                type="text"
                                size="small">
                            移除
                        </el-button>
                        <el-button
                                @click.native.prevent="deleteRow(scope.$index, tableData4)"
                                type="text"
                                size="small">
                            查看用户
                        </el-button>
                        <el-button
                                @click.native.prevent="deleteRow(scope.$index, tableData4)"
                                type="text"
                                size="small">
                            提醒
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
//                value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
                activityForm: {
                    name: '',
                    phone:'',
                    vipLevel: '',
                    sex:'',
                    valueDate: '',
                    createTime:[new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
                },
                tableData4: [{
                    createTime: '2016-05-03 14:13',
                    name: '国庆节满百送20元代金券',
                    vipLevel: '普通',
                    sendTime: '2018-09-10 15:57',
                    endTime:'2018-10-19 12:23',
                    activityState: '进行中',
                },{
                    createTime: '2016-05-03 14:13',
                    name: '国庆节满百送20元代金券',
                    vipLevel: '高级',
                    sendTime: '2018-09-10 15:57',
                    endTime:'2018-10-19 12:23',
                    activityState: '未开启',
                },{
                    createTime: '2016-05-03 14:13',
                    name: '国庆节满百送20元代金券',
                    vipLevel: '普通会员',
                    sendTime: '2018-09-10 15:57',
                    endTime:'2018-10-19 12:23',
                    activityState: '已结束',
                },{
                    createTime: '2016-05-03 14:13',
                    name: '国庆节满百送20元代金券',
                    vipLevel: '普通会员',
                    sendTime: '2018-09-10 15:57',
                    endTime:'2018-10-19 12:23',
                    activityState: '进行中',
                }]
            };
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            deleteRow(index, rows) {
                rows.splice(index, 1);
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
    .timeW{
        width: 330px;
        height: 28px;
        line-height:40px;
    }
</style>

