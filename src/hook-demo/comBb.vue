<template>
  <div>{{ count }}</div>
</template>

<script lang="ts" setup>
import { useStoreY } from "./store";
const { count } = useStoreY();
</script>
<style></style>
