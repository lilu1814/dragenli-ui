import Simulator from "./packages/simulator/index.js";
import Button from "./packages/button/index.js";
import Bar from "./packages/bar/index.js";
import Input from "./packages/input/index.js";
import Loading from "./packages/loading/index.js";

const components = [Simulator, Button, Bar, Input];
const plugins = [Loading];

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  });
  plugins.map(plugin => {
    Vue.use(plugin);
  });
};

/* 支持使用标签的方式引入 */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Simulator,
  Button,
  Bar
};
