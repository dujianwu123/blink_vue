<template>
  <div :class="['like_warp',like_class]">
    <img v-lazy="yesSrc" />
    <span>{{count}}</span>
  </div>
</template>

<script>
export default {
  props: {
    like_class: {
      type: String,
      default: ''
    },
    count: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      yesSrc: require('@/assets/images/like/like.png'),
      noSrc: require('@/assets/images/like/like@dis.png')
    }
  }
}
</script>

<style lang="scss" scoped>
.like_warp {
  display: inline-flex;
  flex-direction: row;
  /* 解决数字不能完全显示的问题 */
  padding: 10px;
  width:90px;
  img {
    width: 32px;
    height: 28px;
  }
  span{
    font-size: 24px;
    line-height: 24px;
    color: #bbbbbb;
    position: relative;
    bottom: 10px;
    left: 6px;
  }
}
</style>
