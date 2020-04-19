import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    limit: localStorage.getItem("limit") || 10
  },
  mutations: {
    setLimit(state, limit) {
      localStorage.setItem("limit", limit);
      state.limit = limit;
    }
  },
  getters: {
    limit: state => state.limit
  }
});
