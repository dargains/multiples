<template lang="html">
  <div class="splash">
    <img src="../assets/splash.jpg" alt="">
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.splash {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: splashAnimation 2s ease-out forwards;
  img {
    max-width: 400px;
    width: 100%;
    animation: imageAnimation 2s ease-out forwards;
  }
}
@keyframes imageAnimation {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes splashAnimation {
  0% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    pointer-events: none;
    opacity: 0;
  }
}
</style>
