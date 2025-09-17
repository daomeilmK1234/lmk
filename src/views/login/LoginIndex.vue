<template>
  <div class="login_container">
    <el-row>
      <el-col :span="8" xs="0">2</el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginForms">
          <h1>Hello,</h1>
          <h2>欢迎来到哑舍平台</h2>
          <el-form-item prop="username">
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item prop="username">
            <el-input
              :prefix-icon="Lock"
              v-model="loginForm.password"
              placeholder="请输入密码"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              class="login_btn"
              type="primary"
              size="default"
              @click="login"
              :loading="loading"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import axios from 'axios'
import router from '@/router'

const loginApi = axios({
  url: '/api/user/login',
  method: 'post',
  data: { username: 'admin', password: '111111' },
})
const loginForms = ref()
const loginForm = reactive({ username: 'admin', password: '111111' })
const loading = ref(false)
const login = async () => {
  const res = await loginApi
  console.log(res.status)

  if (res.status === 200) {
    loading.value = true
    router.push('/')
  } else {
    console.log('登录失败')
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validatorUserName = (rule: any, value: any, callback: any) => {
  //rule:即为校验规则对象
  //value:即为表单元素文本内容
  //函数:如果符合条件callBack放行通过即为
  //如果不符合条件callBack方法,注入错误提示信息
  if (value.length >= 5) {
    callback()
  } else {
    callback(new Error('账号长度至少五位'))
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validatorPassword = (rule: any, value: any, callback: any) => {
  if (value.length >= 6) {
    callback()
  } else {
    callback(new Error('密码长度至少六位'))
  }
}
//定义表单校验需要配置对象
const rules = {
  //规则对象属性:
  //required,代表这个字段务必要校验的
  //min:文本长度至少多少位
  //max:文本长度最多多少位
  //message:错误的提示信息
  //trigger:触发校验表单的时机 change->文本发生变化触发校验,blur:失去焦点的时候触发校验规则
  username: [
    // { required: true, min: 6, max: 10, message: '账号长度至少六位', trigger: 'change' }
    { trigger: 'change', validator: validatorUserName },
  ],
  password: [
    // { required: true, min: 6, max: 15, message: '密码长度至少6位', trigger: 'change' }
    { trigger: 'change', validator: validatorPassword },
  ],
}
</script>

<style lang="scss" scoped>
.login_container {
  width: 100vw;
  height: 100vh;
  background-color: red;
  background-size: cover;
  background: url('@/assets/images/bgc.png') no-repeat;
  background-size: cover;
  .login_form {
    position: relative;
    width: 65%;
    top: 40vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;

    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      font-size: 20px;
      color: white;
      margin: 20px 0px;
    }

    .login_btn {
      width: 50%;
      margin-left: 25%;
    }
  }
}
</style>
