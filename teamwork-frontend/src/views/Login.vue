<template>
  <el-card class="login-class">
    <el-form ref="loginRef" :model="loginParams" label-position="top" label-width="80">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginParams.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginParams.password" />
      </el-form-item>
      <el-form-item label="验证码" prop="captcha">
        <el-input v-model="loginParams.code" style="width: 60%;" />
        <div class="captcha-class">
          <img :src="code" @click="getCode" />
        </div>
      </el-form-item>
      <el-button type="primary" class="confirm" @click="handleLogin">登录</el-button>
    </el-form>
  </el-card>
</template>

<script setup lang="ts">
import { reactive, onMounted, ref } from 'vue'
import { useUserStore } from '@/stores/useUserStore';
import axios from 'axios'
const userStore = useUserStore()
// 登录参数
const loginParams = reactive({
  uuid: '',
  username: '',
  password: '',
  code: ''
})
// 验证码 base64
const code = ref()
// 登录按钮
const handleLogin = () => {
  // 创建user状态，保存登录成功后的状态
  userStore.login(loginParams)
}
// 获取验证码图片
const getCode = () => {
  axios.get('/dev-api/captchaImage').then(res => {
    console.log(res)
    code.value = 'data:image/gif;base64,' + res.data.img
    loginParams.uuid = res.data.uuid
  })
}
onMounted(() => {
  getCode()
})
</script>

<style lang="scss" scoped>
.login-class {
  width: 400px;
  height: 330px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .captcha-class {
    width: 30%;
    height: 32px;
    img {
      width: 100%;
      height: 100%;
      margin-left: 15px;
    }
  }
  .confirm{
    width: 100%;
  }
}
</style>
