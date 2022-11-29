<script>
export default {
  name: "CharacterCard",
  props: {
    info: Object,
  },
};
</script>

<template>
  <div class="p-3 m-2 text-center">
    <img class="img-fluid" :src="info.img" :alt="info.name" />
    <h5 class="fs-6 fw-bold mt-4">{{ info.name }}</h5>
    <div class="series mt-3">{{ info.category }}</div>
    <div class="status mb-5">{{ info.status }}</div>
  </div>
</template>

<style lang="scss" scoped>
.series,
.status {
  color: #6b6a6c;
}
</style>
