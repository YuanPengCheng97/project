<template>
  <div class="myInfo">
    <top-bar title="我的信息" :show="true"></top-bar>
    <div class="m-body">
      <div class="m-b-con">
        <mt-field label="姓名" placeholder="请输入用户名" v-model="form.username"></mt-field>
        <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="form.email"></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="form.phone"></mt-field>
        <mt-field label="生日" placeholder="请输入生日" type="date" v-model="form.birthday"></mt-field>
      </div>
      <mt-button type="primary" size="large" style="margin-top:10px;height:30px;" @click="saveInfo">保存</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '',
        email: '',
        phone: '',
        birthday: ''
      }
    }
  },
  methods: {
    saveInfo () {
      this.$success('成功')
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="less">
.myInfo{
  .m-body{
    margin:20px;
    .m-b-con{
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
          margin-right:30px;
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
