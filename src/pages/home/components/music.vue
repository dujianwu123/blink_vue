<template>
  <div class="classic_container">
    <div class="image_warp">
      <img class="show_img" :src="classicData.image"/>
      <img class="play" :src="playSrc"/>
    </div>
    <img class="tag" src="../../../assets/images/classic/music@tag.png"/>
    <p>{{ classicData.content }}</p>
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
      playSrc: require('../../../assets/images/classic/player@play.png'),
      pauseSrc: require('../../../assets/images/classic/player@pause.png')
    }
  }
}
</script>

<style lang="scss" scoped>
  .classic_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    .image_warp{
      position: relative;
      .show_img {
        width: 422px;
        height: 422px;
        margin-top: 60px;
        border-radius: 50%;
      }
      .play {
        width: 120px;
        height: 120px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        margin-top: 30px;
      }
    }
    .tag {
      width: 46px;
      height: 142px;
      position: relative;
      right: 310px;
      bottom: 58px;
    }
    p {
      max-width: 370px;
      font-size: 36px;
      line-height: 50px;
    }
  }
</style>
