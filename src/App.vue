<template>
  <div>count: {{ count }}</div>
  <div>doublecount: {{ double }}</div>

  <button @click="add">同步修改</button>
  <button @click="addAsync">异步修改</button>

  <Add />
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import Add from "./components/add.vue";

export default defineComponent({
  name: "App",
  components: { Add },
  setup() {
    const store = useStore("index");

    const add = () => {
      store.commit("add", 1);
    };

    const addAsync = () => {
      store.dispatch("asyncAdd", 2);
    };

    return {
      count: computed(() => store.state.count),
      double: computed(() => store.getters.double),
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
