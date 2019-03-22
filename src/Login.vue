<template>
  <div class="login">
    <div class="login-box">
      <div class="login-wrap">
        <i class="username"></i><input type="text" placeholder="请输入用户名"/>
      </div>
      <div class="login-wrap">
        <i class="password"></i><input type="password"  placeholder="请输入密码"/>
      </div>
      <mt-button type="primary">default</mt-button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.login{
  position: relative;
  height: 100%;
  .login-box{
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    text-align: center;
    .login-wrap{
      display: flex;
      align-items: center;
      margin-top:20px;
      .username,.password{
        display: inline-block;
        padding:0 10px;
        width:80px;
        border-bottom:1px solid #dbd9d9;
        height: 100px;
        background:url('./assets/imgs/i-lock.png') no-repeat center;
      }
      .password{
        background:url('./assets/imgs/i-person.png') no-repeat center;
      }
      input{
        border-bottom:1px solid #dbd9d9;
        display: inline-block;
        height: 100px;
        width:5rem;
      }
    }
  }
}
</style>
