<!-- 引导页 -->
<template>
  <div class="wrap"> 
    <slider class="slider" auto-play="true" interval="5000" >
      <div class="slider-pages" v-for="item in itemList">
        <image class="thumb" :src="item.pictureUrl" resize="stretch"></image>
      </div>
      <indicator class="indicator"></indicator>
    </slider>
    <!-- 开始体验－Start -->
    <text class='btn' @click="goNext">{{txt}}</text>
  </div>
</template>

<style>
 .wrap{
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #2B2D2F;
  }
  .slider {
    margin: 0px;
    width: 750px;
    height: 1000px;
    background-color: transparent;;
    margin:0px auto;
    align-items: center;
    justify-content: center;
  }
  .thumb {
    width: 720px;
    height: 1280px;
    margin:0px auto;
    align-items: center;
    justify-content: center;
  }
  .slider-pages {
    flex-direction: row;
    width: 720px;
    height: 1000px;
    margin:0px auto;
    align-items: center;
    justify-content: center;
  }
  .indicator {
    position: absolute;
    top: 970px;
    width: 720px;
    height: 30px;
    itemColor: #dddddd;
    itemSelectedColor: rgb(40, 96, 144);
  }
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
        txt:"开始体验-DusanWeex",
        intervalValue:"1000",
        isShowIndicators:"true",
        isAutoPlay:"true",
        itemList: [
          {title: 'A', pictureUrl: 'https://duqian291902259.github.io/dusan/oair/bg1.png'},
          {title: 'B', pictureUrl: 'https://duqian291902259.github.io/dusan/oair/bg2.png'},
          {title: 'C', pictureUrl: 'https://duqian291902259.github.io/dusan/oair/bg1.png'}
        ]
      }
    },
    methods: {
      goNext() {
        // 页面跳转
        console.log('开始页面跳转');
      }
    }
  }
</script>