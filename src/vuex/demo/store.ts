import { createStore } from "@/vuex";

export default createStore({
  state: {
    count: 0,
  },
  getters: {
    double(state: { count: number }) {
      return state.count * 2;
    },
  },
  mutations: {
    add(state: { count: any }, payload: any) {
      state.count += payload;
    },
  },
  actions: {
    asyncAdd({ commit }: any, payload: any) {
      setTimeout(() => {
        commit("add", payload);
      }, 2000);
    },
  },
  modules: {},
});
