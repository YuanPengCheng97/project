<template>
  <div class="home">
    <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
    <div class="home-body">
      <div class="h-b-icon">
        <span>高校教学助手</span>
        <i class="iconfont icon-jiaoshi" @click="popupVisible=!popupVisible"></i>
      </div>
      <div class="h-b-c">
        <div>
          <span><b>0</b><a>通知</a></span>
        </div>
        <div>
          <span><b>0</b><a>资源</a></span>
        </div>
        <div>
          <span><b>0</b><a>作业</a></span>
        </div>
      </div>
      <div class="h-b-notice list">
        <span>我的通知</span>
        <div>
          暂无通知
        </div>
      </div>
      <div class="h-b-homework list">
        <span>我的作业</span>
        <div>
          暂无作业
        </div>
      </div>
      <div class="h-b-resource list">
        <span>我的资源</span>
        <div>
          暂无资源
        </div>
      </div>
    </div>
    </mt-loadmore>
    <mt-popup
      v-model="popupVisible"
      position='left'
      popup-transition="popup-fade"
      :modal="true">
      <div class="content">
        <img src='../../assets/imgs/touxiang.jpg' width='80' height="80"/>
        <p>刘老师</p>
      </div>
      <div class="handle">
        <ul>
          <li @click="to('/myInfo')">我的信息</li>
          <li @click="to('/password')">修改密码</li>
          <li>查看课表</li>
          <li>意见反馈</li>
        </ul>
      </div>
    </mt-popup>
  </div>
</template>

<script>
export default {
  data () {
    return {
      popupVisible: false,
      time: '',
      allLoaded: false,
      topStatus: ''
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    handleTopChange (status) {
      console.log(status)
    },
    loadTop () {
      setTimeout(() => {
        this.$refs.loadmore.onTopLoaded()
      }, 1000)
    },
    to (place) {
      this.$router.push(place)
    }
  }
}
</script>

<style lang="less">
.home{
  .mint-loadmore{
    height:100%;
  }
  .home-body{
    .h-b-icon{
      padding:20px;
      display:flex;
      border-bottom:@border-d;
      justify-content: space-between;
      align-items: center;
      span{
        font-size:45px;
        font-weight: 900;
        color:@color-t;
      }
      .icon-jiaoshi{
        font-size:50px;
        color:@color-t;
      }
    }
    .h-b-c{
      padding:40px;
      display: flex;
      justify-content: space-between;
      border-bottom:@border-d;
      div{
        text-align:center;
        flex:1;
        span{
          display: inline-block;
          border: 2px solid @color-t;
          width:2rem;
          height:2rem;
          text-align:center;
          border-radius:30px;
          line-height: 1rem;
          background:@color-t;
          color:#fff;
          b{
            display:block;
            font-size:50px;
            font-weight: 900;
          }
          a{
            display: block;
          }
        }
      }
    }
    .list{
      padding:20px;
      min-height: 200px;
      border-bottom:@border-d;
      span{
        display: block;
        font-size:35px;
        &::before{
          display: inline-block;
          content: '';
          width:10px;
          height:25px;
          margin-right:15px;
          border-radius:10px;
          background:@color-t;
        }
      }
      div{
        text-align:center;
        font-size:40px;
        line-height: 200px;
      }
    }
  }
  .mint-popup{
    height: 100%;
    width:300px;
    background: @color-s;
    border-radius:0 80% 100px 0;
    .content{
      padding:20px;
      text-align: center;
      img{
        margin-top:40px;
        border-radius:50%;
      }
      p{
        margin-top:10px;
        color:#fff;
        font-size:26px;
      }
    }
    .handle{
      padding:20px;
      margin-top:120px;
      ul{
        li{
          font-size:26px;
          color:#fff;
          text-align:center;
          margin-bottom:60px;
        }
      }
    }
  }
}
</style>
