import { createStore } from "vuex";

export default createStore({
  state: {
    name: "樱木花道",
  },
  getters: {
    double(state) {
      return (state.name += ":流川枫最帅!");
    },
  },
  mutations: {
    add(state, payload) {
      state.name += payload;
    },
  },
  actions: {
    asyncAdd({ commit }, payload) {
      setTimeout(() => {
        commit("add", payload);
      }, 2000);
    },
  },
  modules: {},
});
