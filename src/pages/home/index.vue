<template>
  <div>
    <Header></Header>
    <Movie></Movie>
    <Nav class="classic_nav_warp"></Nav>
  </div>
</template>

<script>
import Header from './components/header'
import Movie from './components/movie'
import Nav from './components/nav'
export default {
  components: {
    Header,
    Movie,
    Nav
  },
  data () {
    return {
    }
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
