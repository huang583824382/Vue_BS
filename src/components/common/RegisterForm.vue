<template>
  <div>
    <el-dialog
      title="注册"
      :visible.sync="RegFormVisible"
      @close="clear"
      append-to-body>
      <el-form :model="form">
        <el-form-item label="用户名" >
          <el-input v-model="form.username"/>
        </el-form-item>
        <el-form-item label="邮箱" >
          <el-input @change="checkemail" v-model="form.mail"/><p>{{mailstate}}</p>
        </el-form-item>
        <el-form-item label="密码">
          <el-input @change="checkpassword" show-password v-model="form.password"/>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input @change="checkpassword" show-password v-model="cpassword"/>
          <p>{{passwordstate}}</p>
        </el-form-item>
        <el-form-item >
          <el-button @click="postregister" type="primary" style="width: 100%; margin-top: 20px" >注册</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",
  data(){
    return{
      mailstate:"",
      cpassword:"",
      passwordstate:"",
      form: {
        username:null,
        mail:null,
        password:null
      },
      RegFormVisible:false
    }
  },
  methods:{
    clear(){
      this.mailstate=""
      this.cpassword=""
      this.passwordstate=""
      this.form.password=""
      this.form.username=""
      this.form.password=""
    },
    checkemail(){
      var verify = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
        if (!verify.test(this.form.mail)) {
          this.mailstate=this.form.mail+"  fail"
        }
        else{
          this.mailstate="success!"
        }
    },
    checkpassword(){
      if(this.cpassword!=this.form.password){
        this.passwordstate="密码不一致"
      }
      else{
        this.passwordstate=""
      }
    },
    postregister(){
      this.$axios
          .post('/register',{
            username:this.form.username,
            password:this.form.password,
            email:this.form.mail,
          })
          .then(Response=>{
            if(Response.data.code==='200'){
              alert("注册成功！")
              this.RegFormVisible=false
              this.$router.replace({path:'/login'})
            }
            else{
              alert(Response.data.msg)
              this.clear()
            }
          })
    },
  }

}
</script>

<style scoped>

</style>