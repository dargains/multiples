<template lang="html">
  <li class="listItem">{{number}}</li>
</template>

<script>
export default {
  name: 'ListItem',
  props: ['number']
}
</script>

<style lang="css">
  .listItem {
    border-radius: 4px;
    background-color: lightblue;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
