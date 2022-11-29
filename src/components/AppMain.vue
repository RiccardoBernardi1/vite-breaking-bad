<script>
import SectionCharacter from "./SectionCharacter.vue";
import axios from "axios";
import AppSelect from "./AppSelect.vue";
import { store } from "../store.js";
export default {
  name: "AppMain",
  data() {
    return {
      store,
    };
  },
  methods: {
    getCharacter() {
      axios
        .get("https://www.breakingbadapi.com/api/characters", {
          params: {
            category: store.selectValue,
          },
        })
        .then((resp) => {
          this.store.characters = resp.data;
        })
        .then(() => {
          this.store.loading = false;
        })
        .catch((err) => {
          this.store.characters = [];
        });
    },
  },
  components: {
    SectionCharacter,
    AppSelect,
  },
  updated() {
    console.log(this.selectValue);
  },
  created() {
    this.getCharacter();
  },
};
</script>

<template>
  <main class="container">
    <AppSelect @characterFilter="getCharacter" />
    <SectionCharacter />
  </main>
</template>

<style lang="scss" scoped></style>
