<!-- 离线地图 组件 -->
<template>
  <div id="map" :style="style"></div>
</template>

<script>
  export default{
    data(){
      return {
        style:{
          width:'100%',
          height:this.height + 'px'
        }
      }
    },
    props:{
      height:{
        type:Number,
        default:736  // 默认值
      },
      longitude:{
        type:Number,
        default:114.00100
      },  // 经度
      latitude:{
        type:Number,
        default:22.61067
      } // 维度
    },
    mounted(){
      let _this = this;
      /**
       * 百度地图API功能
       */
      let map = new BMap.Map("map",{minZoom:12,maxZoom:18});
      let point = new BMap.Point(this.longitude,this.latitude);
      map.centerAndZoom(point,13);
      /**
       * 添加放大、缩小控件
       */
      let top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_LEFT, type:BMAP_NAVIGATION_CONTROL_SMALL}); //右上角，仅包含平移和缩放按钮
      map.addControl(top_right_navigation);
    }
  }
</script>

<style scoped>
  
</style>
