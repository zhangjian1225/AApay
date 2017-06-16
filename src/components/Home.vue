<template>
    <div class="container" ref="body">
        <header>
            <div><span @click="removeOut">{{title}}</span><label class="iconfont icon-xuanzechuzhi01" @click="outList"></label><p ref="out" @click="out">退出</p></div>
        </header>
        <section @click="removeOut">
            <router-view></router-view>
        </section>
        <footer @click="removeOut">
            <ul>
                <li ref="write" @click="cut('write','list','记账')" class="show"><router-link to="/Write"><span class="iconfont icon-edit"></span></router-link></li>
                <li ref="list" @click="cut('list','write','账单')"><router-link to="/List"><span class="iconfont icon-jian"></span></router-link></li>
            </ul>
        </footer>
    </div>
</template>

<script>
export default {
  data () {
    return {
      title: '记账',
      down: true
    }
  },
  methods: {
    cut (now, pash, title) {
      if (!this.$refs[now].getAttribute('class', 'show')) {
        this.$refs[now].setAttribute('class', 'show')
        this.$refs[pash].setAttribute('class', '')
        this.title = title
      }
    },
    outList () {
      if (this.down) {
        this.$refs.out.classList.add('out')
        this.$refs.out.classList.remove('pick')
      } else {
        this.$refs.out.classList.add('pick')
      }
      this.down = !this.down
    },
    out (e) { // 退出
      let el = e || window.event
      el.stopPropagation()
      this.$refs.out.classList.remove('out')
      window.localStorage.removeItem('userName')
      window.localStorage.removeItem('passWord')
      this.$router.push('/')
    },
    removeOut () { // 退出收起
      if (this.down) {
        this.$refs.out.classList.remove('out')
      } else {
        this.$refs.out.classList.add('pick')
      }
      this.down = true
    }
  }
}
</script>

<style lang="scss" scoped>
  ul,ol,li{
    list-style: none;
  }
  .container{
    height:100%;
    width: 100%;
    background: url("../assets/home_bg.jpg") no-repeat;
    background-size: cover;
    display: flex;
    flex-direction:column;
  }
  header{
    width: 100%;
    height: 2rem;
    background:linear-gradient(to bottom right,#ccc, #fff);
    line-height: 2rem;
    div{
      position: relative;
      span{
        font-weight: bold;
        font-family: "Arial";
        letter-spacing: 1em;
        color: purple;
        width: 17rem;
        display: inline-block;
        text-align: center;
        padding-left: 2.5rem;
      }
      label{
        float:right;
        font-size: 1.5rem;
        color: purple;
        margin-right: .4rem;
      }
      p{
        width: 2rem;
        height: 0;
        overflow: hidden;
        position: absolute;
        font-size: .8rem;
        text-align: center;
        right: 0;
        z-index: 100;
        background: linear-gradient(to bottom right,#ccc, #fff);
      }
      p.out{
        animation: out 1s forwards;
      }
      p.pick{
        animation: pick 1s forwards;
      }
      @keyframes out{
        from{
          height: 0
        }
        to{
          height: 3rem;
        }
      }
      @keyframes pick{
        from{
          height: 3rem;
        }
        to{
          height: 0rem;
        }
      }
    }
  }
  section{
    flex: 1;
    width: 100%;
    height: 100%;
    overflow: auto;
  }
  footer{
    width: 100%;
    height: 2rem;
    ul{
      width:100%;
      height: 2rem;
      background: linear-gradient(to bottom right,#ccc, #fff);
      display: flex;
    }
    li{
        width: 100%;
        height: 2rem;
        flex:1;
        span{
          display: block;
          width: 100%;
          line-height: 2rem;
          text-align: center;
          font-size: 1rem;
          color: purple
        }
        a{
          text-decoration: none
        }
    }
    .show{
      background: linear-gradient(to bottom right,pink, purple);
      span{
        color: white;
        font-size: 1.3rem;
      }
    }
  }
</style>
