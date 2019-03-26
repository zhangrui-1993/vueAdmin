<template>
    <div>
        <el-container>
            <!--<el-header class="content-wrap" type="flex">-->
                <el-row type="flex" class="row-bg content-wrap">
                    <el-col :span="4">
                        <dl class="grid-content">
                            <dt>150</dt>
                            <dd>会员总数（人）</dd>
                        </dl>
                    </el-col>
                    <el-col :span="4">
                        <dl class="grid-content">
                            <dt>150</dt>
                            <dd>今日新增（人）</dd>
                        </dl>
                    </el-col>
                    <el-col :span="4">
                        <dl class="grid-content">
                            <dt>150</dt>
                            <dd>今日测量总人数（人）</dd>
                        </dl>
                    </el-col>
                    <el-col :span="4">
                        <dl class="grid-content">
                            <dt>150</dt>
                            <dd>今日测量总次数（人）</dd>
                        </dl>
                    </el-col>
                    <el-col :span="4">
                        <dl class="grid-content">
                            <dt>150</dt>
                            <dd>今日偏高（人）</dd>
                        </dl>
                    </el-col>
                    <el-col :span="4">
                        <dl class="grid-content">
                            <dt>150</dt>
                            <dd>今日偏低（人）</dd>
                        </dl>
                    </el-col>
                </el-row>
            <!--</el-header>-->

        </el-container>
        <el-container>
            <el-main class="main">
                <div class="heard">
                    <span>今日测量</span>
                    <span class="date">2018年09月10日 星期一</span>
                </div>
                <!--<el-row>-->
                    <!--<el-col :span="12" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">-->
                        <!--<el-card :body-style="{ padding: '0px' }">-->
                            <!--<img src="~examples/assets/images/hamburger.png" class="image">-->
                            <!--<div style="padding: 14px;">-->
                                <!--<span>好吃的汉堡</span>-->
                                <!--<div class="bottom clearfix">-->
                                    <!--<time class="time">{{ currentDate }}</time>-->
                                    <!--<el-button type="text" class="button">操作按钮</el-button>-->
                                <!--</div>-->
                            <!--</div>-->
                        <!--</el-card>-->
                    <!--</el-col>-->
                <!--</el-row>-->
                <el-row :gutter="20">
                    <el-col :sm="24" :md="12" class="clCard">
                        <el-card class="cardBox">
                            <img src="../../../assets/title.png" class="image">
                            <div class="clResult">
                                <div class="xyS"><span class="name">月月</span><span class="sex">男 36岁</span><span class="xyState mgxy">轻微高血压</span></div>
                                <div class="xyData"><span class="gy xyB">收缩压：<span>140mmHg</span></span><span class="dy xyB">舒张压：<span>90mmHg</span></span></div>
                            </div>
                            <button type="text" class="button" :md="4">查看提醒</button>
                        </el-card>
                    </el-col>
                    <el-col  :sm="24" :md="12" class="clCard">
                        <el-card class="cardBox">
                            <img src="../../../assets/title.png" class="image">
                            <div class="clResult">
                                <div class="xyS"><span class="name">月月</span><span class="sex">男 36岁</span><span class="xyState zcxy">正常血压</span></div>
                                <div class="xyData"><span class="gy xyB">收缩压：<span>140mmHg</span></span><span class="dy xyB">舒张压：<span>90mmHg</span></span></div>
                            </div>
                            <button type="text" class="button" :md="4">查看提醒</button>
                        </el-card>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>

    </div>
</template>

<script type="text/ecmascript-6">
    export default{};
</script>

<style scoped>
    .content-wrap{
        width: 100%;
        padding:20px 40px;
        background: #F5F9FB;
        height: 100px;
    }
    dl.grid-content dt{
        height:40px;
        line-height: 40px;
        font-size: 24px;
        color: #2AB1E8;
    }
    dl.grid-content dd{
        color: #666;
        font-size: 14px;
        height:20px;
        line-height: 20px;
     }
    .el-col:first-child dl.grid-content dt{
        color: #1A1A1A;
    }
    .main{
        margin: 20px;
        background: #F5F9FB;
        width: 100%;
        overflow: hidden;
    }
    .main .heard{
        margin-bottom: 20px;
    }
    .clCard{
        margin-bottom: 20px;
        overflow: hidden;
    }
    .cardBox{
        min-height:76px;
        padding-bottom: 20px;
    }
    .clCard .button{
        width: 20%;
        float: right;
        border: none;
        color: #fff;
        border-radius: 4px;
        text-align: center;
        font-size: 14px;
        height: 32px;
        line-height: 32px;
        background: #2AB1E8;
        margin: 20px 0;
    }
    .clCard .clResult{
        float: left;
        width: 60%;
        height: 72px;
        line-height: 36px;
    }
    .clCard .clResult .xyS{
        height:36px;
        line-height:36px;
        border-bottom: 1px solid #B5B5B5;
    }
    .clCard .image{
        float: left;
        width: 20%;
        max-width: 58px;
        max-height:58px;
        border-radius: 29px;
        margin-top: 7px;
        margin-right: 20px;
    }
    .clCard .clResult .xyS .name{
        font-size: 20px;
        color: #333;
        max-width: 30%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        float: left;
        display: block;
    }
    .clCard .clResult .xyS .sex{
        color: #666;
        font-size: 14px;
        width: 20%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        float: left;
        display: block;
        padding-left: 10px;
    }
    .clCard .clResult .xyS .xyState{
        font-size: 18px;
        width: 40%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        float: right;
        display: block;
    }
    .clCard .clResult .xyData .xyB{
        display: block;
        float: left;
        color: #666;
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .clCard .clResult .xyData .gy{
        width: 60%;
    }
    .clCard .clResult .xyData .dy{
        width: 40%;
    }
    .clCard .clResult .xyData .xyB span{
        color: #2AB1E8;
    }
    .xyS .zcxy{
        color: #0BC273;
    }
    .xyS .mgxy{
        color: #F5A623;
    }
    .xyS .xlgxy{
        color: #EF4D43;
    }
    .xyS .lcxy{
        color: #FE8F88;
    }
</style>
