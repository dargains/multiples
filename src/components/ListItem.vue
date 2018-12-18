<template lang="html">
  <li class="listItem" :class="{bold: boldList.includes(number) || number === 666, first: isFirst}">
    <label for="firstNumber" v-if="isFirst"><img src="../assets/pen.svg" alt="edit"></label>
    <input type="text" ref="input" maxlength="4" id="firstNumber" :value="number" @keypress="onInputChange" v-if="isFirst"/>
    <div class="flip-container"  v-else-if="number === 666">
      <div class="flipper">
        <div class="front">{{number}}</div>
        <div class="back"><img src="../assets/renato.jpg" alt=""></div>
      </div>
    </div>
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
    onInputChange(event) {
      if ((event.keyCode > 31 && (event.keyCode < 48 || event.keyCode > 57)) && event.keyCode !== 46) {
        event.preventDefault();
        return;
      }
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
  label {
    position: absolute;
    width: 20px;
    top: 10px;
    right: 10px;
    cursor: pointer;
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
    width: 100%;
  }
}
.flip-container {
	perspective: 1000px;
  display: inline-block;
}
/* flip the pane when hovered */
.flip-container:hover .flipper {
	transform: rotateY(180deg);
}

.flip-container, .front, .back {
  min-height: 80px;
  min-width: 80px;
}

.flip-container.selected .front {
  font-weight: bold;
  background-color: #222831;
}

/* flip speed goes here */
.flipper {
	transition: 0.6s;
	transform-style: preserve-3d;
	position: relative;
}

/* hide back of pane during swap */
.front, .back {
	backface-visibility: hidden;
	position: absolute;
	top: 0;
	left: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* front pane, placed above back */
.front {
	z-index: 2;
	/* for firefox 31 */
	transform: rotateY(0deg);
}

/* back, initially hidden pane */
.back {
	transform: rotateY(180deg);
}
</style>
