<template>
  <div id="app">
    <router-view class="top"/>

    <div class="nav">
      <router-link :to="{ path: '/' }">
        <span class="iconfont">&#xe8f4;</span>
        <p>流行</p>
      </router-link>
      <router-link :to="{ path: '/book' }">
        <span class="iconfont">&#xe601;</span>
        <p>书单</p>
      </router-link>
      <router-link :to="{ path: '/my' }">
        <span class="iconfont">&#xe600;</span>
        <p>我的</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
  html,body{
    height: 100%;
  }
  #app {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    .top {
      width: 100%;
      flex-grow: 1;
      overflow-y:auto;
    }
    .nav {
      width: 100%;
      height: 88px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .router-link-exact-active{
        color: #000;
        p{
          color: #000;
        }
      }
      span{
        font-size: 36px;
        font-weight: bold;
      }
      p{
        font-size: 20px;
        font-weight: bold;
        color: #c7c7c7;
        margin-top: 8px;
      }
    }
  }
</style>
