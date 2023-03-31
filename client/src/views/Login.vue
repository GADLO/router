<template>
<div>
    <h1>登录</h1>
    <p>
        <input type="text" placeholder="用户名" v-model="username">
    </p>
    <p>
        <input type="text" placeholder="密码" v-model="password">
    </p>
    <p>
        <router-link to="/register" >
        注册
        </router-link>

        <button @click="" >
        登录
        </button>
    </p>
</div>
</template>

<script setup lang='ts'>
import { useLogin, useStorage } from './hooks/user';
  import errorHandler from '@/config/errorHandle';
  import { useRouter } from 'vue-router';

  const {
    username,
    password,
    checkUserInfo,
    submitUserInfo
  } = useLogin();




</script>

<style lang='scss'>
 
</style>