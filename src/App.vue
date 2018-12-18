<template>
  <main id="app">
    <Splash />
    <Home />
  </main>
</template>

<script>
import Home from './components/Home.vue'
import Splash from './components/Splash.vue'

export default {
  name: 'app',
  components: {
    Home,
    Splash
  },
  mounted() {
    setTimeout(() => {
      document.querySelector('body').style.overflow = 'visible auto';
    }, 2000)
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
body {
  overflow: hidden;
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
