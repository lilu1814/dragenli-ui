<template>
  <button @click="handlerClick" :class="[buttonType, buttonClass]">
    <slot />
  </button>
</template>

<script>
export default {
  name: "dragenliButton",
  data() {
    return {};
  },
  props: {
    buttonType: {
      type: String,
      default: "bubble"
    },
    direction: {
      type: String,
      default: ""
    }
  },
  computed: {
    buttonClass: function() {
      if (this.buttonType === "bubble" || this.buttonType === "slide") {
        return `${this.buttonType}-${this.direction}`;
      } else {
        return "";
      }
    }
  },
  methods: {
    handlerClick(event) {
      this.$emit("click", event);
    }
  },
  created() {
    console.log(this);
  }
};
</script>

<style lang="scss" scoped>
button {
  height: 50px;
}
.bubble {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(246, 41%, 21%);
  overflow: hidden;
  transition: color 0.4s ease-in-out;
  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: #3cefff;
    transform-origin: center;
    transition: transform 0.45s ease-in-out;
  }
}
.bubble-left {
  &::before {
    top: 100%;
    right: 100%;
    transform: translate(50%, -50%) scale(0);
  }
  &:hover {
    cursor: pointer;
    color: #161616;
    &::before {
      transform: translate(50%, -50%) scale(15);
    }
  }
}
.bubble-bottom {
  &::before {
    top: 100%;
    right: 100%;
    transform: translate(50%, 50%) scale(0);
  }
  &:hover {
    cursor: pointer;
    color: #161616;
    &::before {
      transform: translate(50%, 50%) scale(15);
    }
  }
}
.bubble-top {
  &::before {
    bottom: 100%;
    left: 100%;
    transform: translate(-50%, -50%) scale(0);
  }
  &:hover {
    cursor: pointer;
    color: #161616;
    &::before {
      transform: translate(-50%, -50%) scale(15);
    }
  }
}
.bubble-right {
  &::before {
    top: 100%;
    left: 100%;
    transform: translate(-50%, 50%) scale(0);
  }
  &:hover {
    cursor: pointer;
    color: #161616;
    &::before {
      transform: translate(-50%, 50%) scale(15);
    }
  }
}
.bubble-center {
  &::before {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
  }
  &:hover {
    cursor: pointer;
    color: #161616;
    &::before {
      transform: translate(-50%, -50%) scale(15);
    }
  }
}
.jelly {
  z-index: 1;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(246, 41%, 21%);
  &:hover {
    cursor: pointer;
    animation: jelly 0.5s;
  }
}

@keyframes jelly {
  0%,
  100% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.1, 0.9);
  }
  75% {
    transform: scale(0.95, 1.05);
  }
}
.pulse {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(246, 41%, 21%);
  &:hover {
    cursor: pointer;
  }
  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 4px solid hsl(246, 41%, 21%);
    transform-origin: center;
    transform: scale(1);
  }
  &:hover::before {
    transition: all 0.75s ease-in-out;
    transform-origin: center;
    transform: scale(1.75);
    opacity: 0;
  }
}
.shine {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(246, 41%, 21%);
  overflow: hidden;
  &::after {
    content: "";
    z-index: -1;
    background-color: hsla(0, 0%, 100%, 0.2);
    position: absolute;
    top: -50%;
    bottom: -50%;
    width: 1.25em;
    transform: translateX(-525%) rotate(35deg);
  }
  &:hover {
    cursor: pointer;
    &::after {
      transition: transform 0.45s ease-in-out;
      transform: translateX(200%) rotate(35deg);
    }
  }
}

.slide {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(246, 41%, 21%);
  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fc2f70;
    transition: transform 0.25s ease-in-out;
  }
  &:hover {
    cursor: pointer;
  }
}
.slide-top {
  &::before {
    transform-origin: center bottom;
    transform: scaleY(0);
  }
  &:hover {
    &::before {
      transform-origin: center top;
      transform: scaleY(1);
    }
  }
}
.slide-left {
  &::before {
    transform-origin: center right;
    transform: scaleX(0);
  }
  &:hover {
    &::before {
      transform-origin: center left;
      transform: scaleX(1);
    }
  }
}
.slide-bottom {
  &::before {
    transform-origin: center top;
    transform: scaleY(0);
  }
  &:hover {
    &::before {
      transform-origin: center bottom;
      transform: scaleY(1);
    }
  }
}
.slide-right {
  &::before {
    transform-origin: center left;
    transform: scaleX(0);
  }
  &:hover {
    &::before {
      transform-origin: center right;
      transform: scaleX(1);
    }
  }
}
</style>
