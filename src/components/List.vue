<template>
  <div class="hello">
      <div class="container">
          <div class="content">
            <span ref="icons" class="icons" @click="showHide"></span>
            <div class="list" ref='list'> 
              <ul>
                <li>张健</li>
                <li>张健</li>
                <li>张健</li>
                <li>张健</li>
                <li>张健</li>
                <li>张健</li>
                <li>张健</li>
                <li>张健</li>
                <li>张健</li>
                <li>张健张张</li>
                <li>张健</li>
                <li>张健</li>
                <li>张健</li>
                <li>张健</li>
                <li>张健</li>
                <li>张健</li>
                <li>张健</li>
                <li>张健</li>
                <li>张健</li>
                <li>张健</li>
              </ul>
            </div>
            <div class="text">

            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      show_hide: false // 是否选择框显示
    }
  },
  methods: {
    $ (op) { // 封装获取元素方法
      return this.$refs[op]
    },
    showHide () {
      if (!this.show_hide) {
        this.$('list').classList.add('show')
        this.$('list').classList.remove('hide')
      } else {
        this.$('list').classList.add('hide')
        this.$('list').classList.remove('show')
      }
      this.show_hide = !this.show_hide
    }
  }
}
</script>

<style lang="scss" scoped>
  ::-webkit-scrollbar {
    width: 0px;
  }
  .hello{
    width: 100%;
    height: 100%;
  }
  .container{
    width: 100%;
    height: 100%;
    .icons{
      position: fixed;
      width: 1.5rem;
      height: 2rem;
      background: #ccc;
      border-radius: 100%;
      z-index: 10;
      left: -.75rem;
    }
  }
  .content{
    width: 100%;
    height: 100%;
    display: flex;
  }
  .list{
    width: 0;
    height: 100%;
    overflow: auto;
    position: relative;
    ul{
      width: auto;
      height: auto;
      background: linear-gradient(to bottom right, purple , pink );
      li{
        color: #fff;
        font-size: .8rem;
        padding: .5rem;
        border: 1px solid white;
        letter-spacing: .3em;
        word-spacing: .3em;
      }
    }
  }
  .text{
    width: 100%;
    height: 100%;
    background: #fff;
    flex: 1;
  }
  .list.show{
    animation: shows 1s forwards
  }
  @keyframes shows{
    0%{
      width: 0;
    }
    100%{
      width: 3.2rem;
    }
  }
  .list.hide{
    animation: hides 1s forwards
  }
  @keyframes hides{
    0%{
      width: 3.2rem
    }
    100%{
      width: 0;
    }
  }
</style>
