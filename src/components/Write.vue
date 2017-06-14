<template>
  <div class="hello">
    <div class="container">
      <div class="totle">
        <div class="list" v-for="(val,i) in person" >
            <span class="iconfont icon-delete" @click="remove(i)"></span>
            <dl v-if="val.sex=='girl'">
              <dt><img src="../assets/girl.png"></dt>
              <dd>{{val.name}}</dd>
            </dl>
            <dl v-if="val.sex=='boy'">
              <dt><img src="../assets/boy.png"></dt>
              <dd>{{val.name}}</dd>
            </dl>
        </div>
        <div class="list" @click="addList">
          <dl>
            <dt></dt>
            <dd class="iconfont icon-tianjia"></dd>
          </dl>
        </div>
      </div>
      <div class="write"></div>
      <div class="add" ref="addList">
        <div class="auto">
            <span @click="close">X</span>
            <p><input type="radio" value="boy" v-model="sex"/> 男 <input type="radio" value="girl" v-model="sex"/> 女</p>
            <p>新增人姓名：<input type="text" ref="name"/></p>
            <p><button class="addBtn" @click="add">添加</button></p>
        </div>
      </div>
      <div class="say" ref="warn"></div>
    </div>
    <div class="mask" ref='mask'>
          <div class="content">
            <p class="title_content">您确定要删除吗？</p>
            <p class="choose_content">
              <span class="yes" ref='yes' @click="enter">确定</span>
              <span class="no" ref='no' @click="pickOut">取消</span>
            </p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      sex: 'boy',
      person: [
        {name: '张颖', sex: 'girl'},
        {name: '张健', sex: 'boy'},
        {name: '张蕊', sex: 'girl'}
      ]
    }
  },
  methods: {
    $ (op) { // 封装获取元素方法
      return this.$refs[op]
    },
    addList () {
      this.$refs.addList.classList.add('unflod')
      this.$refs.addList.classList.remove('up')
    },
    close () {
      this.$refs.addList.classList.add('up')
      this.$refs.addList.classList.remove('unflod')
    },
    add () {
      let value = this.$refs.name.value
      let warn = this.$refs.warn
      if (value === '') {
        warn.innerHTML = '填写不能为空！'
        warn.classList.add('warn')
        setTimeout(function () {
          warn.classList.remove('warn')
        }, 2500)
      } else {
        let option = {name: value, sex: this.sex}
        console.log(option)
        this.ajaxs('../../static/js/login.json', option, this.addArr)
      }
    },
    remove (id) {
      this.$('mask').style.display = 'block'
    },
    enter (id) {
      this.person.splice(id, 1)
      this.$('mask').style.display = 'none'
    },
    pickOut () {
      this.$('mask').style.display = 'none'
    },
    ajaxs (url, option, fn) {
      this.$http.get(url, option).then(function (res) {
        fn()
      })
    },
    addArr () {
      alert()
    }
  }
}
</script>

<style lang="scss" scoped>
  .container{
    width: 100%;
    height: 100%;
    position: relative;
    .totle{
      width: 100%;
      height: auto;
      float: left;
      margin-top: 1rem;
      margin-bottom: .2rem;
      .list{
        float:left;
        width: 6.15rem;
        height: 6.15rem;
        margin-left: .2rem;
        margin-top: .2rem;
        background: linear-gradient(to bottom right, purple , pink );
        position: relative;
        span{
          position: absolute;
          right: .1rem;
          top: .2rem;
          font-weight: border;
          color: white;
        }
        dl{
          width: 100%;
          height:100%;
          padding-right: 1.5rem;
          padding-left: 1.5rem;
          padding-top: 1rem;
          dt{
            width: 100%;
            height: auto;
            img{
              width: 100%;
              height: auto;
            }
          }
          dd{
            width: 100%;
            font-size: .8rem;
            margin-top: .2rem;
            text-align: center;
          }
        }
      }
    }
    .list:last-child{
        dl{
          width: 100%;
          height: 100%;
          padding: 0;
          dt{
            height: 0;
          }
          dd{
            width: 100%;
            margin: 0;
            height: 6.15rem;
            text-align: center;
            font-size:3rem;
            color: #fff;
            line-height: 6.15rem;
          }
        }
      };
    .add{
      width: 98.8%;
      height: 0rem;
      background: blue;
      float: left;
      margin-left: .1rem;
      background: linear-gradient(to bottom right, #fff , pink );
      position: relative;
      overflow: hidden;
      .auto{
        position: relative;
        span{
          position: absolute;
          right: 0;
          top: -.5rem;
          height: 1rem;
          width: 1rem;
          background: #fff;
          text-align: center;
          line-height: 1rem;
        }
      }
      p{
        color: purple;
        font-family: "sans-serif";
        margin-top: .8rem;
        margin-left: 1rem;
        input[type^="radio"]{
          width:1rem;
          height: 1rem;
          vertical-align:middle;
          color: white;
          margin-right: 1rem;
        };
        input[type^="text"]{
          width:5rem;
          height: 1.5rem;
          vertical-align:middle;
          color:purple;
          border-color:rgba(141,39,142,.75); 
          box-shadow:0 0 18px rgba(111,1,32,3); 
        };
        button{
          width: 3rem;
          height: 1.5rem;
          color: purple;
          background: linear-gradient(to bottom right, #fff , #666 );
          margin: .5rem auto;
          font-size: .8rem;
          border: 1px solid #fff;

        }
      }
    }
    .add.unflod{
      animation: unflod .5s forwards
    }
    .add.up{
      animation: up .5s forwards
    }
    @keyframes up{
      0%{
        height: 8rem;
      }
      100%{
        height: 0rem;
      }
    } 
    @keyframes unflod{
      0%{
        height: 0;
      }
      100%{
        height: 8rem;
      }
    } 
    /* .auto{
      position: absolute;
      left: 0;
      top: 0;
      bottom:0;
      right:0;
      margin: auto;
    } */
    /* .add{
      width: 98.8%;
      height: 20px;
      background: red;
      float: left;
      margin-left: .1rem;
    } */
    .say{
      width: 100%;
      height: 0;
      overflow: hidden;
      text-align:center;
      margin-top: 1rem;
      color:#fff;
      background: rgba(0,0,0,1)
    }
    .say.warn{
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
  }
  .mask{
    display: none;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, .8);
    .content{
      width: 15rem;
      height: 5rem;
      background: linear-gradient(to bottom right, purple , #666 );
      border-radius: .5rem;
      border: 1px solid #fff;
      margin: auto;
      margin-top: 10rem;
      .title_content{
        height:3rem;
        width: 100%;
        line-height: 3rem;
        text-align: center;
        border-bottom: 1px solid #666;
        font-size: .8rem;
        color: #fff;
      }
      .choose_content{
        width: 100%;
        height: 2rem;
        display: flex;
        span{
          flex: 1;
          width: 100%;
          height: 2rem;
          text-align: center;
          line-height: 2rem;
          color: #fff;
        }
        .no{
          border-left: 1px solid #666;
        }
      }
    }
  }
</style>
