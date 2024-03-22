<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  },
  mounted() {
    console.log("App component mounted successfully.");
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>