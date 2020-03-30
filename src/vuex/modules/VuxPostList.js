// Importing Modules
import axios from "axios";
// import router from "@/router/index";

const url = "http://dummy.restapiexample.com/api/v1";

const state = {
  posts: [],
  loading: false
};

const actions = {
  ActGetPost({ commit }) {
    state.loading = true;
    setTimeout(() => {
      axios
        .get(`${url}/employees`)
        .then(res => {
          const empData = res.data;
          commit("SETPOSTS", empData);
        })
        .catch(error => {
          console.log(error);
        });
    }, 1000);
  },
  ActDelPost({ commit }, id, index) {
    axios
      .delete(`${url}/delete/${id}	`)
      .then(res => {
        console.log(res);
        commit("DELPOST", res, index);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
const mutations = {
  SETPOSTS(state, resultPosts) {
    if (resultPosts.status === "success")
      state.posts = resultPosts.data.splice(0, 10);
    state.loading = false;
  },
  DELPOST(state, resultPosts, index) {
    if (resultPosts.status === "success")
      state.posts = resultPosts.data.splice(index, 1);
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
