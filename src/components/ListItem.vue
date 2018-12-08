<template lang="html">
  <li class="listItem" :class="{bold: boldList.includes(number), first: isFirst}">
    <input type="number" ref="input" :value="number" @input="onInputChange" v-if="isFirst"/>
    <img src="../assets/pen.svg" alt="" v-if="isFirst">
    <p v-else>{{number}}</p>
  </li>
</template>

<script>
export default {
  name: 'ListItem',
  props: ['number', 'isFirst'],
  data() {
    return {
      boldList: [16,24,32,48,56,80,320,376,512,800,1024,1280,1440,1600,1920,],
      typingTimer: null
    }
  },
  methods: {
    onInputChange() {
      clearTimeout(this.typingTimer);
      this.typingTimer = setTimeout(() => {
        this.$emit('handleInput', this.$refs.input.value)
      }, 500);
    }
  }
}
</script>

<style lang="scss">
.listItem {
  background-color: #313740;
  min-height: 80px;
  min-width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: white;
  border: .5px solid #222831;
  &.bold {
    font-weight: bold;
    background-color: #222831;
  }
  &.first {
    background-image: linear-gradient(135deg, #98dfaf, #02a5ad);
    border: 0;
    grid-row-start: 1;
    grid-row-end: 3;
  }
  input {
    background-color: transparent;
    border: 0;
    padding: 0;
    margin: 0;
    text-align: center;
    font-size: 40px;
    width: 70%;
    color: white;
  }
  img {
    position: absolute;
    width: 20px;
    top: 10px;
    right: 10px;
    pointer-events: none;
  }
}
</style>
