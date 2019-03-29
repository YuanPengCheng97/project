<template>
  <div class="student">
    <span class="comment-title my-student">我的学生</span>
    <div class="s-search">
      <div>
        <span>学期：</span>
        <span>
          <select>
            <option>2018-2019上学期</option>
            <option>2018-2019下学期</option>
          </select>
        </span>
      </div>
      <div>
        <span>学科：</span>
        <span>
          <select>
            <option>语文</option>
            <option>数学</option>
          </select>
        </span>
      </div>
    </div>
    <div class="s-wrap">
      <div v-for="i in 15" :key="i">
        <span>刘晓宇</span>
        <span><a>查看</a><b style="color:#8b94a1"> | </b><a>通知</a></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<style lang="less">
.student{
  padding:20px;
  .s-search{
    padding:20px 0 0 0;
    div{
      margin-bottom:10px;
    }
  }
  .s-wrap{
    margin-top: 20px;
    border:@border-d;
    border-bottom:none;
    div{
      border-bottom:@border-d;
      padding:20px;
      font-size:35px;
      display: flex;
      justify-content:space-between;
      span{
        a{
          color:@color-t;
          font-size:30px;
        }
      }
    }
  }
}
</style>
