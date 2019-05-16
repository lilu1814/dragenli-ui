<template>
  <div>
    <simulator :src="src" :textContent="textContent"></simulator>
    <div class="page-container">
      <dragenli-button
        buttonType="slide"
        @click="showLoading(1)"
        direction="bottom"
        >开启model1-loading</dragenli-button
      >
      <dragenli-button
        buttonType="slide"
        @click="showLoading(2)"
        direction="top"
        >开启model2-loading</dragenli-button
      >
      <dragenli-button
        buttonType="slide"
        @click="showLoading(3)"
        direction="left"
        >开启model3-loading</dragenli-button
      >
      <dragenli-button
        buttonType="slide"
        @click="showLoading(4)"
        direction="right"
        >开启model4-loading</dragenli-button
      >
      <dragenli-button
        buttonType="bubble"
        @click="showLoading(5)"
        direction="bottom"
        >开启model5-loading</dragenli-button
      >
      <dragenli-button
        buttonType="bubble"
        @click="showLoading(6)"
        direction="top"
        >开启model6-loading</dragenli-button
      >
      <dragenli-button
        buttonType="bubble"
        @click="showLoading(7)"
        direction="left"
        >开启model7-loading</dragenli-button
      >
      <dragenli-button
        buttonType="bubble"
        @click="showLoading(8)"
        direction="right"
        >开启model8-loading</dragenli-button
      >

      <dragenli-button buttonType="jelly" @click="showLoading(9)"
        >开启model9-loading</dragenli-button
      >
      <dragenli-button buttonType="pulse" @click="showLoading(10)"
        >开启model10-loading</dragenli-button
      >
      <dragenli-button buttonType="shine" @click="showLoading(11)"
        >开启model11-loading</dragenli-button
      >
      <dragenli-button buttonType="shine" @click="showLoading(12)"
        >开启model12-loading</dragenli-button
      >
      <dragenli-button buttonType="shine" @click="showLoading(13)"
        >开启model13-loading</dragenli-button
      >
      <dragenli-button buttonType="shine" @click="showLoading(14)"
        >开启model14-loading</dragenli-button
      >
    </div>
    <div class="page-container">
      <dragenli-bar
        v-for="i in 15"
        :key="i"
        :barType="'model-' + i"
        style="margin:0 10px"
      >
        {{ "bar" + i }}
      </dragenli-bar>
    </div>
    <div class="page-container">
      <dragenli-input
        v-model="inputtext"
        inputType="anticlockwise"
        style="margin:0 10px"
      ></dragenli-input>
      <dragenli-input
        v-model="inputtext"
        inputType="trace"
        style="margin:0 10px"
      ></dragenli-input>
      <dragenli-input
        v-model="inputtext"
        inputType="underline"
        style="margin:0 10px"
      ></dragenli-input>
      <dragenli-input
        v-model="inputtext"
        inputType="underline2"
        style="margin:0 10px"
      ></dragenli-input>
    </div>
  </div>
</template>

<script>
// import Simulator from './packages/simulator/index.js'
export default {
  name: "app",
  // components:{
  //   Simulator
  // },
  data() {
    return {
      src: "https://element.eleme.cn/#/zh-CN", //https://element.eleme.cn/#/zh-CN',
      textContent: "<p>我是内容</p>",
      inputtext: "输入框"
    };
  },
  methods: {
    onClick: function(e) {
      console.log("click", e);
    },
    showLoading(number) {
      console.log("点击loading");
      this.$loading.show({
        type: "model-" + number,
        text: "测试",
        duration: 3000
      });
    },
    hideLoading() {
      this.$loading.hide();
    }
  },
  watch: {
    // lightSwitch: newValue => console.log('开关：', newValue),
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.page-container {
  display: flex;
  height: 200px;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
