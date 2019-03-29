<template>
  <div class="password">
    <top-bar title="修改密码" :show="true"></top-bar>
    <div class="p-body">
      <div class="p-b-change">
        <mt-field label="原始密码" placeholder="请输入原始密码" type="password" v-model="password.oldPassword"></mt-field>
        <mt-field label="新密码" placeholder="请输入新密码" type="password" v-model="password.newPassword"></mt-field>
        <mt-field label="确认密码" placeholder="请再次输入密码" type="password" v-model="password.confirmPassword"></mt-field>
      </div>
      <mt-button type="primary" size="large" style="margin-top:10px;height:30px;" @click="saveInfo">保存</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      password: {
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    saveInfo () {
      this.$success('修改密码成功')
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="less">
.password{
 .p-body{
    margin:20px;
    .p-b-change{
      padding:15px;
      border:@border-d;
      .mint-cell:nth-child(1) {
        .mint-cell-wrapper{
          border:none;
        }
      }
      .mint-cell-wrapper{
        display:flex;
        height: 100px;
        align-items: center;
        border-top:@border-d;
        .mint-cell-title{
          margin-right:40px;
          .mint-cell-text{
            width:120px;
            display: inline-block;
          }
        }
      }
    }
  }
}
</style>
