<template>
  <div class="shadow-wraper" v-show="show">
    <div v-if="type === 'model-1'" class="model-1">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div v-if="type === 'model-2'" class="model-2"></div>
    <div v-if="type === 'model-3'" class="model-3">
      <div class="coin"></div>
    </div>
    <div v-if="type === 'model-4'" class="model-4">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div v-if="type === 'model-5'" class="model-5"></div>
    <div v-if="type === 'model-6'" class="model-6">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div v-if="type === 'model-7'" class="model-7">
      <div class="plane"></div>
    </div>
    <div v-if="type === 'model-8'" class="model-8">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div v-if="type === 'model-9'" class="model-9">
      <div class="outer"></div>
      <div class="middle"></div>
      <div class="inner"></div>
    </div>
    <div v-if="type === 'model-10'" class="model-10"></div>
    <div v-if="type === 'model-11'" class="model-11">
      <svg viewBox="0 0 50 50">
        <circle class="ring" cx="25" cy="25" r="20"></circle>
        <circle class="ball" cx="25" cy="5" r="3.5"></circle>
      </svg>
    </div>
    <div v-if="type === 'model-12'" class="model-12">
      <svg viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20"></circle>
      </svg>
    </div>
    <div v-if="type === 'model-13'" class="model-13"></div>
    <div v-if="type === 'model-14'" class="model-14">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <p class="model-text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "dragenliLoading",
  data() {
    return {};
  },
  props: {
    loadingType: {
      type: String,
      default: ""
    },
    show: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "model-1"
    }
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.shadow-wraper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  align-items: center;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.7);
  .model-text {
    color: #ffffff;
  }
}
.model-1 {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 2em;
  span {
    width: 0.3em;
    height: 1em;
    background-color: #3cefff;
    &:nth-of-type(1) {
      animation: grow 1s -0.45s ease-in-out infinite;
    }
    &:nth-of-type(2) {
      animation: grow 1s -0.3s ease-in-out infinite;
    }
    &:nth-of-type(3) {
      animation: grow 1s -0.15s ease-in-out infinite;
    }
    &:nth-of-type(4) {
      animation: grow 1s ease-in-out infinite;
    }
  }
}

@keyframes grow {
  0%,
  100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(2);
  }
}
.model-2 {
  position: relative;
  width: 2em;
  height: 2em;
  border: 3px solid #3cefff;
  overflow: hidden;
  animation: spin 3s ease infinite;
  &::before {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    width: 2em;
    height: 2em;
    background-color: hsla(185, 100%, 62%, 0.75);
    transform-origin: center bottom;
    transform: scaleY(1);
    animation: fill 3s linear infinite;
  }
}

@keyframes spin {
  50%,
  100% {
    transform: rotate(360deg);
  }
}

@keyframes fill {
  25%,
  50% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
}
.model-3 {
  perspective: 120px;
  .coin {
    width: 2em;
    height: 2em;
    border-radius: 50%;
    border: 4px solid #3cefff;
    animation: spin 1.5s ease-in-out infinite;
  }
}

@keyframes spin {
  to {
    transform: rotateY(540deg);
  }
}
.model-4 {
  width: 4em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  div {
    width: 0.8em;
    height: 0.8em;
    border-radius: 50%;
    background-color: #fc2f70;
    &:nth-of-type(1) {
      transform: translateX(-100%);
      animation: left-swing 0.5s ease-in alternate infinite;
    }
    &:nth-of-type(3) {
      transform: translateX(-95%);
      animation: right-swing 0.5s ease-out alternate infinite;
    }
  }
}

@keyframes left-swing {
  50%,
  100% {
    transform: translateX(95%);
  }
}

@keyframes right-swing {
  50% {
    transform: translateX(-95%);
  }
  100% {
    transform: translateX(100%);
  }
}
.model-5 {
  width: 2.5em;
  height: 3em;
  border: 3px solid transparent;
  border-top-color: #fc2f70;
  border-bottom-color: #fc2f70;
  border-radius: 50%;
  animation: spin-stretch 2s ease infinite;
}

@keyframes spin-stretch {
  50% {
    transform: rotate(360deg) scale(0.4, 0.33);
    border-width: 8px;
  }
  100% {
    transform: rotate(720deg) scale(1, 1);
    border-width: 3px;
  }
}
.model-6 {
  width: 3.5em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  div {
    width: 0.8em;
    height: 0.8em;
    border-radius: 50%;
    background-color: #fc2f70;
    animation: fade 0.8s ease-in-out alternate infinite;
    &:nth-of-type(1) {
      animation-delay: -0.4s;
    }
    &:nth-of-type(2) {
      animation-delay: -0.2s;
    }
  }
}

@keyframes fade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.model-7 {
  perspective: 120px;
  .plane {
    width: 2em;
    height: 2em;
    background-color: #fc2f70;
    transform: rotate(0);
    animation: flip 1s infinite;
  }
}

@keyframes flip {
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(180deg) rotateX(180deg);
  }
}
.model-8 {
  width: 3em;
  height: 3em;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  & > div {
    width: 0.5em;
    height: 0.5em;
    background-color: #3cefff;
    border-radius: 50%;
    animation: fade 1.5s alternate ease-in-out infinite;
    &:nth-of-type(9) {
      animation-delay: 1s;
    }
  }
}
.model-8 > div:nth-of-type(2),
.model-8 > div:nth-of-type(4) {
  animation-delay: 0.25s;
}
.model-8 > div:nth-of-type(3),
.model-8 > div:nth-of-type(5),
.model-8 > div:nth-of-type(7) {
  animation-delay: 0.5s;
}
.model-8 > div:nth-of-type(6),
.model-8 > div:nth-of-type(8) {
  animation-delay: 0.75s;
}

.model-9 {
  position: relative;
}

.outer,
.middle,
.inner {
  border: 3px solid transparent;
  border-top-color: #3cefff;
  border-right-color: #3cefff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
}

.outer {
  width: 3.5em;
  height: 3.5em;
  margin-left: -1.75em;
  margin-top: -1.75em;
  animation: spin 2s linear infinite;
}

.middle {
  width: 2.1em;
  height: 2.1em;
  margin-left: -1.05em;
  margin-top: -1.05em;
  animation: spin 1.75s linear reverse infinite;
}

.inner {
  width: 0.8em;
  height: 0.8em;
  margin-left: -0.4em;
  margin-top: -0.4em;
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.model-10 {
  display: flex;
  width: 3.5em;
  height: 3.5em;
  border: 3px solid transparent;
  border-top-color: #3cefff;
  border-bottom-color: #3cefff;
  border-radius: 50%;
  animation: spin 1.5s linear infinite;
  &:before {
    content: "";
    display: block;
    margin: auto;
    width: 0.75em;
    height: 0.75em;
    border: 3px solid #3cefff;
    border-radius: 50%;
    animation: pulse 1s alternate ease-in-out infinite;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
}
.model-11 {
  svg {
    width: 3.75em;
    animation: 1.5s spin ease infinite;
  }

  .ring {
    fill: none;
    stroke: hsla(341, 97%, 59%, 0.3);
    stroke-width: 2;
  }

  .ball {
    fill: #fc2f70;
    stroke: none;
  }
}
.model-12 {
  svg {
    width: 3.75em;
    transform-origin: center;
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: #fc2f70;
    stroke-width: 2;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dashoffset: -125px;
  }
}
.model-13 {
  border: 3px solid hsla(185, 100%, 62%, 0.2);
  border-top-color: #3cefff;
  border-radius: 50%;
  width: 3em;
  height: 3em;
  animation: spin 1s linear infinite;
}
.model-14 {
  width: 3.5em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  div {
    width: 0.8em;
    height: 0.8em;
    border-radius: 50%;
    background-color: #fc2f70;
    transform: translateY(-100%);
    animation: wave 0.8s ease-in-out alternate infinite;
    &:nth-of-type(1) {
      animation-delay: -0.4s;
    }
    &:nth-of-type(2) {
      animation-delay: -0.2s;
    }
  }
}

@keyframes wave {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(100%);
  }
}
</style>
