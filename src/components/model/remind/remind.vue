<template>
    <div class="remind bBox">
        <!--<div>跟踪提醒</div>-->
        <div class="headerCom">
            <span class="titleN">跟踪提醒</span>
            <el-form ref="sizeForm" :model="remind" label-width="100px" size="mini" class="form">
                <el-form-item label="请输入姓名：" prop="name" class="item">
                    <el-input v-model="remind.name" class="name"></el-input>
                </el-form-item>
                <el-form-item  prop="vipLevel" class="item noLabel">
                    <el-select v-model="remind.vipLevel" placeholder="请选择血压水平">
                        <el-option label="普通会员" value="普通会员"></el-option>
                        <el-option label="高级会员" value="高级会员"></el-option>
                        <el-option label="金牌会员" value="金牌会员"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item  prop="bloodState" class="item noLabel">
                    <el-select v-model="remind.sex" placeholder="请选择提醒状态">
                        <el-option label="男" value="男"></el-option>
                        <el-option label="女" value="女"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="relationship" class="item">
                    <el-select v-model="remind.relationship" placeholder="请选择未测量天数">
                        <el-option
                                v-for="item in optionsCLTS"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="测量时间:" prop="valueDate" class="item">
                    <el-date-picker
                            v-model="remind.valueDate"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item size="large" class="item noLabel buttonB">
                    <el-button @click="onSubmit" class="buttonS find">查询</el-button>
                    <el-button @click="resetForm('remind')" class="buttonS">清空</el-button>
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
                        prop="measureTime"
                        label="测量时间"
                        min-width="150">
                </el-table-column>
                <el-table-column
                        prop="sysPressure"
                        label="收缩压(mmHg)"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="diaPressure"
                        label="舒张压(mmHg)"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="heartRate"
                        label="心率(次)"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="bloodState"
                        label="血压水平"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="remindState"
                        label="提醒状态"
                        width="180">
                </el-table-column>

                <el-table-column
                        fixed="right"
                        label="操作"
                        width="100">
                    <template slot-scope="scope">
                        <el-button
                                type="text"
                                size="small">
                            查看提醒
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
                remind: {
                    name: '',
                    phone:'',
                    vipLevel: '',
                    sex:'',
                    valueDate: '',
                },
                tableData4: [{
                    name: '王小虎',
                    sex: '男',
                    dateBirth: '2018-09-10',
                    measureTime:'2016-05-03 14:13',
                    sysPressure:'120',
                    diaPressure:'80',
                    heartRate:'60',
                    bloodState:'正常血压',
                    remindState:'未提醒',
                },{
                    name: '木木',
                    sex: '女',
                    dateBirth: '2018-09-10',
                    measureTime:'2016-05-03 14:13',
                    sysPressure:'120',
                    diaPressure:'80',
                    heartRate:'60',
                    bloodState:'中度高血压',
                    remindState:'已提醒',
                },{
                    name: '槑',
                    sex: '女',
                    dateBirth: '2018-09-10',
                    measureTime:'2016-05-03 14:13',
                    sysPressure:'120',
                    diaPressure:'80',
                    heartRate:'60',
                    bloodState:'中度高血压',
                    remindState:'已提醒',
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

