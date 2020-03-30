// Importing Modules
import router from "@/router/index";

const state = {
  posts: [
    { age: 40, firstName: "Dickerson", lastName: "Macdonald" },
    { age: 21, firstName: "Larsen", lastName: "Shaw" },
    { age: 89, firstName: "Geneva", lastName: "Wilson" },
    { age: 38, firstName: "Jami", lastName: "Carney" }
  ]
};

const actions = {
  actAddposts({ commit }, posts) {
    commit("SETPOSTS", posts);
    router.push({ name: "PostComponent" });
  },
  actRemovePosts({ commit }, id) {
    commit("REMOVEPOSTS", id);
  }
};
const mutations = {
  SETPOSTS(state, posts) {
    state.posts.push(posts);
  },
  REMOVEPOSTS(state, id) {
    state.posts.splice(id, 1);
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
