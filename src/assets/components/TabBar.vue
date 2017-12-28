<!-- 底部选项卡 组件 -->
<template>
  <div class="wrapper">
    <div class="bar-item" @click="tabTo('home')">
      <text class="bar-ic iconfont" :class="{'bar-active':setActive}" :style="isActive('home')">&#xe65c;</text>
      <text class="bar-txt" :class="{'bar-active':setActive}" :style="isActive('home')">首页</text>
    </div>
    <div class="bar-item" @click="tabTo('top')">
      <text class="bar-ic iconfont" :style="isActive('top')">&#xe608;</text>
      <text class="bar-txt" :style="isActive('top')">推荐</text>
    </div>
    <div class="bar-item act" @click="tabTo('demo')">
      <text class="bar-ic iconfont" :style="isActive('demo')">&#xe7f9;</text>
      <text class="bar-txt" :style="isActive('demo')">分类</text>
    </div>
    <div class="bar-item" @click="tabTo('all')">
      <text class="bar-ic iconfont" :style="isActive('all')">&#xe625;</text>
      <text class="bar-txt" :style="isActive('all')">PHP教程</text>
    </div>
    <div class="bar-item" @click="tabTo('my')">
      <text class="bar-ic iconfont" :style="isActive('my')">&#xe606;</text>
      <text class="bar-txt" :style="isActive('my')">关于</text>
    </div>
  </div>
</template>

<style scoped>
  .iconfont {
    font-family:iconfont;
  }
  .wrapper{
    position: fixed;
    bottom: 0;
    left: 0;right: 0;
    height: 90px;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-around;
    border-top-width: 1px;
    border-top-color: #d9d9d9;
    background-color: #fafafa;
  }
  .bar-item{
    flex: 1;
  }
  .bar-txt,.bar-ic{
    color:#666;
    text-align: center;
  }
  .bar-active{
    color:rgb(92, 184, 92);
  }
  .bar-ic{
    padding-top: 7px;
    font-size: 38px;
  }
  .bar-txt{
    font-size: 22px;
    padding-top: 1px;
  }
</style>

<script>
  // 弹窗
  var modal = weex.requireModule('modal');

  export default {
    data () {
      return {
        pIndexKey:'home'
      }
    },
    computed:{
      setActive() {
        return this.pIndexKey == 'home'?'color:#b4282d;':''
      }
    },
    methods: {
      isActive(key){
        return this.pIndexKey == key?'color:rgb(92, 184, 92);':''
      },
      // 切换tab
      tabTo(_key){
        if(this.pIndexKey == _key) return;
        this.pIndexKey = _key;
        // 向父组件传值
        this.$emit('tabTo',{
          status : 'tabTo',
          data : {
            key : _key
          }
        })
      }
    }
  }
</script>