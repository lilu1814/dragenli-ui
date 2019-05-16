<template>
  <div class="container">
    <div class="wrap">
      <div class="cube">
        <div class="out-front"><img class="amy-img" :src="images[0]" /></div>
        <div class="out-back"><img class="amy-img" :src="images[1]" /></div>
        <div class="out-left"><img class="amy-img" :src="images[2]" /></div>
        <div class="out-right"><img class="amy-img" :src="images[3]" /></div>
        <div class="out-top"><img class="amy-img" :src="images[4]" /></div>
        <div class="out-bottom"><img class="amy-img" :src="images[5]" /></div>

        <span class="in-front"
          ><img class="inner-amy-img" :src="images[6]"
        /></span>
        <span class="in-back"
          ><img class="inner-amy-img" :src="images[7]"
        /></span>
        <span class="in-left"
          ><img class="inner-amy-img" :src="images[8]"
        /></span>
        <span class="in-right"
          ><img class="inner-amy-img" :src="images[9]"
        /></span>
        <span class="in-top"
          ><img class="inner-amy-img" :src="images[10]"
        /></span>
        <span class="in-bottom"
          ><img class="inner-amy-img" :src="images[11]"
        /></span>
      </div>
    </div>
  </div>
</template>

<script>
function randomDistance(max, min) {
  var distance = Math.floor(Math.random() * (max - min + 1) + min);
  return distance;
}
export default {
  name: "dragenliD3box",
  data() {
    return {
      stars: []
    };
  },
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  computed: {},
  methods: {},
  created() {
    console.log("props", this.images);
    for (var j = 0; j < 100; j++) {
      var number = randomDistance(10000, 500);
      setTimeout(() => {
        var number = randomDistance(10000, 500);
        var newStar = {};
        newStar.fontSize = randomDistance(20, 10) + "px";
        newStar.top = randomDistance(100, 1) + "%";
        newStar.left = randomDistance(100, 1) + "%";
        //newStar.innerHTML="*"
        this.stars.push(newStar);
      }, number);
    }
  }
};
</script>

<style lang="scss" scoped>
.pink {
  top: 100px;
  left: 400px;
  background: #fff;
  animation-delay: 3s;
  -webkit-animation-delay: 3s;
  -moz-animation-delay: 3s;
  &:after {
    border-color: transparent transparent transparent #fff;
    animation-delay: 3s;
    -webkit-animation-delay: 3s;
    -moz-animation-delay: 3s;
  }
}
.blue {
  top: 120px;
  left: 200px;
  background: #ffffff;
  animation-delay: 2s;
  -webkit-animation-delay: 2s;
  -moz-animation-delay: 2s;
  &:after {
    border-color: transparent transparent transparent #ffffff;
    -webkit-animation-delay: 2s;
    -moz-animation-delay: 2s;
    animation-delay: 2s;
  }
}
html {
  background: #000000;
  height: 100%;
}
.wrap {
  margin-top: 200px;
  perspective: 1000px;
  &:hover {
    .out-front {
      transform: translateZ(200px);
    }
    .out-back {
      transform: translateZ(-200px) rotateY(180deg);
    }
    .out-left {
      transform: translateX(-200px) rotateY(-90deg);
    }
    .out-right {
      transform: translateX(200px) rotateY(90deg);
    }
    .out-top {
      transform: translateY(-200px) rotateX(90deg);
    }
    .out-bottom {
      transform: translateY(200px) rotateX(-90deg);
    }
  }
}
.cube {
  width: 200px;
  height: 200px;
  position: relative;
  color: #fff;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  line-height: 200px;
  transform-style: preserve-3d;
  transform: rotateX(-30deg) rotateY(-70deg);
  animation: rotate 20s infinite linear;
  & > div {
    width: 100%;
    height: 100%;
    border: 1px solid #fff;
    position: absolute;
    background-color: #333;
    opacity: 0.6;
    transition: transform 0.4s ease-in;
  }
  .out-front {
    transform: translateZ(100px);
  }
  .out-back {
    transform: translateZ(-100px) rotateY(180deg);
  }
  .out-left {
    transform: translateX(-100px) rotateY(-90deg);
  }
  .out-right {
    transform: translateX(100px) rotateY(90deg);
  }
  .out-top {
    transform: translateY(-100px) rotateX(90deg);
  }
  .out-bottom {
    transform: translateY(100px) rotateX(-90deg);
  }
  & > span {
    display: block;
    width: 100px;
    height: 100px;
    border: 1px solid black;
    background-color: #999;
    position: absolute;
    top: 50px;
    left: 50px;
  }
  .in-front {
    transform: translateZ(50px);
  }
  .in-back {
    transform: translateZ(-50px) rotateY(180deg);
  }
  .in-left {
    transform: translateX(-50px) rotateY(-90deg);
  }
  .in-right {
    transform: translateX(50px) rotateY(90deg);
  }
  .in-top {
    transform: translateY(-50px) rotateX(90deg);
  }
  .in-bottom {
    transform: translateY(50px) rotateX(-90deg);
  }
}
.amy-img {
  width: 100%;
  height: 100%;
}
.inner-amy-img {
  position: absolute;
  width: 100px;
  height: 100px;
  left: 0;
  top: 0;
}

@keyframes star-ani {
  0% {
    opacity: 0;
    transform: scale(0) translate3d(0, 0, 0);
  }
  20% {
    opacity: 0.8;
    transform: scale(0.2) translate3d(-100px, 100px, 0);
  }
  40% {
    opacity: 0.8;
    transform: scale(0.4) translate3d(-200px, 200px, 0);
  }
  60% {
    opacity: 0.8;
    transform: scale(0.6) translate3d(-300px, 300px, 0);
  }
  80% {
    opacity: 1;
    transform: scale(1) translate3d(-350px, 350px, 0);
  }
  100% {
    opacity: 1;
    transform: scale(1.2) translate3d(-400px, 380px, 0);
  }
}
@keyframes rotate {
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg);
  }
}
@keyframes starFlick {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
