<template>
  <main id="app">
    <Home />
  </main>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: Gudea, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1 {
  margin: 20px auto;
  font-size: 40px;
}
figure {
  margin: 0 auto;
  width: 400px;
}
</style>
