<template>
  <el-card class="login-class">
    <el-form ref="loginRef" :model="loginParams" label-position="top">
      <el-form-item label="用户名" label-width="80" prop="account">
        <el-input v-model="loginParams.account"></el-input>
      </el-form-item>
      <el-form-item label="密码" label-width="80" prop="password">
        <el-input v-model="loginParams.password"></el-input>
      </el-form-item>
      <el-button type="primary" class="confirm" @click="login">登录</el-button>
    </el-form>
  </el-card>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useUserStore } from '@/stores/useUserStore';

const userStore = useUserStore()
// 登录参数
const loginParams = reactive({
  account: '',
  password: ''
})

// 登录按钮
const login = () => {
  // 创建user状态，保存登录成功后的状态
  userStore.login(loginParams)
}

</script>

<style lang="scss" scoped>
.login-class {
  width: 20%;
  height: 25%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .confirm{
    width: 100%;
  }
}
</style>
