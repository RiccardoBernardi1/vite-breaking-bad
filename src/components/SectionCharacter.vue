<script>
import CharacterCard from "./CharacterCard.vue";
import { store } from "../store.js";
import AppLoading from "./AppLoading.vue";
export default {
  name: "SectionCharacter",
  data() {
    return {
      store,
      allCharacters: [],
      characters: [],
      loading: true,
    };
  },
  components: {
    CharacterCard,
    AppLoading,
  },
};
</script>

<template>
  <section class="characters p-5">
    <div class="characters-found px-3 py-4 fw-bold">
      Found {{ store.characters.length }} characters
    </div>
    <AppLoading v-if="store.loading" />
    <div
      class="characters-cards d-flex flex-wrap justify-content-center"
      v-else
    >
      <CharacterCard
        class="character-card"
        v-for="character in store.characters"
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
    width: calc(100% - 16px);
    @include media-breakpoint-up(sm) {
      width: calc(50% - 16px);
    }
    @include media-breakpoint-up(md) {
      width: calc((100% / 3) - 16px);
    }
    @include media-breakpoint-up(lg) {
      width: calc(20% - 16px);
    }
  }
}
</style>
