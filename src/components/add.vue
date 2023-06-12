<template>
  <div class="add">
    <button @click="add">组件内更新count</button>

    <div class="com2">name: {{ name }}</div>
    <button @click="addName">新增三井寿</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "addStore",
  setup() {
    const store = useStore("index");
    const nameStore = useStore("name");

    const add = () => {
      store.commit("add", 1);
    };

    const addName = () => {
      nameStore.commit("add", ",三井寿");
    };

    return {
      add,
      name: computed(() => nameStore.state.name),
      addName,
    };
  },
});
</script>
<style scoped>
.add {
  width: 100%;
  height: 200px;
  background: pink;
  margin-top: 40px;
}
.com2 {
  margin-top: 40px;
}
</style>
