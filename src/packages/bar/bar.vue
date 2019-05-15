<template>
  <span :class="[barType]">
    <slot />
  </span>
</template>

<script>
export default {
  name: "dragenliBar",
  data() {
    return {};
  },
  props: {
    barType: {
      type: String,
      default: "bubble"
    }
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.model-1 {
  position: relative;
  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #3cefff;
    transform-origin: center right;
    transform: scaleX(0);
    transition: transform 0.5s ease;
  }
  &::before {
    top: 0;
  }
  &::after {
    bottom: 0;
  }
  &:hover {
    &::before,
    &::after {
      transform-origin: center left;
      transform: scaleX(1);
    }
  }
}

.model-2 {
  position: relative;
  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #fc2f70;
    transform: scaleX(0);
    transition: transform 0.5s ease;
  }
  &::before {
    top: 0;
    transform-origin: center right;
  }
  &:hover::before {
    transform-origin: center left;
    transform: scaleX(1);
  }
  &::after {
    bottom: 0;
    transform-origin: center left;
  }

  &:hover::after {
    transform-origin: center right;
    transform: scaleX(1);
  }
}
.model-3 {
  position: relative;
  &::before {
    top: 0;
  }
  &::after {
    bottom: 0;
  }
}
.model-3::before,
.model-3::after {
  content: "";
  position: absolute;
  left: 50%;
  width: 100%;
  height: 2px;
  background-color: #3cefff;
  transform-origin: center;
  transform: translateX(-50%) scaleX(0);
  transition: transform 0.4s ease;
}
.model-3:hover::before,
.model-3:hover::after {
  transform: translateX(-50%) scaleX(1);
}

.model-4 {
  position: relative;
  z-index: 1;
}

.model-4::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: -0.25em;
  right: -0.25em;
  background-color: hsla(341, 97%, 59%, 0.75);
  transform-origin: center right;
  transform: scaleX(0);
  transition: transform 0.2s ease-in-out;
}

.model-4:hover::before {
  transform: scaleX(1);
  transform-origin: center left;
}
.model-5 {
  position: relative;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: -0.25em;
    right: -0.25em;
    background-color: #fc2f70;
    transform-origin: bottom center;
    transform: scaleY(0.1);
    transition: all 0.1s ease-in-out;
  }
  &:hover {
    &::before {
      transform: scaleY(1);
      background-color: hsla(341, 97%, 59%, 0.75);
    }
  }
}

.model-6 {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #3cefff;
    transform-origin: bottom right;
    transform: scaleX(0);
    transition: transform 0.5s ease;
  }
  &:hover {
    &::before {
      transform-origin: bottom left;
      transform: scaleX(1);
    }
  }
}
.model-7 {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: 50%;
    width: 100%;
    height: 2px;
    opacity: 0;
    background-color: #fc2f70;
    transform-origin: center;
    transform: translate(-50%, 0) scaleX(0);
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    &::before {
      transform: translate(-50%, 0) scaleX(1);
      opacity: 1;
    }
  }
}
.model-8 {
  position: relative;
  &::before {
    left: -8px;
  }
  &::after {
    right: -8px;
  }
}
.model-8::before,
.model-8::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #3cefff;
  transform-origin: center top;
  transform: scaleY(0);
  transition: transform 0.5s ease;
}
.model-8:hover::before,
.model-8:hover::after {
  transform-origin: center bottom;
  transform: scaleY(1);
}
.model-9 {
  position: relative;
  &::before {
    left: -8px;
    transform-origin: center top;
  }
  &:hover {
    &::before {
      transform-origin: center bottom;
      transform: scaleY(1);
    }
    &::after {
      transform-origin: center top;
      transform: scaleY(1);
    }
  }
  &::after {
    right: -8px;
    transform-origin: center bottom;
  }
}
.model-9::before,
.model-9::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #fc2f70;
  transform: scaleY(0);
  transition: transform 0.5s ease;
}
.model-10 {
  position: relative;
  &::before {
    left: -8px;
  }
  &::after {
    right: -8px;
  }
}
.model-10::before,
.model-10::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #fc2f70;
  transform-origin: center;
  transform: scaleY(0);
  transition: transform 0.5s ease;
}
.model-10:hover::before,
.model-10:hover::after {
  transform: scaleY(1);
}
.model-11 {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 3px;
    background-color: #fc2f70;
    transform-origin: center right;
    transform: scaleX(0) translateY(-50%);
    transition: transform 0.3s ease;
  }
  &:hover {
    color: #333333;
    &::before {
      transform-origin: center left;
      transform: scaleX(1) translateY(-50%);
    }
  }
}
.model-12 {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #3cefff;
    transform-origin: bottom right;
    transform: scaleX(0);
    transition: transform 0.5s ease;
  }
  &:hover {
    &::before {
      transform-origin: bottom left;
      transform: scaleX(1);
    }
  }
}
.model-13 {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    height: 2px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #3cefff;
    transform-origin: bottom left;
    transform: scaleX(1);
    transition: transform 0.3s ease-in-out;
  }
  &:hover {
    &::before {
      transform: scaleX(0);
      transform-origin: bottom right;
    }
  }
}
.model-14 {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #fc2f70;
    transform-origin: center;
    transform: translate(-50%, 0) scaleX(0);
    transition: transform 0.3s ease-in-out;
  }
  &:hover {
    &::before {
      transform: translate(-50%, 0) scaleX(1);
    }
  }
}
</style>
