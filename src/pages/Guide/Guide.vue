<!-- 引导页 -->
<template>
  <div class="wrap">
    <!-- 轮播图 -->
    <slider class="slider" auto-play="true" interval="5000" >
      <div class="slider-pages" v-for="item in itemList">
        <image class="thumb" :src="item.pictureUrl" resize="stretch"></image>
      </div>
      <!-- 指示器 style="width:720px;height:30px;" -->
      <!-- <indicator class="indicator"></indicator> -->
    </slider>
    <!-- 开始体验 -->
    <text class='btn' @click="goStart">{{txt}}</text>
  </div>
</template>

<style scoped>
 .wrap{
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #2B2D2F;
  }
  /*轮播图*/
  .slider {
    width: 750px;
    height: 1000px;
    background-color: transparent;
    align-items: center;
    justify-content: center;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: auto;
    margin-right: auto;
  }
  /*轮播图 图片*/
  .slider-pages {
    flex-direction: row;
    width: 720px;
    height: 1000px;
    align-items: center;
    justify-content: center;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: auto;
    margin-right: auto;
  }
  .thumb {
    width: 720px;
    height: 1280px;
    align-items: center;
    justify-content: center;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: auto;
    margin-right: auto;
  }
  /*轮播图 指示器*/
  .indicator {
    position: absolute;
    top: 970px;
    width: 720px;
    height: 30px;
    item-color: #dddddd;
    item-selected-color: rgb(40, 96, 144);
  }
  /*开始体验 按钮*/
  .btn{
    width: 300px;
    height: 60px;
    margin-top: 20px;
    background-color:#0096FF;
    font-size:25px;
    height:60px;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    border-radius: 50;
    color:#FFFFFF;
  }
</style>

<script>
  export default {
    data() {
      return {
        txt:"开始体验",
        itemList: [
          {title: 'A', pictureUrl: 'https://duqian291902259.github.io/dusan/oair/bg1.png'},
          {title: 'B', pictureUrl: 'https://duqian291902259.github.io/dusan/oair/bg2.png'},
          {title: 'C', pictureUrl: 'https://duqian291902259.github.io/dusan/oair/bg1.png'}
        ]
      }
    },
    created () {
      // 隐藏tabbar
      this.$store.dispatch('hideTabBar');
    },
    methods: {
      goStart() {
        // 页面跳转
        this.$router.push({path:'/splash'});
      }
    }
  }
</script>