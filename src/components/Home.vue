<template>
    <div class="container">
        <header>
            <p><span>{{title}}</span><label class="iconfont icon-xuanzechuzhi01"></label></p>
        </header>
        <section>
            <router-view></router-view>
        </section>
        <footer>
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
      title: '记账'
    }
  },
  methods: {
    cut (now, pash, title) {
      if (!this.$refs[now].getAttribute('class', 'show')) {
        this.$refs[now].setAttribute('class', 'show')
        this.$refs[pash].setAttribute('class', '')
        this.title = title
      }
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
    overflow: auto;
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
    p{
      span{
        font-weight: bold;
        font-family: "Arial";
        letter-spacing: 1em;
        color: purple;
        margin-left: 8rem;
      }
      label{
        float:right;
        font-size: 1.5rem;
        color: purple;
        margin-right: .4rem;
      }
    }
  }
  section{
    flex: 1;
    width: 100%;
    height: 100%;
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
