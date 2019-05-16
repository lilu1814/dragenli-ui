<template>
  <div :class="['input-outer', inputType]">
    <input
      type="text"
      v-model="val"
      @input="handleInput"
      placeholder="Input Outline"
    />
    <span
      v-if="inputType === 'anticlockwise' || inputType === 'trace'"
      class="bottom"
    ></span>
    <span
      v-if="inputType === 'anticlockwise' || inputType === 'trace'"
      class="right"
    ></span>
    <span
      v-if="inputType === 'anticlockwise' || inputType === 'trace'"
      class="top"
    ></span>
    <span
      v-if="inputType === 'anticlockwise' || inputType === 'trace'"
      class="left"
    ></span>

    <span
      class="line"
      v-if="inputType === 'underline' || inputType === 'underline2'"
    >
    </span>
  </div>
</template>

<script>
export default {
  name: "dragenliInput",
  data() {
    return {};
  },
  props: {
    inputType: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    }
  },
  computed: {},
  methods: {
    handleInput(event) {
      // should not emit input during composition
      // see: https://github.com/ElemeFE/element/issues/10516

      // hack for https://github.com/ElemeFE/element/issues/8548
      // should remove the following line when we don't support IE

      this.$emit("input", event.target.value);
      // ensure native input value is controlled
      // see: https://github.com/ElemeFE/element/issues/12850
      //this.$nextTick(this.setNativeInputValue);
    }
  },
  created() {
    this.val = this.value;
    console.log(this);
  }
};
</script>

<style lang="scss" scoped>
.input-outer {
  height: 40px;
  input {
    height: 36px;
  }
}
.anticlockwise {
  position: relative;
  input {
    width: 6.5em;
    color: white;
    font-size: inherit;
    font-family: inherit;
    background-color: hsl(246, 41%, 18%);
    padding: 1px 1px;
    border: 1px solid transparent;
    transition: background-color 0.3s ease-in-out;
    &:focus {
      outline: none;
      & ~ .bottom {
        transform-origin: bottom left;
        transform: scaleX(1);
      }
      & ~ .right {
        transform-origin: bottom right;
        transform: scaleY(1);
      }
      & ~ .top {
        transform-origin: top right;
        transform: scaleX(1);
      }
      & ~ .left {
        transform-origin: top left;
        transform: scaleY(1);
      }
    }
    &::placeholder {
      color: hsla(0, 0%, 100%, 0.6);
    }
  }
  span {
    position: absolute;
    background-color: #3cefff;
    transition: transform 0.5s ease;
  }
  .bottom,
  .top {
    height: 1px;
    left: 0;
    right: 0;
    transform: scaleX(0);
  }
  .left,
  .right {
    width: 1px;
    top: 0;
    bottom: 0;
    transform: scaleY(0);
  }
  .bottom {
    bottom: 0;
    transform-origin: bottom right;
  }
  .right {
    right: 0;
    transform-origin: top right;
  }
  .top {
    top: 0;
    transform-origin: top left;
  }
  .left {
    left: 0;
    transform-origin: bottom left;
  }
}

.trace {
  position: relative;
  input {
    width: 6.5em;
    color: white;
    font-size: inherit;
    font-family: inherit;
    background-color: hsl(246, 41%, 18%);
    padding: 1px 2px;
    border: 1px solid transparent;
    transition: background-color 0.3s ease-in-out;
    &:focus {
      outline: none;
      & ~ .bottom {
        transform-origin: bottom left;
        transform: scaleX(1);
      }
      & ~ .right {
        transform-origin: bottom right;
        transform: scaleY(1);
      }
      & ~ .top {
        transform-origin: top right;
        transform: scaleX(1);
      }
      & ~ .left {
        transform-origin: top left;
        transform: scaleY(1);
      }
    }
    &::placeholder {
      color: hsla(0, 0%, 100%, 0.6);
    }
  }
  span {
    position: absolute;
    background-color: #fc2f70;
    transition: transform 0.1s ease;
  }
  .bottom,
  .top {
    height: 1px;
    left: 0;
    right: 0;
    transform: scaleX(0);
  }
  .left,
  .right {
    width: 1px;
    top: 0;
    bottom: 0;
    transform: scaleY(0);
  }
  .bottom {
    bottom: 0;
    transform-origin: bottom right;
  }
  .right {
    right: 0;
    transform-origin: top right;
    transition-delay: 0.05s;
  }
  .top {
    top: 0;
    transform-origin: top left;
    transition-delay: 0.15s;
  }
  .left {
    left: 0;
    transform-origin: bottom left;
    transition-delay: 0.25s;
  }
}

.underline {
  position: relative;
  input {
    width: 6.5em;
    font-size: inherit;
    font-family: inherit;
    background-color: transparent;
    border: 1px solid transparent;
    border-bottom-color: hsla(185, 100%, 62%, 0.2);
    &:focus {
      outline: none;
      & ~ span {
        transform-origin: bottom left;
        transform: scaleX(1);
      }
    }
    &::placeholder {
      color: hsla(0, 0%, 100%, 0.6);
    }
  }
  .line {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: #3cefff;
    transform-origin: bottom right;
    transform: scaleX(0);
    transition: transform 0.5s ease;
  }
}

.underline2 {
  position: relative;
  input {
    width: 6.5em;
    font-size: inherit;
    font-family: inherit;
    background-color: transparent;
    border: 1px solid transparent;
    border-bottom-color: hsla(341, 97%, 59%, 0.2);
    &:focus {
      outline: none;
      & ~ span {
        transform: translate(-50%, 0) scaleX(1);
        opacity: 1;
      }
    }
    &::placeholder {
      color: hsla(0, 0%, 100%, 0.6);
    }
  }
  .line {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 100%;
    height: 1px;
    opacity: 0;
    background-color: #fc2f70;
    transform-origin: center;
    transform: translate(-50%, 0) scaleX(0);
    transition: all 0.3s ease;
  }
}
</style>
