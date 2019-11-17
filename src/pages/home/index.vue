<template>
  <div>
    <Header
      @likeTapStatus="likeTapStatus"
      :index="this.classicData.index"
      :likeStatus="likeStatus"
      :count="this.classicData.fav_nums"
    />
    <Movie
      :classicData="classicData"
      v-show="classicData.type === 100"
    />
    <Essay
      :classicData="classicData"
      v-show="classicData.type === 300"
    />
    <Music
      :classicData="classicData"
      v-if="classicData.type === 200"
    />
    <Nav
      @onLeft="onPreviou"
      @onRight="onNext"
      :title="classicData.title"
      class="classic_nav_warp"
      :latest="latest"
      :first="first"
    />
  </div>
</template>

<script>
import Header from './components/header'
import Movie from './components/movie'
import Essay from './components/essay'
import Music from './components/music'
import Nav from './components/nav'
import classicApi from '@/api/classic.js'
import likeApi from '@/api/like.js'
export default {
  components: {
    Header,
    Movie,
    Nav,
    Essay,
    Music
  },
  data () {
    return {
      // 点赞的状态
      likeStatus: false,
      // 流行信息
      classicData: {},
      // 是否是最新一期
      latest: true,
      // 是否是最早一期
      first: false
    }
  },
  methods: {
    // 点赞或取消点赞 接收like子组件触发
    likeTapStatus (status) {
      this.likeStatus = status
      if (status) {
        likeApi.like('', this.classicData.id, this.classicData.type)
      } else {
        likeApi.like('cancel', this.classicData.id, this.classicData.type)
      }
    },
    // 获取新一期
    async onPreviou () {
      if (!classicApi.getIsLatest(this.classicData.index)) {
        let res = await classicApi.getClassic(this.classicData.index, 'next')
        this._updataClassicData(res.data)
      }
    },
    // 获取旧一期
    async onNext () {
      if (!classicApi.getIsFirst(this.classicData.index)) {
        let res = await classicApi.getClassic(this.classicData.index, 'previous')
        this._updataClassicData(res.data)
      }
    },
    _updataClassicData (data) {
      this.classicData = data
      if (this.classicData.like_status === 1) {
        this.likeStatus = true
      } else {
        this.likeStatus = false
      }
      this.latest = classicApi.getIsLatest(this.classicData.index)
      this.first = classicApi.getIsFirst(this.classicData.index)
    }

  },
  created () {
    // 获取最新一期数据
    classicApi.getLatest().then((res) => {
      this.classicData = res.data
      if (this.classicData.like_status === 1) {
        this.likeStatus = true
      } else {
        this.likeStatus = false
      }
      localStorage.setItem('latest', this.classicData.index)
    })
  }
}
</script>

<style lang="scss">
// .nav {
//   display: none!important;
// }
</style>

<style lang="scss" scoped>
  .classic_nav_warp {
    position: absolute;
    bottom: 160px;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
