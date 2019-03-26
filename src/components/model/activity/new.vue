<template>
    <div class="newActivity bBox">
        <div class="headerCom">
            <el-breadcrumb separator-class="el-icon-arrow-right" class="titleN">
                <el-breadcrumb-item>会员管理</el-breadcrumb-item>
                <el-breadcrumb-item><router-link to="" tag="div"><span class="selChild">新增活动</span></router-link></el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="mainCom">
            <div class="conBox">
                <el-form :model="newActivityForm" :rules="rules" ref="newActivityForm" label-width="100px" class="demo-newActivityForm">
                    <div class="titleAinfo">
                        <span class="smTitle">活动基本信息</span>
                        <div class="info">
                            <el-form-item label="活动名称：" prop="activityName" class="itemB">
                                <el-input v-model="newActivityForm.activityName" class="itemInput"></el-input>
                            </el-form-item>
                            <el-form-item label="上传照片：" prop="uploadPhotos" class="itemB">
                                <el-upload
                                        action="https://jsonplaceholder.typicode.com/posts/"
                                        list-type="picture-card"
                                        :on-preview="handlePictureCardPreview"
                                        :on-remove="handleRemove">
                                    <i class="el-icon-plus"></i>
                                </el-upload>
                                <el-dialog :visible.sync="dialogVisible">
                                    <img width="100%" :src="dialogImageUrl" alt="">
                                </el-dialog>
                                <!--<el-input v-model="newActivityForm.uploadPhotos" class="itemInput"></el-input>-->
                            </el-form-item>
                            <el-form-item label="商品链接：" prop="dateBirth" class="itemB">
                                <el-input v-model="newActivityForm.dateBirth" class="itemInput"  placeholder="请输入活动链接"></el-input>
                            </el-form-item>
                            <el-form-item label="活动说明：" prop="job" class="itemB">
                                <el-input type="textarea" v-model="newActivityForm.desc" class="otherSymptom"  placeholder="请填写活动说明"></el-input>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="titleAinfo">
                        <span class="smTitle">推送要求</span>
                        <div class="info">
                            <el-form-item label="推送方式：" prop="sex" class="itemB">
                                <el-radio v-model="newActivityForm.radio" label="male">微信</el-radio>
                                <el-radio v-model="newActivityForm.radio" label="female">短信</el-radio>
                            </el-form-item>
                            <el-form-item label="推送时间:" prop="valueDate" class="itemB">
                                <el-date-picker
                                        v-model="newActivityForm.valueDate"
                                        type="datetimerange"
                                        range-separator="-"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期">
                                </el-date-picker>
                                <label>推送时间为活动开始时间</label>
                            </el-form-item>
                        </div>
                    </div>

                    <div class="titleAinfo">
                        <span class="smTitle">用户群体</span>
                        <div class="info">
                            <el-form-item label="会员级别：" prop="type" class="bs">
                                <el-checkbox-group v-model="newActivityForm.type" class="checkboxGroup">
                                    <el-checkbox label="全部" name="type"></el-checkbox>
                                    <el-checkbox label="普通会员" name="type"></el-checkbox>
                                    <el-checkbox label="高级会员" name="type"></el-checkbox>
                                    <el-checkbox label="金牌会员" name="type"></el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                            <el-form-item label="会员性别：" prop="type" class="bs">
                                <el-checkbox-group v-model="newActivityForm.type" class="checkboxGroup">
                                    <el-checkbox label="全部" name="type"></el-checkbox>
                                    <el-checkbox label="男" name="type"></el-checkbox>
                                    <el-checkbox label="女" name="type"></el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                            <el-form-item label="会员年龄：" prop="type" class="bs">
                                <el-checkbox-group v-model="newActivityForm.type" class="checkboxGroup">
                                    <el-checkbox label="全部" name="type"></el-checkbox>
                                    <el-checkbox label="80岁以上" name="type"></el-checkbox>
                                    <el-checkbox label="70-79岁" name="type"></el-checkbox>
                                    <el-checkbox label="60-69岁" name="type"></el-checkbox>
                                    <el-checkbox label="50-59岁" name="type"></el-checkbox>
                                    <el-checkbox label="40-49岁" name="type"></el-checkbox>
                                    <el-checkbox label="30-39岁" name="type"></el-checkbox>
                                    <el-checkbox label="30岁以下" name="type"></el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                            <el-form-item label="血压级别：" prop="type" class="bs">
                                <el-checkbox-group v-model="newActivityForm.type" class="checkboxGroup">
                                    <el-checkbox label="全部" name="type"></el-checkbox>
                                    <el-checkbox label="重度高血压" name="type"></el-checkbox>
                                    <el-checkbox label="中度高血压" name="type"></el-checkbox>
                                    <el-checkbox label="轻微高血压" name="type"></el-checkbox>
                                    <el-checkbox label="正常偏高" name="type"></el-checkbox>
                                    <el-checkbox label="正常血压" name="type"></el-checkbox>
                                    <el-checkbox label="低血压" name="type"></el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
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
                newActivityForm: {
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
                    activityName: [
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

                },
                 dialogImageUrl: '',
                 dialogVisible: false
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
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
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
