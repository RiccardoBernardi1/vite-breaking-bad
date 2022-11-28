<script>
import SectionCharacter from "./SectionCharacter.vue";
export default {
  name: "AppMain",
  components: {
    SectionCharacter,
  },
};
</script>

<template>
  <main class="container">
    <div class="select px-3 py-4">
      <select class="form-select w-auto">
        <option selected>Select Category</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <SectionCharacter />
  </main>
</template>

<style lang="scss" scoped></style>
