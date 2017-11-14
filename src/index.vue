<template>
  <div class="wrapper" @click="update">
    <image :src="logoUrl" class="logo"></image>
    <text class="title">Hello {{target}}</text>
    <text class="desc">Now, let's use vue to build your weex app.</text>
    <!--使用模块中注入的自定义组件-->
    <v-base-button></v-base-button>
  </div>
</template>

<style>
  .wrapper { align-items: center; margin-top: 120px; }
  .title { padding-top:40px; padding-bottom: 40px; font-size: 48px; }
  .logo { width: 360px; height: 156px; }
  .desc { padding-top: 20px; color:#888; font-size: 24px;}
</style>

<script>

  import Vue from "vue"
  import brmodules from './modules/index'

  //使用模块中编写的插件
  Vue.use(brmodules);

  export default {
    data: function() {
        return {
            logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
            target: 'World'
        }
    },
    created: function() {
        console.log("=========Vue实例对象调用:" + this.$utils.DateUtil.format("yyyy-MM-dd hh:mm:ss", new Date()));
        console.log("=========Vue全局对象调用:" + Vue.brutils.DateUtil.format("yyyy-MM-dd hh:mm:ss", new Date()));
    },
    methods: {
      update: function (e) {
        this.target = 'Weex';
        console.log('target:', this.target)
      }
    }
  }
</script>