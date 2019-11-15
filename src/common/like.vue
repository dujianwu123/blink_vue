<template>
  <div :class="['like_warp',like_class]">
    <img @click="onLike" v-lazy="likeStatus ? yesSrc : noSrc" />
    <span>{{ likeCount }}</span>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  props: {
    like_class: {
      type: String,
      default: ''
    },
    count: {
      type: Number
    },
    likeStatus: {
      type: Boolean
    },
    readyOnly: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      yesSrc: require('@/assets/images/like/like.png'),
      noSrc: require('@/assets/images/like/like@dis.png'),
      likeCount: this.count
    }
  },
  watch: {
    count (val) {
      this.likeCount = val
    }
  },
  methods: {
    onLike: _.debounce(function () {
      if (this.readyOnly) { // 只读
        return
      }
      if (this.likeStatus) { // 喜欢->不喜欢
        this.$dispatch('likeTapStatus', false)
        this.likeCount = Number(this.likeCount) - 1
      } else { // 不喜欢->喜欢
        this.$dispatch('likeTapStatus', true)
        this.likeCount = Number(this.likeCount) + 1
      }
    }, 300)
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
