<template>
  <section class="main">
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
    this.getMultiples(8, 1, 2000);
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
    },
    getNewNumber(value) {
      if (!value) return;
      this.getMultiples(value, 1, 2000);
    }
  }
}
</script>

<style lang="scss">
@mixin mq($smallerValue,$biggerValue) {
  @media (min-width: #{$smallerValue}) and (max-width: $biggerValue) {
    @content;
  }
}
.main {
  // width: 100%;
  // margin: 0 auto;
  // max-width: 1280px;
  // padding: 40px 10%;
}
.grid {
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-row-gap: 0;
  grid-column-gap: 0;
  @include mq(0, 1280px) {
    grid-template-columns: repeat(12, 1fr);
  }
  @include mq(0, 1024px) {
    grid-template-columns: repeat(10, 1fr);
  }
  @include mq(0, 820px) {
    grid-template-columns: repeat(8, 1fr);
  }
  @include mq(0, 658px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @include mq(0, 496px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @include mq(0, 340px) {
    grid-template-columns: repeat(3, 1fr);
  }

}
</style>
