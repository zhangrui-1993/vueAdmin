<template>
    <div class="userDetil bBox">
        <div class="headerCom">
            <el-breadcrumb separator-class="el-icon-arrow-right" class="titleN">
                <el-breadcrumb-item>会员管理</el-breadcrumb-item>
                <el-breadcrumb-item><router-link to="" tag="div"><span class="selChild">用户详情</span></router-link></el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="mainCom">
            <div class="conBox">
                <!--<el-form :model="userDetilForm" :rules="rules" ref="userDetilForm" label-width="100px" class="demo-userDetilForm">-->
                    <div class="titleAinfo">
                        <span class="smTitle">基本信息</span>
                        <div class="info">
                            <span><label>账号：</label><span>183930038766</span></span>
                            <span><label>账号：</label><span>183930038766</span></span>
                        </div>
                    </div>
                    <div class="titleAinfo">
                        <span class="smTitle">会员级别</span>
                        <div class="info">
                            <span><label>账号：</label><span>183930038766</span></span>
                            <span><label>账号：</label><span>183930038766</span></span>
                        </div>
                    </div>

                    <div class="titleAinfo">
                        <span class="smTitle">病例信息</span>
                        <div class="info">
                            <span><label>账号：</label><span>183930038766</span></span>
                            <span><label>账号：</label><span>183930038766</span></span>
                        </div>
                    </div>
                    <div class="titleAinfo">
                        <span class="smTitle">历史测量</span>
                        <div class="info">
                            <el-form ref="oldMeasure" :model="oldMeasure" label-width="80px" size="mini" class="form">
                                <!--<div class="block">-->
                                    <span @click="week" class="rangeDate">最近一周</span>
                                    <span @click="month" class="rangeDate">最近一个月</span>
                                    <span class="rangeDate">全部</span>
                                    <el-form-item  prop="value5"  label="注册时间:"  class="demonstration">
                                        <el-date-picker
                                                v-model="oldMeasure.value5"
                                                type="datetimerange"
                                                range-separator="至"
                                                start-placeholder="开始日期"
                                                end-placeholder="结束日期"
                                                align="right">
                                        </el-date-picker>
                                    </el-form-item>
                                <!--</div>-->
                                <el-form-item size="large" class="item noLabel buttonB">
                                    <el-button @click="onSubmit" class="buttonS find">查询</el-button>
                                    <el-button @click="resetForm('oldMeasure')" class="buttonS">清空</el-button>
                                </el-form-item>
                            </el-form>
                            <div id="myOldMeasure" style=600px;height:600px;></div>
                        </div>
                        <div class="info" style="margin-top: 140px">
                            <el-table
                                    :data="tableData4"
                                    style="width: 100%"
                                    class="tableS"
                                    :header-cell-style="{background:'#F3F4F5',color:'#1A1A1A'}"
                                    max-height="800">
                                <el-table-column
                                        prop="measureTime"
                                        label="时间"
                                        min-width="200">
                                </el-table-column>
                                <el-table-column
                                        prop="sysPressure"
                                        label="收缩压(mmHg)"
                                        width="160">
                                </el-table-column>
                                <el-table-column
                                        prop="diaPressure"
                                        label="舒张压(mmHg)"
                                        width="160">
                                </el-table-column>
                                <el-table-column
                                        prop="heartRate"
                                        label="心率(次)"
                                        width="160">
                                </el-table-column>
                                <el-table-column
                                        prop="bloodState"
                                        label="血压水平"
                                        width="150">
                                </el-table-column>
                                <el-table-column
                                        prop="remindState"
                                        label="提醒状态"
                                        width="150">
                                </el-table-column>

                                <el-table-column
                                        fixed="right"
                                        label="操作"
                                        width="150">
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
                <!--</el-form>-->
                <div class="titleAinfo">
                    <span class="smTitle">手动提醒记录</span>
                    <div class="info">
                        <el-table
                                :data="tableData5"
                                style="width: 100%"
                                class="tableS"
                                :header-cell-style="{background:'#F3F4F5',color:'#1A1A1A'}"
                                max-height="800">
                            <el-table-column
                                    prop="pushTime"
                                    label="推送时间"
                                    min-width="150">
                            </el-table-column>
                            <el-table-column
                                    prop="pushName"
                                    label="推送人员"
                                    min-width="120">
                            </el-table-column>
                            <el-table-column
                                    fixed="right"
                                    label="操作"
                                    width="200">
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
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import axios from 'axios';
    import echarts from 'echarts';
    export default {
        data() {
            return {
                oldMeasure:{
                    value5:''
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
                }],
                tableData5:[{
                    pushTime:'2016-05-03 14:13',
                    pushName:'呆呆',
                },{
                    pushTime:'2016-05-03 14:13',
                    pushName:'小红',
                },{
                    pushTime:'2016-05-03 14:13',
                    pushName:'李白',
                },{
                    pushTime:'2016-05-03 14:13',
                    pushName:'庄周',
                },{
                    pushTime:'2016-05-03 14:13',
                    pushName:'妲己',
                },{
                    pushTime:'2016-05-03 14:13',
                    pushName:'后裔',
                }],

            };

        },
        mounted () {
            /*ECharts图表*/
            var myChart = echarts.init(document.getElementById('myOldMeasure'));
            myChart.setOption({
                title: {
                    text: '血压：mmHg\n心率：次'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data:['舒张压','收缩压','心率']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
//                        restore:{},
                        saveAsImage: {},
//                        magicType:{type:['line','tiled']}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一','周二','周三','周四','周五','周六','周日']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name:'舒张压',
                        type:'line',
                        data:[120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name:'收缩压',
                        type:'line',
//                        stack: '总量',//数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加
                        data:[220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name:'心率',
                        type:'line',
//                        stack: '总量',
                        data:[150, 232, 201, 154, 190, 330, 410]
                    }]
            })

        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            resetForm(formName) {
                console.log(formName)
                console.log(this.$refs[formName].resetFields())
                this.$refs[formName].resetFields();
            },
            week:function(){
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                this.oldMeasure.value5 = [new Date(start), new Date(end)];
            },
            month:function () {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                this.oldMeasure.value5 = [new Date(start), new Date(end)];
            }
        }
    }
</script>

<style scoped>
    .titleN{
        color: #1A1A1A;
        font-size: 16px;
    }
    .titleN .selChild{
        color: #2AB1E8;
    }
    .titleAinfo{
        /*overflow: hidden;*/
        padding: 20px 0;
        border-bottom: 1px solid #B5B5B5;
    }
    .smTitle{
        display: block;
        height:22px;
        line-height: 22px;
        margin-bottom: 14px;
        font-size: 16px;
        color: #1A1A1A;
        font-weight: bold;
    }
    .item{
        display: block;
        width: 350px;
        height:40px;
        float: left;
    }
    .demonstration{
        display: inline-block;
    }
    .buttonB{
        display: inline-block;
        float: right;
    }
</style>
