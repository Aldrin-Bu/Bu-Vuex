<template>
  <div>{{ count }}---{{ $store.state.count }}</div>
  <button @click="add">同步修改</button>
  <button @click="addAsync">异步修改</button>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/vuex";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const store = useStore();
    console.warn("store===", store);

    const add = () => {
      store.state.count++;
      // store.commit("add", 1);
    };

    const addAsync = () => {
      store.dispatch("asyncAdd", 2);
    };

    return {
      count: computed(() => store.state.count),
      add,
      addAsync,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
