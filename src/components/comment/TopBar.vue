<template>
  <div class="topbar">
    <mt-header :title="title">
      <router-link to="" slot="left">
        <mt-button icon="back" v-show="show" @click="$router.back(-1)"></mt-button>
      </router-link>
      <slot></slot>
    </mt-header>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    show: Boolean
  }
}
</script>

<style lang="less">
.topbar{
  .mint-header{
    background:@color-t;
    height: 80px;
  }
}
</style>
