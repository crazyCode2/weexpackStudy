<!-- 登录页 -->
<template>
  <div class="wrapper">  
    <div class="login">  
      <div class="input-wrapper">  
        <input v-model="userNumber" class="input" type="text" placeholder="账号" autofocus="true" value=""/> 
        <image class="input-img" src="https://www.easyicon.net/api/resizeApi.php?id=1174195&size=64"></image>  
      </div>
      <div class="input-wrapper">  
        <input v-model="userPassword" class="input" type="password" placeholder="密码" value=""/>
        <image class="input-img" src="https://www.easyicon.net/api/resizeApi.php?id=1174192&size=64"></image>  
      </div>  
      <div class="input-wrapper">  
        <div class="input-login" @click="login">  
          <text class="input-login-text">登录</text>  
        </div>  
      </div>  
      <div class="input-wrapper">  
        <text class="input-forget" @click="findPassword">找回密码</text>  
        <text class="input-register" @click="register">立即注册</text>  
      </div>
    </div>
  </div>  
</template>  
  
<script>
  // 弹窗
  const modal = weex.requireModule('modal');
  
  module.exports = {  
    data(){  
      return{
        userNumber:'',  
        userPassword:''
      }
    },
    created () {
      // 隐藏tabbar
      this.$store.dispatch('hideTabBar');
    }, 
    methods:{ 
      /*找回密码*/  
      findPassword() {
        modal.toast({
          'message': '找回密码暂时未开发',
          'duration': 1
        });
      },
      /*注册*/  
      register() {
        modal.toast({
          'message': '注册暂时未开发',
          'duration': 1
        });
      },
      /*处理登录*/  
      login() {  
        if(!this.userNumber){
          modal.toast({
            'message': '请输入手机号',
            'duration': 1
          });
          return;  
        }else if(!this.userPassword.length){
          modal.toast({
            'message': '请输入密码',
            'duration': 1
          });
          return;  
        }
        // 登录成功
        modal.toast({
          'message': '登录成功',
          'duration': 1
        });
        // 跳转home
        this.$router.push({path:'/'});
      }  
    }  
  }  
</script>  
  
<style scoped>
  /*整体框架 绝对定位*/
  .wrapper { 
    position: absolute;  
    top: 0;  
    right: 0;  
    bottom: 0;  
    left: 0;  
  }  
  .login{
    width: 600px;
    height: 500px;
    /*垂直水平居中*/
    position: absolute;  
    top: 0;  
    right: 0;  
    bottom: 0;  
    left: 0;
    margin: auto;  
  }  
  .input-wrapper{  
    width: 600px;
    margin-bottom: 30px;  
  }  
  .input {  
    font-size: 30px;  
    height: 80px;  
    width: 600px;  
    padding-left: 90px;  
    padding-top: 15px;  
    padding-bottom: 15px;  
    border-width:1px;  
    border-color: #48c9bf;  
    border-radius:10px;  
    outline: none;  
  }  
  .input-img{  
    position: absolute;  
    top:10px;  
    left: 15px;  
    width: 60px;  
    height: 60px;  
  }  
  .input-login{  
    height: 80px;  
    width: 600px;  
    background-color: #48c9bf;  
    border-radius: 10px;  
    margin-top: 40px;  
  }  
  .input-login-text{  
    height: 80px;  
    width: 600px;  
    text-align: center;  
    line-height: 80px;  
    color: white;  
    font-size: 35px;  
  }  
  .input-forget{  
    position: absolute;  
    left: 20px;  
    font-size: 30px;  
  }  
  .input-register{  
    position: absolute;  
    right: 20px;  
    font-size: 30px;  
  }
</style>