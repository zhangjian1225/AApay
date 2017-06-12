<template>
    <div class="container">
        <header>
            <p><span>记账</span><label class="iconfont icon-xuanzechuzhi01"></label></p>
        </header>
        <section></section>
        <footer></footer>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .container{
    height:100%;
    width: 100%;
    background: url("../assets/home_bg.jpg") no-repeat;
    background-size: cover;
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
</style>
