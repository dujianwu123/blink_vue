<template>
  <div :class="['share_warp',share_class]">
    <a class="share" href="javascript:;">
      <img src="../assets/images/icon/share.png" alt="">
    </a>
  </div>
</template>

<script>
export default {
  props: {
    share_class: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .share_warp{
    .share{
      display: block;
      width: 40px;
      height: 40px;
      img {
        width: 40px;
        height: 40px;
      }
    }
  }
</style>
