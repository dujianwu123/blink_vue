<template>
  <div>
    <Header @likeTapStatus="likeTapStatus" :likeStatus="likeStatus"></Header>
    <!-- <Movie></Movie> -->
    <!-- <Essay></Essay> -->
    <Music></Music>
    <Nav class="classic_nav_warp"></Nav>
  </div>
</template>

<script>
import Header from './components/header'
import Movie from './components/movie'
import Essay from './components/essay'
import Music from './components/music'
import Nav from './components/nav'
import classicApi from '@/api/classic.js'
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
      likeStatus: true
    }
  },
  methods: {
    likeTapStatus (data) {
      this.likeStatus = data
    }
  },
  created () {
    classicApi.getLatest().then((res) => {
      console.log('classicApi', res)
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
