import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    country: localStorage.getItem("country") || "us"
  },
  mutations: {
    setCountry(state, country) {
      localStorage.setItem("country", country);
      state.country = country;
    }
  },
  getters: {
    country: state => state.country
  }
});
