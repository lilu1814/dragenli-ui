<template>
  <div>
    <simulator :src="src" :textContent="textContent"></simulator>
    <dragenli-button buttonType="slide" direction="bottom"></dragenli-button>
    <dragenli-bar
      v-for="i in 15"
      :key="i"
      :barType="'model-' + i"
      style="margin:0 10px"
    >
      {{ "bar" + i }}
    </dragenli-bar>
    <div>
      {{ inputtext }}
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
</style>
