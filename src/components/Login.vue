<template>
  <body id="poster">

    <el-form class="login-container" label-position="left" label-width="=0px">
      <h3 class="login_title">登录</h3>
      <el-form-item>
        <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="账号"/>
      </el-form-item>
      <el-form-item>
        <el-input type="text" show-password v-model="loginForm.password" auto-complete="off" placeholder="密码"/>
      </el-form-item>
      <el-form-item style="width:100%">
        <el-button icon="el-icon-thumb" type="primary" style="width: 100%; border: 2px solid #eaeaea" v-on:click="login">
          登录
        </el-button>
      </el-form-item>
      <el-form-item style="width:100%">
        <el-button plain style="width: 100%; border: 2px solid #eaeaea" v-on:click="showRegister">
          注册
        </el-button>
      </el-form-item>

    </el-form>
    <RegisterForm ref="Register"></RegisterForm>
  </body>
</template>

<script>
import RegisterForm from "@/components/common/RegisterForm";
export default {

  name: "Login",
  components: {RegisterForm},
  data(){
    return{
      loginForm:{
        username:'',
        password:'',
      },
      responseResult: [],
    }
  },
  methods:{
    login(){
      this.$axios
        .post('/login',{
          username:this.loginForm.username,
          password:this.loginForm.password
        })
        .then(Response=>{
          if(Response.data.code==='200'){
            this.$notify({
              title: '登陆成功',
              message: '',
              type: 'success'
            });
            this.$router.replace({path:'/index'})
          }
          else{
            alert('Wrong username or password!')
          }
        })
    },
    showRegister(){
      this.$refs.Register.RegFormVisible=true
    }
  }
}
</script>

<style>
  .login-container{
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 30px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .login_title{
    margin: 0px auto 35px auto;
    text-align: center;
    color: #505458;
  }
  #poster{
    background: url("../assets/login-background.jpg") no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
  body{
    margin: 0px;
  }
</style>