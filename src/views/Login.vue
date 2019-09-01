<template>
  <div class="login">
    <div class="container">
      <img class="avatar" src="../assets/6.jpg" alt />
      <el-form :model="loginForm" :rules="rules" ref="loginForm" class="loginForm">
        <el-form-item label prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="请输入用户名"
            prefix-icon="iconfont icon-user"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label prop="password">
          <el-input
            type="password"
            v-model="loginForm.password"
            placeholder="请输入密码"
            prefix-icon="iconfont icon-mima"
            @keyup.enter.native="loginsubmit()"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="login-btn" type="success" @click="loginsubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// 引入模块方法
import { login } from "@/api/user_api.js";
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      // 初次验证：验证非空
      rules: {
        //  每个名字对应着一个规则
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 16, massage: "密码必须在6-16位之间", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    // 二次验证：验证输入是否合法
    loginsubmit() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          // 调用接口方法实现用户登录
          login(this.loginForm)
            .then(res => {
              if (res.data.meta.status === 200) {
                // 将token数据存储到本地
                localStorage.setItem('token',res.data.data.token)
                this.$message.success(res.data.meta.msg);
                this.$router.push({name:'home'})
              }else{
                this.$message.warning(res.data.meta.msg+'，请重新输入');
            }
            })
            .catch(err => {
              console.log(err, "登陆失败");
            });
        } else {
          this.$message.error("错了哦，输入格式错误!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #e1f3d8;
  .container {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 0px 40px 15px 40px;
    margin: 200px auto;
    background: white;
    .avatar {
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid #fff;
      box-shadow: 0 1px 5px #ccc;
      overflow: hidden;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>
