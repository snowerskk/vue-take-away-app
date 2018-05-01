<template>
  <div id="app">
    <!-- 顶部 -->
    <v-header :seller="seller"></v-header>
    <div class="tab" id="tab">
      <!-- 商品列表页 -->
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <!-- 评论详情页 -->
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <!-- 商家介绍页 -->
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
import Header from './components/header/header.vue'
const ERR_OK = 0
export default {
  name: 'App',
  components: {
    'v-header': Header
  },
  data () {
    return {
      seller: {}
    }
  },
  created () {
    this.axios.get('/api/seller').then((res) => {
      if (res.data.errno === ERR_OK) {
        this.seller = res.data.data
      }
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./common/stylus/mixin.styl"
// @import "./common/stylus/base.styl"
@import "./common/stylus/icon.styl"

#app
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    box-shadow: inset 0px -1px 1px -1px #c8c7cc
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: 14px
        color: rgb(77,85,93)
      .router-link-active
        color: rgb(240,20,20)
</style>
