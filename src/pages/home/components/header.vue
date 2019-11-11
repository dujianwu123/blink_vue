<template>
  <div class="header">
    <div class="hearder_date">
      No.<span class="day">17</span><span class="shu"></span>
    </div>
    <div>
      <p class="month">三月</p>
      <p class="year">2018</p>
    </div>
    <!-- <link> -->
    <!-- <分享> -->
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
  .header{
    width: 100%;
    height: 100px;
    display: flex;
    color: #000;
    .hearder_date{
      padding-top: 28px;
      padding-left: 30px;
      font-size: 32px;
      .day{
        font-size: 58px;
      }
      .shu{
        display: inline-block;
        width: 2px;
        height: 42px;
        background: #000;
        margin: 0 14px;
      }
    }
    .year{
      font-size: 20px;
      font-weight: bold;
    }
    .month{
      font-size: 24px;
      font-weight: bold;
      padding-top: 28px;
      padding-bottom: 7px;
    }
  }
</style>
