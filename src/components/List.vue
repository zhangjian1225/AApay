<template>
  <div class="hello">
      <div class="container">
          <div class="content">
            <span ref="icons" class="icons" @click="showHide">展开</span>
            <div class="list" ref='list'> 
              <ul>
                <li v-for="(val,i) in nameList">{{val.user}}</li>
              </ul>
            </div>
            <div class="text">
              <div class="hed">
                <h4>{{name}}的账单<span class="iconfont icon-icon" @click="openList"></span></h4>
                <p><span class="listDate">日期</span><span class="listGoods">物品</span><span class="listMoney">金额 / 元</span></p>
              </div>
              <div class="details">
                <ol>
                  <li  v-for="(val,i) in list.datas"><span class="listDate">{{val.date}}</span><span class="listGoods">{{val.good}}</span><span class="listMoney">{{val.money}}</span></li>
                </ol>
              </div>
              <div class="history" ref="listMore">
                <p>消费情况<span @click="closeList">X</span></p>
                <ol>
                  <li>本月消费：100元</li>
                  <li>张健消费：100元</li>
                  <li>张健消费：100元</li>
                  <li>张健消费：100元</li>
                  <li>张健消费：100元</li>
                </ol>
                <p>结算情况</p>
                <ul>
                  <li>张健需给张颖10元</li>
                  <li>张蕊需给张健10元</li>
                  <li>张颖需给张蕊10元</li>
                </ul>
              </div>
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
      show_hideList: false, // 是否选择框显示
      name: '全部',
      nameList: [
        {user: '全部', id: 1},
        {user: '张颖', id: 2},
        {user: '张蕊', id: 3},
        {user: '张江涛', id: 4},
        {user: '张小娟', id: 5},
        {user: '张健', id: 6}
      ],
      list: {id: 1,
        datas: [
          {
            date: '2017/09/21',
            good: '水',
            money: '23.4'
          },
          {
            date: '2017/09/21',
            good: '水果',
            money: '23.4'
          },
          {
            date: '2017/09/21',
            good: '蔬菜',
            money: '23.4'
          },
          {
            date: '2017/09/21',
            good: '柴、米、油、盐、酱、醋、茶',
            money: '23.4'
          },
          {
            date: '2017/09/21',
            good: '吃饭',
            money: '23.4'
          },
          {
            date: '2017/09/21',
            good: '逛街',
            money: '23.4'
          },
          {
            date: '2017/09/21',
            good: '蔬菜',
            money: '23.4'
          },
          {
            date: '2017/09/21',
            good: '蔬菜',
            money: '23.4'
          },
          {
            date: '2017/09/21',
            good: '蔬菜',
            money: '23.4'
          },
          {
            date: '2017/09/21',
            good: '蔬菜',
            money: '23.4'
          },
          {
            date: '2017/09/21',
            good: '蔬菜',
            money: '23.4'
          },
          {
            date: '2017/09/21',
            good: '蔬菜',
            money: '23.4'
          },
          {
            date: '2017/09/21',
            good: '蔬菜',
            money: '23.4'
          },
          {
            date: '2017/09/21',
            good: '蔬菜',
            money: '23.4'
          },
          {
            date: '2017/09/21',
            good: '蔬菜',
            money: '23.4'
          },
          {
            date: '2017/09/21',
            good: '蔬菜',
            money: '23.4'
          }
        ]}
    }
  },
  methods: {
    $ (op) { // 封装获取元素方法
      return this.$refs[op]
    },
    showHide () {
      if (!this.show_hideList) {
        this.$('list').classList.add('showList')
        this.$('list').classList.remove('hideList')
        this.$('icons').classList.add('icon_down')
        this.$('icons').classList.remove('icon_up')
        this.$('icons').innerHTML = '收起'
      } else {
        this.$('list').classList.add('hideList')
        this.$('list').classList.remove('showList')
        this.$('icons').classList.add('icon_up')
        this.$('icons').classList.remove('icon_down')
        this.$('icons').innerHTML = '展开'
      }
      this.show_hideList = !this.show_hideList
    },
    openList () {
      this.$('listMore').classList.add('his_open')
      this.$('listMore').classList.remove('his_close')
    },
    closeList () {
      this.$('listMore').classList.add('his_close')
      this.$('listMore').classList.remove('his_open')
    }
  }
}
</script>

<style lang="scss" scoped>
  /* ::-webkit-scrollbar {
    width: 0px;
  } */
  ul,ol,li{
    list-style: none;
  }
  .hello{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .container{
    width: 100%;
    height: 100%;
    overflow: hidden;
    .icons{
      position: fixed;
      width: 3rem;
      height: 2rem;
      color: purple;
      background:rgba(225,225,225,.5);
      text-align: center;
      font-size: .7rem;
      padding-top: .4rem;
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
    flex: 1;
    width: 100%;
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    .hed{
      width: 100%;
      height: auto;
      h4{
        width: 100%;
        height: 2rem;
        background: linear-gradient(to bottom right, #fff , pink );
        text-align: center;
        line-height: 2rem;
        font-size: .9rem;
        font-weight: border;
        letter-spacing: .2rem;
        span{
          display: inline-block;
          height: 100%;
          width:2rem;
          color: purple;
          float: right;
          font-size: 1rem;
        }
      }
      p{
        width: 100%;
        height: 2rem;
        line-height: 2rem;
        display: flex;
        border-bottom: 1px solid white;
        border-top: 1px solid white;
        span{
          color: purple
        }
      }
    }
    .details{
      width: 100%;
      height: 100%;
      flex: 1;
      overflow: auto;
      ol{
        width: 100%;
        height: 100%;
        flex: 1;
        li{
          width: 100%;
          height: auto;
          display: flex;
          vertical-align:middle;
          border-bottom: 1px solid white;
          span{
            color: white;
          }
        }
      }
    }
  }
    
  .listDate{
    display: inline-block;
    width: 5.5rem;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    border-right: 1px solid #fff;
    border-left: 1px solid #fff;
  }
  .listMoney{
    display: inline-block;
    width: 5.5rem;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
  }
  .listGoods{
    flex:1;
    display: inline-block;
    width: 100%;
    height: 2rem;
    text-align: center;
    line-height: 2rem;
    border-right: 1px solid #fff;
    overflow: auto;
  }
  .history{
    width: 100%;
    height: 0rem;
    background: white;
    overflow: auto;
    p{
      font-size: 1rem;
      background: purple;
      height: 1.5rem;
      line-height: 1.5rem;
      color: white;
      text-align: center;
      span{
        height: 100%;
        width: 1.5rem;
        text-align: center;
        line-height: 1.5rem;
        float:right;
        background: orange;
      }
    }
    ol,ul{
      padding: 1rem;
      li{
        line-height: 1.5rem;
      }
    }
  }
  .his_open{
    animation: his_open 1s forwards
  }
  @keyframes his_open{
    0%{
      height: 0;
    }
    100%{
      height: 10rem;
    }
  }
  .his_close{
    animation: his_close 1s forwards
  }
  @keyframes his_close{
    0%{
      height: 10rem;
    }
    100%{
      height: 0rem;
    }
  }

  .list.showList{
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
  .list.hideList{
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
  .container .icon_down{
    animation: icon_down 1s forwards
  }
  .container .icon_up{
    animation: icon_up 1s forwards
  }
  @keyframes icon_down{
    0%{
      left:0rem
    }
    100%{
      left:3.2rem
    }
  }
  @keyframes icon_up{
    0%{
      left:3.2rem
    }
    100%{
      left:0rem
    }
  }
</style>
