<script>
import SectionCharacter from "./SectionCharacter.vue";
export default {
  name: "AppMain",
  data() {
    return {
      selectValue: "",
    };
  },
  components: {
    SectionCharacter,
  },
  updated() {
    console.log(this.selectValue);
  },
};
</script>

<template>
  <main class="container">
    <div class="select px-3 py-4">
      <select class="form-select w-auto" v-model="selectValue">
        <option selected value="">Select Category</option>
        <option value="Breaking Bad">Breaking Bad</option>
        <option value="Better Call Saul">Better Call Saul</option>
        <option value="Breaking Bad, Better Call Saul">
          Breaking Bad & Better Call Saul
        </option>
      </select>
    </div>
    <SectionCharacter :selectValue="selectValue" />
  </main>
</template>

<style lang="scss" scoped></style>
