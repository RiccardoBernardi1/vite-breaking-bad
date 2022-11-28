<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <header class="d-flex align-items-center p-2">
    <img src="../assets/logo.png" alt="Logo Breaking Bad" />
    <h1>Breaking Bad Api</h1>
  </header>
</template>

<style lang="scss" scoped>
header {
  color: white;
  img {
    max-width: 6.25rem;
    height: 1.875rem;
  }
}
</style>
