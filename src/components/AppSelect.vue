<script>
import { store } from "../store.js";
export default {
  name: "AppSelect",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="select px-3 py-4">
    <select
      class="form-select w-auto"
      v-model="store.selectValue"
      @change="$emit('characterFilter')"
    >
      <option selected value="">Select Category</option>
      <option value="Breaking Bad">Breaking Bad</option>
      <option value="Better Call Saul">Better Call Saul</option>
      <option value="Breaking Bad, Better Call Saul">
        Breaking Bad & Better Call Saul
      </option>
    </select>
  </div>
</template>

<style lang="scss" scoped></style>
