<template>
  <div class="hello">
      <div class="container">
          <div class="userImg"><div class="iconfont icon-xiaohai icon"></div></div>
          <div class="content">
              <div class="username commen">
                  <p><span>账户</span><input type="text" /></p>
              </div>
              <div class="userpassword commen">
                  <p><span>密码</span><input type="password" ref="show_hide"/><label class="iconfont icon-biyan" @click="showHide" ref="font"></label></p>
              </div>
              <div class="choose">
                  <p><input type="checkbox" /><span>记住密码？</span><router-link to="/Register"><span class="now">立即注册</span></router-link></p>
              </div>
              <div class="login" @click="alert">登陆</div>
              <h4 class="alert">knkjjjhjhjh</h4>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      type: true
    }
  },
  methods: {
    showHide () {
      if (this.type) {
        this.$refs.show_hide.setAttribute('type', 'text')
        this.$refs.font.setAttribute('class', 'iconfont icon-yan')
      } else {
        this.$refs.show_hide.setAttribute('type', 'password')
        this.$refs.font.setAttribute('class', 'iconfont icon-biyan')
      }
      this.type = !this.type
    },
    alert () {}
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
      line-height: 3.5rem;
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
    text-align:center;
    line-height: 1.5rem;
    margin-top: 1rem;
    color: red;
  }
 
</style>
