<template>
  <section>
    <ul class="grid">
      <ListItem v-for="number in numberList" :key="number" :number="number"/>
    </ul>
  </section>
</template>

<script>
import ListItem from './ListItem';

export default {
  name: 'HelloWorld',
  components: {
    ListItem
  },
  mounted() {
    this.getMultiples(8, 0, 600);
  },
  data() {
    return {
      numberList: []
    }
  },
  methods: {
    getMultiples(number, from, to) {
      const numberList = [];
      for (let i = from; i <= to; i++) {
        i%number === 0 && numberList.push(i)
      }
      this.numberList = numberList;
    }
  }
}
</script>

<style lang="css">
  .grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-row-gap: 10px;
    grid-column-gap: 20px;
  }
</style>
