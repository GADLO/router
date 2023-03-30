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

        <button @click="submitLogin" >
        登录
        </button>
    </p>
</div>
</template>

<script setup lang='ts'>

</script>

<style lang='scss'>
 
</style>