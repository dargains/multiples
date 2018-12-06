<template lang="html">
  <li class="listItem" :class="{bold: boldList.includes(number), first: isFirst}">
    <input type="number" ref="input" v-if="isFirst" :value="number" @input="onInputChange" />
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
      }, 300);
    }
  }
}
</script>

<style lang="scss">
.listItem {
  background-color: lightblue;
  height: 80px;
  min-width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  &.bold {
    font-weight: bold;
    background-color: lightgreen;
  }
  &.first {
    background-color: lightyellow;
  }
}
input {
  background-color: transparent;
  border: 0;
  padding: 0;
  margin: 0;
  text-align: center;
  font-size: 16px;
  width: 70%;

}
</style>
