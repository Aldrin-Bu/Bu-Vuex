import { ref } from "vue";
const count = ref(0);

export const useStoreY = () => {
  const increment = () => {
    count.value++;
  };

  return { count, increment };
};
