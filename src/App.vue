<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  }
}
</script>

<template>
  <div class="container">
    <HelloWorld />
  </div>
  <div class="container-small">
    <HelloWorld />
  </div>
</template>

<style lang="scss">
@import './style/global.scss';
</style>
