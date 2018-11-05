<template>
    <div class="register">

        <el-card class="box-card">
            <el-form :model="registerForm" label-width="80px" status-icon ref="form" class="registerForm">
                <el-form-item label="用户名" prop="username" :rules="[required('用户名不能为空'),queryUsername()]">
                    <el-input type="text" v-model="registerForm.username" @change="queryUsername"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password" :rules="[required('密码不能为空')]">
                    <el-input type="password" v-model="registerForm.password"></el-input>
                </el-form-item>
                <el-form-item v-if="registerForm.password" label="确认密码" prop="repassword" :rules="[required('要确认密码的'),repass(registerForm.password)]">
                    <el-input type="repassword" v-model="registerForm.repassword"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email" :rules="[required('邮箱不能为空')]">
                    <el-input type="repassword" v-model="registerForm.email"></el-input>
                </el-form-item>
            </el-form>
            <el-button type="primary" @click="submit">注册</el-button>
        </el-card>
    </div>
</template>

<script>
// import pageHead from "../components/pageHead.vue";
// import { registerApi } from "../api";
import { afeiCheck } from "../util/asyncValidatMinix.js";
export default {
    mixins:[afeiCheck],
    data() {
        return {
            registerForm:{
                username:"",
                password:"",
                repassword:"",
                email:"",
            },
            hasUsername:false
        }
    },
    created(){
        console.log(process.env.NODE_ENV)
    },
    watch:{
        "registerForm.username":function(val) {
            
        }

        // selectUsername
    },
    methods:{
        submit(){
            this.$refs.form.validate(valid=>{
                // if(valid){
                //     this.axios.post("/free/register",this.registerForm).then(res=>{
                //         console.log(res)
                //     }).catch(err=>{
                //         console.log(err)
                //     })
    
                // }
            })
        },
        
    }

};
</script>

<style lang="scss">
.box-card {
    width: 480px;
    text-align: center;

    margin:100px auto;
    .registerForm{
        margin:20px;
    }
}
</style>
