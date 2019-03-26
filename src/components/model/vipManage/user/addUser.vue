<template>
    <div class="addUser bBox">
        <div class="headerCom">
            <el-breadcrumb separator-class="el-icon-arrow-right" class="titleN">
                <el-breadcrumb-item>会员管理</el-breadcrumb-item>
                <el-breadcrumb-item><span class="selChild">添加会员</span></el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="mainCom">
            <div class="conBox">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <div class="titleAinfo">
                        <span class="smTitle">基本信息</span>
                        <div class="info">
                            <el-form-item label="账号：" prop="numberAcc" class="item">
                                <el-input v-model="ruleForm.numberAcc" class="itemInput"></el-input>
                            </el-form-item>
                            <el-form-item label="姓名：" prop="name" class="item">
                                <el-input v-model="ruleForm.name" class="itemInput"></el-input>
                            </el-form-item>
                            <el-form-item label="出生日期：" prop="dateBirth" class="item">
                                <el-input v-model="ruleForm.dateBirth" class="itemInput"></el-input>
                            </el-form-item>
                            <el-form-item label="性别：" prop="sex" class="item">
                                <el-radio v-model="ruleForm.radio" label="male">男</el-radio>
                                <el-radio v-model="ruleForm.radio" label="female">女</el-radio>
                            </el-form-item>
                            <el-form-item label="职业：" prop="job" class="item">
                                <el-input v-model="ruleForm.job" class="itemInput" placeholder="请输入会员职业"></el-input>
                            </el-form-item>
                            <el-form-item label="婚恋状态：" prop="marriageState" class="item">
                                <el-select v-model="ruleForm.valueMs" placeholder="请选择">
                                    <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="家庭住址：" prop="marriageState" class="address">
                                <el-select
                                        v-model="addressSel.sheng"
                                        @change="choseProvince"
                                placeholder="省级地区">
                                <el-option
                                        v-for="item in province"
                                        :key="item.id"
                                        :label="item.value"
                                        :value="item.id">
                                </el-option>
                                </el-select>
                                <el-select
                                        v-model="addressSel.shi"
                                        @change="choseCity"
                                        placeholder="市级地区">
                                    <el-option
                                            v-for="item in shi1"
                                            :key="item.id"
                                            :label="item.value"
                                            :value="item.id">
                                    </el-option>
                                </el-select>
                                <el-select
                                        v-model="qu"
                                        @change="choseBlock"
                                        placeholder="区级地区">
                                    <el-option
                                            v-for="item in qu1"
                                            :key="item.id"
                                            :label="item.value"
                                            :value="item.id">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="titleAinfo">
                        <span class="smTitle">联系人信息</span>
                        <div class="info">
                            <el-form-item label="联系人姓名：" prop="contactName" class="item">
                                <el-input v-model="ruleForm.contactName" class="itemInput" placeholder="请输入联系人姓名"></el-input>
                            </el-form-item>
                            <el-form-item label="与本人关系：" prop="relationship" class="item">
                                <el-select v-model="ruleForm.relationship" placeholder="请选择关系">
                                    <el-option
                                            v-for="item in optionsGX"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="联系人电话：" prop="contactPhone" class="item">
                                <el-input v-model="ruleForm.contactPhone" class="itemInput" placeholder="请输入联系人手机号"></el-input>
                            </el-form-item>
                            <el-form-item label="联系人职业：" prop="contactJob" class="item">
                                <el-input v-model="ruleForm.contactJob" class="itemInput" placeholder="请输入联系人职业"></el-input>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="titleAinfo">
                        <span class="smTitle">会员级别</span>
                        <div class="info">
                            <el-form-item label="会员级别：" prop="vipLevel" class="">
                                <el-radio v-model="ruleForm.vipLevel" label="ordinary">普通会员</el-radio>
                                <el-radio v-model="ruleForm.vipLevel" label="senior">高级会员</el-radio>
                                <el-radio v-model="ruleForm.vipLevel" label="gold">金牌会员</el-radio>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="titleAinfo">
                        <span class="smTitle">病例信息</span>
                        <div class="info">
                            <el-form-item label="身高：" prop="stature" class="item">
                                <el-input v-model="ruleForm.stature" class="itemInput" placeholder="请输入身高"></el-input>CM
                            </el-form-item>
                            <el-form-item label="体重：" prop="avoirdupois" class="item">
                                <el-input v-model="ruleForm.avoirdupois" class="itemInput" placeholder="请输入体重"></el-input>KG
                            </el-form-item>
                            <el-form-item label="病史：" prop="type" class="bs">
                                <el-checkbox-group v-model="ruleForm.type" class="checkboxGroup">
                                    <el-checkbox label="高血压" name="type"></el-checkbox>
                                    <el-checkbox label="糖尿病" name="type"></el-checkbox>
                                    <el-checkbox label="胃溃疡" name="type"></el-checkbox>
                                    <el-checkbox label="肝硬化" name="type"></el-checkbox>
                                    <el-checkbox label="胆囊炎" name="type"></el-checkbox>
                                    <el-checkbox label="脑血栓" name="type"></el-checkbox>
                                    <el-checkbox label="其他" name="type" class="otherCheck tit"></el-checkbox>
                                    <el-input v-model="ruleForm.type.other" class="otherCheck item" placeholder="请输入疾病名称"></el-input>
                                </el-checkbox-group>
                            </el-form-item>
                            <el-form-item label="吸烟情况：" prop="smoke" class="item">
                                <el-input v-model="ruleForm.smoke"></el-input>
                            </el-form-item>
                            <el-form-item label="饮酒情况：" prop="wine" class="item">
                                <el-input v-model="ruleForm.wine"></el-input>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="titleAinfo">
                        <span class="smTitle">其他描述</span>
                        <div class="info">
                            <el-input type="textarea" v-model="ruleForm.desc" class="otherSymptom"  placeholder="不超过100字。例如患者近期健康动向"></el-input>
                        </div>
                    </div>
                    <el-form-item>
                        <el-button>取消</el-button>
                        <el-button type="primary" @click="onSubmit">确定</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import axios from 'axios'
    export default {
        data() {
            return {
                options: [{
                    valueMs: '选项1',
                    label: '未婚'
                }, {
                    valueMs: '选项2',
                    label: '已婚'
                }, {
                    valueMs: '选项3',
                    label: '离异'
                }],
                optionsGX:[{
                    relationship:'选项1',
                    label:'姐妹'
                },{
                    relationship:'选项2',
                    label:'兄弟'
                }],
                ruleForm: {
                    numberAcc:'',
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [{
                        other:''
                    },],
                    resource: '',
                    desc: '',
                    radio:'male',
                    vipLevel:'ordinary',
                    job:'',
                    valueMs:'',
                    relationship:'',
                },
                rules: {
                    name: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    region: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    date1: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    date2: [
                        { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                    ],
                    type: [
                        { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                    ],
                    resource: [
                        { required: true, message: '请选择活动资源', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请填写活动形式', trigger: 'blur' }
                    ]
                },
                addressSel:{

                }
            };

        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
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
        overflow: hidden;
        margin-bottom: 20px;
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
    .item .itemInput{
        width: 220px;
    }
    .address{
        display: block;
        width: 100%;
        overflow: hidden;
    }
    .bs{
        display: block;
        width: 100%;
        clear: both;
    }
    .otherCheck.tit{
        display: block;
        width: 70px;
        float: left;
        clear: left;
        margin: 20px 0 0 0;
    }
    .otherCheck.item{
        margin-top: 20px;
        float: left;
    }
    /*.checkboxGroup{*/
        /*display: block;*/
    /*}*/
</style>
