<template>
  <comBa></comBa>
  <comBb></comBb>
  <div>{{ count }}</div>
  <button @click="increment">父组件button</button>
</template>

<script lang="ts" setup>
import comBa from "./comBa.vue";
import comBb from "./comBb.vue";
import { useStoreY } from "./store";
const { count, increment } = useStoreY();
</script>
