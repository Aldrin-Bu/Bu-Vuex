<template>
  <div>{{ count }}</div>
  <button @click="increment">com1 button</button>
</template>

<script lang="ts" setup>
// import { watch } from "vue";
import { useStoreY } from "./store";
const { count, increment } = useStoreY();

// watch(count, (val) => {
//   console.error("comBa", val);
// });
</script>
<style></style>
