<script>
import CharacterCard from "./CharacterCard.vue";
import axios from "axios";
import AppLoading from "./AppLoading.vue";
export default {
  name: "SectionCharacter",
  props: {
    selectValue: String,
  },
  data() {
    return {
      allCharacters: [],
      characters: [],
      loading: true,
    };
  },
  components: {
    CharacterCard,
    AppLoading,
  },
  created() {
    axios
      .get("https://www.breakingbadapi.com/api/characters")
      .then((response) => {
        this.allCharacters = response.data;
        this.characters = this.allCharacters;
      })
      .then(() => {
        this.loading = false;
      });
  },
  updated() {
    if (this.selectValue.length > 0) {
      let charactersFiltered = [];
      this.allCharacters.forEach((elm) => {
        if (
          elm.category === this.selectValue ||
          elm.category === "Breaking Bad, Better Call Saul"
        ) {
          charactersFiltered.push(elm);
        }
      });
      this.characters = charactersFiltered;
    } else {
      this.characters = this.allCharacters;
    }
  },
};
</script>

<template>
  <section class="characters p-5">
    <div class="characters-found px-3 py-4 fw-bold">
      Found {{ characters.length }} characters
    </div>
    <AppLoading v-if="loading" />
    <div
      class="characters-cards d-flex flex-wrap justify-content-center"
      v-else
    >
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
