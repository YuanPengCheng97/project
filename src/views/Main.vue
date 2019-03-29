<template>
  <div class="main">
    <router-view/>
    <footer>
      <div @click="toRouter('home')" :class="tab==='home'?'active':''"><i class="iconfont icon-yonghu1"></i><span>首页</span></div>
      <div @click="toRouter('student-main')" :class="tab==='student-main'?'active':''"><i class="iconfont icon-xuesheng"></i><span>学生</span></div>
      <div @click="toRouter('notice-main')" :class="tab==='notice-main'?'active':''"><i class="iconfont icon-tongzhi1"></i><span>通知</span></div>
      <div @click="toRouter('work-main')" :class="tab==='work-main'?'active':''"><i class="iconfont icon-zuoye"></i><span>作业</span></div>
      <div @click="toRouter('resource-main')" :class="tab==='resource-main'?'active':''"><i class="iconfont icon-wenjian1"></i><span>资源</span></div>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tab: 'home'
    }
  },
  methods: {
    toRouter (url) {
      this.tab = url
      this.$router.push('/' + url)
    }
  }
}
</script>

<style lang="less">
.main{
  padding-bottom:115px;
  height: 100%;
  footer{
    z-index:10000;
    width:100%;
    padding:10px 0;
    background: rgb(230, 228, 228);
    position:fixed;
    bottom:0;
    display: flex;
    div{
      flex:1;
      text-align: center;
      font-size:30px;
      display:flex;
      flex-direction: column;
      i{
        font-size: 50px;
      }
    }
    .active{
      color:@color-s;
    }
  }
}
</style>
