<template>
  <div class="simulator-container">
    <div class="display-wrapper">
      <section class="mofang-demo">
        <iframe v-if="src" :src="src" frameborder="0" width="100%" height="100%" scrolling="no"></iframe>
        <div v-else v-html="textContent"></div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Simulator',
  data() {
    return {
      
    }
  },
  props: {
    // value: {
    //   type: [Boolean, String, Number],
    //   default: false
    // },
    // activeValue: {
    //   type: [Boolean, String, Number],
    //   default: true
    // },
    // inactiveValue: {
    //   type: [Boolean, String, Number],
    //   default: false
    // },
    textContent:{
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: ''
    }
  },
  computed: {
    
  },
  methods: {
    handleChange(value) {
      this.$emit('input', !this.checked ? this.activeValue : this.inactiveValue);
    }
  }
}
</script>

<style lang="scss" scoped>
.simulator-container{
  position: relative;
  .display-wrapper{
    position: relative;
    width: 330px;
    height: 645px;
    margin: 0;
    background: url(../../assets/images/iphoneX.38c8778.png) no-repeat center 0;
    background-size: 100%;
    .mofang-demo{
      position: absolute;
      top: 64px;
      left: 21px;
      right: 23px;
      bottom: 22px;
      overflow: hidden;
      border-radius: 0 0 35px 35px;
      border: 1px solid #edf0f4;
      border-top: none;
      background-color: #edf0f4;
    }
  }
}
</style>