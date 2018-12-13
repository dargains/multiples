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
  grid-template-columns: repeat(10, 1fr);
  grid-row-gap: 0;
  grid-column-gap: 0;
  @include mq(0, 1280px) {
    grid-template-columns: repeat(8, 1fr);
  }
  @include mq(0, 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @include mq(0, 820px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @include mq(0, 658px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @include mq(0, 496px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @include mq(0, 340px) {
    grid-template-columns: repeat(2, 1fr);
  }

}
</style>
