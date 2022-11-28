<script>
import CharacterCard from "./CharacterCard.vue";
import axios from "axios";
export default {
  name: "SectionCharacter",
  data() {
    return {
      characters: [],
    };
  },
  components: {
    CharacterCard,
  },
  created() {
    axios
      .get("https://www.breakingbadapi.com/api/characters")
      .then((response) => {
        this.characters = response.data;
      });
  },
};
</script>

<template>
  <section class="characters p-5">
    <div class="characters-found px-3 py-4 fw-bold">Found 64 characters</div>
    <div class="characters-cards d-flex flex-wrap justify-content-center">
      <CharacterCard
        class="character-card"
        v-for="character in characters"
        :info="character"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.characters {
  background-color: white;
  .characters-found {
    background-color: #2e3a46;
    color: white;
  }
  .character-card {
    background-color: #2e3a46;
    color: white;
    width: calc(20% - 16px);
  }
}
</style>
