<template>
  <div class="header">
    <div class="hearder_date">
      No.<span class="day">{{ day }}</span><span class="shu"></span>
    </div>
    <div>
      <p class="month">{{ month }}</p>
      <p class="year">{{ year }}</p>
    </div>
    <!-- <link> -->
    <Like :likeStatus="likeStatus" :like_class="like_class" :count="'123'" />
    <!-- <分享> -->
    <Share :share_class="share_class" />
  </div>
</template>

<script>
import Like from '@/common/like.vue'
import Share from '@/common/share.vue'
export default {
  props: {
    likeStatus: {
      type: Boolean
    }
  },
  components: {
    Like,
    Share
  },
  data () {
    return {
      like_class: 'classic_like',
      share_class: 'share_class',
      day: '',
      months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
      month: '',
      year: ''
    }
  },
  created () {
    let now = new Date()
    this.day = now.getDate()
    this.month = this.months[now.getMonth()]
    this.year = now.getFullYear()
  }
}
</script>

<style lang="scss" scoped>
  .header{
    position: relative;
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

    .classic_like {
      position: absolute;
      right: 76px;
      top: 32px;
    }
    .share_class {
      position: absolute;
      right: 31px;
      top: 38px;
    }
  }
</style>
