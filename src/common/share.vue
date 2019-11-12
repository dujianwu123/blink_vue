<template>
  <div :class="['share_warp',share_class]">
    <a class="share" href="javascript:;"></a>
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
      background-size: 100% 100%;
      background: url('~@/assets/images/icon/share.png') no-repeat;
    }
  }
</style>
