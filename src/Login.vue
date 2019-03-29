<template>
  <div class="login">
    <div class="login-box">
      <div class="login-wrap">
        <i class="username"></i><input type="text" placeholder="请输入用户名"/>
      </div>
      <div class="login-wrap">
        <i class="password"></i><input type="password"  placeholder="请输入密码"/>
      </div>
      <mt-button type="primary" size='large' style='margin-top:20px;height:30px;' @click="login">登 录</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    login () {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="less">
.login{
  .login-box{
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    text-align: center;
    .login-wrap{
      display: flex;
      align-items: center;
      margin-bottom:20px;
      .username,.password{
        display: inline-block;
        padding:0 10px;
        width:80px;
        border-bottom:1px solid #dbd9d9;
        height: 80px;
        background:url('./assets/imgs/i-lock.png') no-repeat center;
      }
      .password{
        background:url('./assets/imgs/i-person.png') no-repeat center;
      }
      input{
        border-bottom:1px solid #dbd9d9;
        display: inline-block;
        height: 80px;
        width:5rem;
      }
    }
  }
}
</style>
