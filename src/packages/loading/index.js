import Loading from "./Loading";
let $vm;
export default {
  install(Vue, options) {
    if (!$vm) {
      const LoadingPlugin = Vue.extend(Loading);
      $vm = new LoadingPlugin({
        el: document.createElement("div")
      });
    }
    $vm.show = false;
    let loading = {
      show(option) {
        $vm.show = true;
        $vm.text = option.text;
        $vm.type = option.type;
        setTimeout(() => {
          this.hide();
        }, option.duration || 2000);

        document.body.appendChild($vm.$el);
      },
      hide() {
        $vm.show = false;
      }
    };
    if (!Vue.$loading) {
      Vue.$loading = loading;
    }
    Vue.mixin({
      created() {
        this.$loading = Vue.$loading;
      }
    });
  }
};
