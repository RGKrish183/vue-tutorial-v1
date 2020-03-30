import Vue from "vue";
import Vuex from "vuex";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en";

import store from "./vuex/store";
import App from "./App.vue";
import router from "./router";

Vue.use(ElementUI, { locale });
Vue.use(Vuex);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
