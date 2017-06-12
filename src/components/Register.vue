<template>
  <div class="hello">
      <div class="container">
          <div class="content">
              <div class="username commen">
                  <p><span>账户</span><input type="number" ref='userName'/></p>
              </div>
              <div class="userpassword commen">
                  <p><span>密码</span><input type="password" ref='passWord'/><label class="iconfont icon-biyan"></label></p>
                  <p><span>确认</span><input type="password" ref='passWordAgain'/><label class="iconfont icon-biyan"></label></p>
              </div>
              <div class="choose">
                  <p><input type="checkbox" /><span>直接登陆？</span><router-link to="/"><span class="now">立即登陆</span></router-link></p>
              </div>
              <div class="login" @click='register'>立即注册</div>
              <h4 class="alert" ref="warn"></h4>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    register () {
      let reg = /^1[34578]\d{9}$/g
      let userName = this.$refs.userName.value
      let passWord = this.$refs.passWord.value
      let passWordAgain = this.$refs.passWordAgain.value
      const warn = this.$refs.warn
      // 校验手机号码
      if (reg.test(userName)) {
        alert()
      } else {
        warn.innerHTML = '手机格式输入有错！'
        warn.classList.add('warn')
        setTimeout(function () {
          warn.classList.remove('warn')
        }, 2500)
      }
      console.log(passWordAgain)
      console.log(passWord)
    }
  }
}
</script>

<style lang="scss" scoped>
  .hello{
    width: 100%;
    height: 100%;
    background:url('../assets/bg.jpeg') no-repeat;
    background-size:100% 100%; 
  }
  .container{
    width: 100%;
    position: absolute;
    top: 50%;
    margin-top: -12rem;
  }
  .userImg{
    width:4rem;
    height: 4rem;
    background:linear-gradient(to bottom right, purple , #fff );
    border-radius: 100%;
    margin: auto;
    overflow: hidden; 
    padding: .2rem;
    .icon{
      width: 100%;
      height: 100%;
      border-radius: 100%;
      background: rgba(225,225,225,.5);
      text-align: center;
      line-height: 3rem;
      font-size: 3rem;
      color: #fff
    }
  }
  .username{
    margin-top: 2rem;
  }
  .userpassword label{
    display: inline-block;
    height: 2.5rem;
    padding-right: .5rem;
    line-height: 2.5rem;
    font-size: 1rem;
    color: #666;
  }
  .commen p{
    width: 70%;
    height: 2.5rem;
    display: flex;
    background: rgba(225,225,225,.5);
    box-shadow: 1px 1px 10px #888888;
    margin: auto;
    span{
      width: 20%;
      display: inline-block;
      height: 100%;
      line-height: 2.5rem;
      text-align: center;
      font-size: .8rem;
    }
    input{
      width: 80%;
      height: 100%;
      background: none;
      border: none;
      outline: none;
    }
  }
  .choose{
    width: 70%;
    margin: auto;
    margin-top: .5rem;
    p{
      input{
        height: 1rem;
        vertical-align:middle;
      }
      span{
        font-size: .5rem;
        display: inline-block;
        height: .5rem;
        padding-left: .2rem;
        position: relative;
        top: -.05rem;
      }
      .now{
        float: right;
        padding-top: .2rem;
        color: white;
      }
    }
  }
  .login{
    width: 70%;
    height: 1.5rem;
    background: linear-gradient(to bottom right, purple , #066fc0 );
    margin: auto;
    text-align: center;
    line-height: 1.5rem;
    font-size: .8rem;
    color: #fff;
    letter-spacing: .5rem;
    margin-top: 1rem;
  }
  .alert{
    width: 100%;
    height: 0;
    overflow: hidden;
    text-align:center;
    margin-top: 1rem;
    color:#fff;
    background: rgba(0,0,0,.5);
  }
.warn{
  animation: wran 1.5s forwards;
}
 @keyframes wran{
    from{
      height: 0
    }
    to{
      height: 1.5rem;
      line-height: 1.5rem;
    }
 }
</style>
