<template>
  <section class="main" v-infinite-scroll="onScroll" infinite-scroll-distance="240">
    <ul class="grid">
      <ListItem v-for="(number, index) in numberList" :key="number" :number="number" :isFirst="!index" @handleInput="getNewNumber"/>
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
    this.getMultiples(this.value, 1, this.range);
  },
  data() {
    return {
      numberList: [],
      range: 3000,
      value: 8
    }
  },
  methods: {
    onScroll() {
      this.range += this.value * 500;
      this.getMultiples(this.value, 1, this.range);
    },
    getMultiples(number, from, to) {
      return new Promise(resolve => {
        const numberList = [];
        for (let i = from; i <= to; i++) {
          i%number === 0 && numberList.push(i)
        }
        this.numberList = numberList;
        resolve();
      });
    },
    getNewNumber(value) {
      if (value === '0') return;
      this.range = 2000;
      this.value = value;
      this.getMultiples(this.value, 1, this.range).then(() => {
        if(document.querySelector('body').offsetHeight < window.innerHeight) this.onScroll();
      })
    }
  }
}
</script>

<style lang="scss">
.grid {
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(150px, 1fr) );
  grid-row-gap: 0;
  grid-column-gap: 0;
}
</style>
