<!-- 登录页 -->
<template>
  <div class="wrapper">  
    <div class="login">  
      <div class="input-wrapper">  
        <input @change="onchangeUserNumber" class="input" type="text" placeholder="账号" autofocus="true" value=""/> 
        <image class="input-img" src="http://cdn-img.easyicon.net/png/11741/1174195.gif"></image>  
      </div>
      <div class="input-wrapper">  
        <input @change="onchangeUserPassword" class="input" type="password" placeholder="密码" value=""/>
        <image class="input-img" src="http://cdn-img.easyicon.net/png/11741/1174192.gif"></image>  
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
      // 隐藏tab栏
      this.$store.dispatch('hideTabBar');
    }, 
    methods:{  
      onchangeUserNumber(event) {  
        this.userNumber = event.value;  
      },  
      onchangeUserPassword(event) {  
        this.userPassword = event.value;  
      },  
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
        if(this.userNumber.length < 1){
          modal.toast({
            'message': '请输入手机号',
            'duration': 1
          });
          return;  
        }else if(this.userPassword.length < 1){
          modal.toast({
            'message': '请输入密码',
            'duration': 1
          });
          return;  
        }
        /*登录成功*/
        // 设置登录状态
        // this.$store.commit('SET_LOGIN',data);
        this.$store.dispatch('setLogin',true);
        // 跳转home
        this.$router.push({path:'/home'});
      }  
    }  
  }  
</script>  
  
<style>  
  .wrapper {  
    position: absolute;  
    top: 0;  
    right: 0;  
    bottom: 0;  
    left: 0;
  }  
  .login{  
    margin-top: 180px;  
  }  
  .input-wrapper{  
    width: 90%; 
    margin: 0px auto 30px; 
  }  
  .input {  
    font-size: 16px;  
    height: 44px;  
    width: 100%; 
    border-width:1px;  
    border-color: #48c9bf;  
    border-radius:5px;  
    outline: none;
    text-indent:2.5em;
  } 
  .input-img{  
    position: absolute;  
    top:6px;  
    left: 5px;  
    width: 30px;  
    height: 30px;  
  }  
  .input-login{  
    height: 44px;  
    width: 100%;  
    background-color: #48c9bf;  
    border-radius: 5px;
  }  
  .input-login-text{  
    height: 44px;  
    width: 100%;  
    text-align: center;  
    line-height: 44px;  
    color: white;  
    font-size: 16px;  
  }  
  .input-forget{  
    position: absolute;  
    left: 0px;  
    font-size: 16px;  
  }  
  .input-register{  
    position: absolute;  
    right: 0px;  
    font-size: 16px;  
  }
</style>