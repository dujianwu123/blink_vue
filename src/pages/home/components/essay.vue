<template>
  <div class="classic_container">
    <img class="show_img" :src="classicData.image"/>
    <img class="tag" src="../../../assets/images/classic/essay@tag.png"/>
    <p>{{classicData.content}}</p>
  </div>
</template>

<script>
export default {
  props: {
    classicData: {
      type: Object
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .classic_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    .show_img {
      width: 100%;
      height: 500px;
    }
    .tag {
      width: 46px;
      height: 142px;
      // margin-top: -60px;
      // margin-bottom: 40px;
      position: relative;
      right: 310px;
      bottom: 58px;
    }
    p {
      max-width: 550px;
      font-size: 36px;
      line-height: 50px;
    }
  }
</style>
