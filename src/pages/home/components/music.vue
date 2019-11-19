<template>
  <div class="classic_container">
    <div class="image_warp">
      <!-- <img :class="playing ? 'show_img rotation' : 'show_img'" :src="classicData.image"/> -->
      <img ref="show_img" class="show_img" :src="classicData.image"/>
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
      playing: false,
      r: 0,
      timer: null
    }
  },
  methods: {
    onPlay () {
      let objAudio = this.$refs.eventAudio
      if (!this.playing) {
        objAudio.play()
        this.playing = true
        this.timer = setInterval(() => {
          this.$refs.show_img.style.transform = 'rotate(' + (this.r += 10) + 'deg)'
          this.$refs.show_img.style.transition = 'all 0.5s linear'
          if (objAudio.ended) { // 判断是否播放结束
            this.playing = false
            clearInterval(this.timer)
            this.$refs.show_img.style.transform = 'rotate(0deg)'
            this.$refs.show_img.style.transition = ''
            this.r = 0
          }
        }, 500)
      } else { // 暂停
        clearInterval(this.timer)
        this.playing = false
        objAudio.pause()
      }
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
