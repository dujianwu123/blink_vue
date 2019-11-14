<template>
  <div class="classic_nav">
    <a class="nav_left" href="javascript:;"></a>
    <span>李安饮食男女</span>
    <a class="nav_right" href="javascript:;"></a>
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
  .classic_nav {
    width: 588px;
    height: 80px;
    background: #f7f7f7;
    display: flex;
    align-items: center;
    .nav_left {
      width: 80px;
      height: 80px;
      background: url('~@/assets/images/classic/triangle@left.png') no-repeat;
      background-size: 100% 100%;
    }
    span {
      text-align: center;
      flex-grow: 1;
      font-size: 34px;
    }
    .nav_right {
      width: 80px;
      height: 80px;
      background: url('~@/assets/images/classic/triangle@right.png') no-repeat;
      background-size: 100% 100%;
    }
  }
</style>
