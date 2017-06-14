<template>
  <div class="hello">
      <div class="container">
          <div class="userImg"><div class="iconfont icon-xiaohai icon"></div></div>
          <div class="content">
              <div class="username commen">
                  <p><span>账户</span><input type="number" ref="userName" placeholder="输入您的账号" /></p>
              </div>
              <div class="userpassword commen">
                  <p><span>密码</span><input type="password" ref="show_hide" placeholder="输入您的密码" /><label class="iconfont icon-biyan" @click="showHide" ref="font"></label></p>
              </div>
              <div class="choose">
                  <p><input type="checkbox" v-model='status'/><span>记住密码？</span><router-link to="/Register"><span class="now">立即注册</span></router-link></p>
              </div>
              <div class="login" @click="alert">登陆</div>
              <h4 class="alert" ref="warn"></h4>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      type: true,
      status: true
    }
  },
  methods: {
    showHide () {
      if (this.type) {
        this.$refs.show_hide.setAttribute('type', 'text')
        this.$refs.font.setAttribute('class', 'iconfont icon-yan')
        this.$refs.font.style.color = 'black'
      } else {
        this.$refs.show_hide.setAttribute('type', 'password')
        this.$refs.font.setAttribute('class', 'iconfont icon-biyan')
        this.$refs.font.style.color = '#666'
      }
      this.type = !this.type
    },
    alert () {
      const userName = this.$refs.userName.value
      const passWord = this.$refs.show_hide.value
      const warn = this.$refs.warn
      if (userName === '' || passWord === '') {
        warn.innerHTML = '账号密码不能为空!'
        warn.classList.add('warn')
        setTimeout(function () {
          warn.classList.remove('warn')
        }, 2500)
      } else {
        let option = {userName: userName, passWord: passWord}
        this.$http.get('../../static/js/login.json', option).then(function (res) {
          let data = JSON.parse(res.bodyText)
          if (data.responseObject.code === '0') {
            warn.innerHTML = '密码错误'
            warn.classList.add('warn')
            setTimeout(function () {
              warn.classList.remove('warn')
            }, 2500)
          } else {
            // 判断是否记住密码
            let check = this.status
            if (check) {
              window.localStorage.setItem('userName', userName)
              window.localStorage.setItem('passWord', passWord)
            } else {
              window.localStorage.removeItem('userName')
              window.localStorage.removeItem('passWord')
            }
            this.$router.push('/Write')
          }
        })
      }
    }
  },
  mounted () {
    if (window.localStorage.getItem('userName') && window.localStorage.getItem('passWord')) {
      this.$router.push('/Write')
      let option = {userName: window.localStorage.getItem('userName'), passWord: window.localStorage.getItem('passWord')}
      console.log(option)
      /* this.$http.get('../../static/js/login.json', option).then(function (res) {
        console.log(1)
      }) */
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
    top: 15%;
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
      font-size: .8rem;
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
        top: -.1rem;
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
