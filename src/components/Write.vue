<template>
  <div class="hello">
    <div class="container">
      <div class="totle">
        <div class="list" v-for="(val,i) in person">
            <span class="iconfont icon-delete" @click="remove(val.id)"></span>
            <dl v-if="val.sex=='girl'" @click="rember(val.id)">
              <dt><img src="../assets/girl.png"></dt>
              <dd>{{val.name}}</dd>
            </dl>
            <dl v-if="val.sex=='boy'" @click="rember(val.id)">
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
      <div class="write" ref="write">
        <span @click="rember_out" ref="write_out">X</span>
        <p>时间：<input type="date"/></p>
        <p>物品：<input type="text"/></p>
        <p>金额：<input type="text" placeholder="金额为小数点后一位" @keydown="testNum" @click="clean" ref="Num"/></p>
        <p><button>确定</button></p>
      </div>
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
      id: '',
      person: [
        {name: '张颖', sex: 'girl', id: '1'},
        {name: '张健', sex: 'boy', id: '2'},
        {name: '张蕊', sex: 'girl', id: '3'}
      ]
    }
  },
  methods: {
    $ (op) { // 封装获取元素方法
      return this.$refs[op]
    },
    addList () {
      this.$('addList').classList.add('unflod')
      this.$('addList').classList.remove('up')
      this.$('write').classList.remove('write_unflod')
    },
    close () {
      this.$('addList').classList.add('up')
      this.$('addList').classList.remove('unflod')
    },
    add () { // 添加用户
      let value = this.$refs.name.value
      let warn = this.$refs.warn
      if (value === '') {
        warn.innerHTML = '填写不能为空！'
        warn.classList.add('warn')
        setTimeout(function () {
          warn.classList.remove('warn')
        }, 2500)
      } else {
        let option = {name: value, sex: this.sex, id: this.person.length + 1}
        this.ajaxs('../../static/js/write.json', option, this.addArr, warn)
      }
    },
    remove (id) {
      this.$('mask').style.display = 'block'
      this.id = id
      this.$('addList').classList.remove('unflod')
      this.$('write').classList.remove('write_unflod')
    },
    enter () { // 删除的确定按钮
      let id = this.id
      for (var i = 0; i < this.person.length; i++) {
        if (this.person[i].id === id) {
          this.person.splice(i, 1)
        }
      }
      this.$('mask').style.display = 'none'
    },
    pickOut () { // 删除的取消
      this.$('mask').style.display = 'none'
    },
    ajaxs (url, option, fn, warn) {
      this.$http.get(url, option).then(function (res) {
        let data = JSON.parse(res.bodyText)
        if (data.responseObject.code === '1') {
          warn.innerHTML = '注册成功'
          warn.classList.add('warn')
          fn(option)
        } else {
          warn.innerHTML = '注册失败'
          warn.classList.add('warn')
        }
        let that = this
        setTimeout(function () {
          warn.classList.remove('warn')
          that.$('addList').classList.add('up')
          that.$('addList').classList.remove('unflod')
        }, 2500)
      })
    },
    addArr (option) {
      this.person.push(option) // 无接口写法
      // 有接口的话发请求
    },
    rember () { // 出现记账框
      this.$('write').classList.add('write_unflod')
      this.$('write').classList.remove('write_up')
      this.$('addList').classList.remove('unflod')
    },
    rember_out () { // 出现记账框
      this.$('write').classList.add('write_up')
      this.$('write').classList.remove('write_unflod')
    },
    testNum () { // 判断输入金额是否正确
      if (!/^\d*\.{0,1}\d{0,1}$/.test(this.$('Num').value) && window.event.keyCode !== 8) {
        this.$('Num').value = '输入金额格式不正确'
      }
    },
    clean () {
      this.$('Num').value = ''
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
    .write{
      width: 98.8%;
      height: 0rem;
      overflow: hidden;
      background: linear-gradient(to bottom right, #fff , pink );
      float: left;
      margin-left: .1rem;
      position: relative;
      span{
        position: absolute;
        right: 0;
        top: 0rem;
        height: 1rem;
        width: 1rem;
        background: #fff;
        text-align: center;
        line-height: 1rem;
      }
      p{
        margin-top: .8rem;
        margin-left: .2rem
      }
      input{
        height: 1.5rem;
        padding-left: .2rem;
        font-size: .8rem;
        vertical-align:middle;
        color:purple;
        border-color:rgba(141,39,142,.75); 
        box-shadow:0 0 18px rgba(111,1,32,3);
      }
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
    .write.write_unflod{
      animation: write_unflod .5s forwards
    }
    .write.write_up{
      animation: write_up .5s forwards
    }
    @keyframes write_up{
      0%{
        height: 10.5rem;
      }
      100%{
        height: 0rem;
      }
    } 
    @keyframes write_unflod{
      0%{
        height: 0;
      }
      100%{
        height: 10.5rem;
      }
    } 
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
