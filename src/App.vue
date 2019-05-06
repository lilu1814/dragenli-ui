<template>
  <div>
    <simulator :src="src" :textContent="textContent"></simulator>
  </div>  
</template>

<script>
// import Simulator from './packages/simulator/index.js'
export default {
  name: 'app',
  // components:{
  //   Simulator
  // },
  data () {
    return {
      src: 'https://element.eleme.cn/#/zh-CN',//https://element.eleme.cn/#/zh-CN',
      textContent:'<p>我是内容</p>'
    }
  },
  methods: {
    onClick: function (e) {
      console.log('click', e);
    },
  },
  watch: {
    // lightSwitch: newValue => console.log('开关：', newValue),
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
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
