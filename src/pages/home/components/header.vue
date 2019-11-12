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
    <Like :like_class="like_class" :count="'123'" />
    <!-- <分享> -->
    <Share :share_class="share_class" />
  </div>
</template>

<script>
import Like from '@/common/like.vue'
import Share from '@/common/share.vue'
import axios from '@/util/axios.js'
// import axios from 'axios'
export default {
  components: {
    Like,
    Share
  },
  data () {
    return {
      like_class: 'classic_like',
      share_class: 'share_class'
    }
  },
  mounted () {
    // axios.defaults.baseURL = '/api'
    // axios.defaults.headers = {
    //   appkey: 'AbhC31IG7ruCDp57'
    // }
    // console.log(1111111)
    // axios.get('book/hot_list')
    // // axios.get('http://bl.7yue.pro/v1/book/hot_list').then((res) => {
    // //   console.log(res);
    // // }).catch((err) => {
    // //   console.log(err);
    // // })

    axios.request({
      url: '/classic/latest',
      method: 'GET'
    }).then((res) => {
      console.log(res)
    })
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
      right: 69px;
      top: 32px;
    }
    .share_class {
      position: absolute;
      right: 31px;
      top: 38px;
    }
  }
</style>
