<template>
  <div class="classic_container">
    <div class="image_warp">
      <img class="show_img" :src="classicData.image"/>
      <img class="play" @click="onPlay" :src="playing ? pauseSrc : playSrc"/>
    </div>
    <img class="tag" src="../../../assets/images/classic/music@tag.png"/>
    <p>{{ classicData.content }}</p>
    <audio :src="this.classicData.url" ref="eventAudio"></audio>
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
      pauseSrc: require('../../../assets/images/classic/player@pause.png'),
      playing: false
    }
  },
  methods: {
    onPlay () {
      let objAudio = this.$refs.eventAudio
      objAudio.play()
      this.playing = true
      setTimeout(() => {
        this.playing = false
      }, objAudio.duration * 1000 + 100)
    }
  },
  mounted () {
    this.playing = false
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
    audio {
      width: 0;
      height: 0;
    }
  }
</style>
