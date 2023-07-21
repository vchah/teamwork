<template>
  <div class="login-class">
    <el-form ref="loginRef" v-model="loginParams">
      <el-form-item label="用户名" label-width="80" prop="account">
        <el-input :model="loginParams.account"></el-input>
      </el-form-item>
      <el-form-item label="密码" label-width="80" prop="password">
        <el-input :model="loginParams.password"></el-input>
      </el-form-item>
      <el-form-item label-width="80">
        <el-button type="primary" class="confirm" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
// 登录参数
const loginParams = reactive({
  account: '',
  password: ''
})

// 登录按钮
const login = () => {
  console.log('login', loginParams)
  // 创建user状态，保存登录成功后的状态
}

</script>

<style lang="scss" scoped>
.login-class {
  width: 25vw;
  position: absolute;
  top: 30%;
  left: 40%;
  .confirm{
    width: 100%;
  }
}
</style>
