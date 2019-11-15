<template>
  <div class="classic_nav">
    <a @click="onLeft" :class="latest ? 'nav_left latest_left' : 'nav_left left'" href="javascript:;"></a>
    <span>{{ title }}</span>
    <a @click="onRight" :class="first ? 'nav_right first_right' : 'nav_right right'" href="javascript:;"></a>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    latest: {
      type: Boolean
    },
    first: {
      type: Boolean
    }
  },
  data () {
    return {
      leftClass: 'nav_left left',
      rightClass: 'nav_right right'
    }
  },
  methods: {
    onLeft () {
      this.$emit('onLeft')
    },
    onRight () {
      this.$emit('onRight')
    }
  }
}
</script>

<style lang="scss" scoped>
  .classic_nav {
    width: 588px;
    height: 80px;
    background: #f7f7f7;
    display: flex;
    align-items: center;
    .nav_left {
      width: 80px;
      height: 80px;
      background-size: 100% 100%;
    }
    .latest_left {
      background: url('~@/assets/images/classic/triangle.dis@left.png') no-repeat;
    }
    .left {
      background: url('~@/assets/images/classic/triangle@left.png') no-repeat;
    }
    .first_right {
      background: url('~@/assets/images/classic/triangle.dis@right.png') no-repeat;
    }
    .right {
      background: url('~@/assets/images/classic/triangle@right.png') no-repeat;
    }
    span {
      text-align: center;
      flex-grow: 1;
      font-size: 34px;
    }
    .nav_right {
      width: 80px;
      height: 80px;
      background-size: 100% 100%;
    }
  }
</style>
