<template>
  <div class="hello">
    <div class="container">
      <div class="totle">
        <div class="list">
          <dl>
            <dt><img src="../assets/girl.png"></dt>
            <dd>张颖</dd>
          </dl>
        </div>
        <div class="list">
          <dl>
            <dt><img src="../assets/boy.png"></dt>
            <dd>张健</dd>
          </dl>
        </div>
        <div class="list">
          <dl>
            <dt><img src="../assets/girl.png"></dt>
            <dd>张颖</dd>
          </dl>
        </div>
        <div class="list">
          <p class="iconfont icon-tianjia"></p>
        </div>
      </div>
      <div class="write"></div>
      <div class="add"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .container{
    width: 100%;
    height: 100%;
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
        p{
          width: 100%;
          height: 100%;
          text-align: center;
          line-height: 6.25rem;
          font-size: 3rem;
          color: #fff;
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
    .write{
      width: 98.8%;
      height: 8rem;
      background: blue;
      float: left;
      margin-left: .1rem;
      background: linear-gradient(to bottom right, #fff , pink );
    }
    /* .add{
      width: 98.8%;
      height: 20px;
      background: red;
      float: left;
      margin-left: .1rem;
    } */
  }
</style>
