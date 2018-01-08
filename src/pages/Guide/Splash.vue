<!-- splash页面 -->
<template>
  <div class="wrap" @focus="rotate" @load="rotate">
    <div class="logo_wrap">
      <image class="img_logo" :src="splash_logo" @click="rotate" />
    </div>
    <div id="animation" style="transform-origin:center center">
      <image class="img_circle" @focus="rotate" :src="splash_circle" @click="rotate" />
    </div>
  </div>
</template>

<style scoped>
  .wrap{
    align-items: center;
    justify-content: center;
    background-color: #000;
  }
  .img_circle {
    /*不支持100%*/
    width: 400px;
    height:400px;
    align-items: center;
    justify-content: center;
  }
   .logo_wrap {
    width: 300px;
    height:300px;
  }
  .img_logo {
    width: 300px;
    height:300px;
  }
</style>

<script>
  export default {
    data() {
      return {
        splash_circle:'//duqian291902259.github.io/dusan/oair/splash_circle.png',
        splash_logo:'//gw.alicdn.com/tps/i2/TB1DpsmMpXXXXabaXXX20ySQVXX-512-512.png_400x400.jpg',
        transformOrigin: 'center center',
        current_rotate: 0,
        current_scale: 1,
        current_color: '#FF0000',
        current_opacity: 1,
        current_translate: '',
        current_transform: '',
        isStop: false
      }
    },
    mounted() {
       this.rotate();
    },
    methods: {
      goSite() {
        // 页面跳转
      },
      // 动画
      anim(styles, timingFunction, duration, callback) {
        this.$call('animation', 'transition', this._ids.animation.el.ref, {
          styles: styles,
          timingFunction: timingFunction,
          duration: duration
        }, callback);
      },
      // 旋转
      rotate() {
        var self = this;
        self.current_rotate += 30;
        self.anim({
          transform: 'rotate(' + self.current_rotate + 'deg)'
        }, 'ease-in-out', 100, function() {
          if (self.current_rotate === 360) {
            self.current_rotate = 0;
            // 页面跳转
            self.goSite();
          }else {
            self.rotate();
            if (self.current_rotate === 180) {
              self.scale();
            }
          }
        });
      },
      // 缩放
      scale() {
        var self = this;
        self.current_scale = self.current_scale === 2 ? .5 : 0.3
        self.anim({
          transform: 'scale(' + self.current_scale + ')'
        }, 'linear', 500, function() {
          if (self.current_scale ===0.3) {
            //self.current_scale =1;
          }
        });
      }
    }
  };
</script>