import Vuex from "vuex";
import Vue from "vue";

import VuxPost from "./modules/VuxPost";
import VuxPostList from "./modules/VuxPostList";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    VuxPost,
    VuxPostList
  },
  strict: false
});
