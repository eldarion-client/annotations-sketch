<template>
  <div id="app">
    <button @click="drawing = !drawing">{{ drawing ? "Stop Drawing" : "Start Drawing" }}</button>
    <Annotator :drawing="drawing" @draw-end="drawfinish" @draw-cancel="drawcancel" @draw="onDraw">
       <img alt="old manuscript" src="./assets/747-at150.gif">
       <!-- <polygon class="stroke" slot="drawing" /> not supported yet -->
      <rect class="stroke" slot="drawing" />
    </Annotator>
  </div>
</template>

<script>
import Annotator from 'vue-annotator';

export default {
  name: 'app',
  data() {
    return {
      drawing: false
    }
  },
  components: {
    Annotator
  },
  methods: {
    drawfinish (element) {
      console.log(`finish drawing`, `<${element.type}>`, 'sdsd')
    },
    drawcancel () {
      console.log('cancel drawing')
    },
    onDraw (element) {
      console.log(element.node)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
svg {
  background: whitesmoke;
}
#app {
  width: 100%;
  height: 100%;
}
.stroke {
  stroke: limegreen;
  stroke-width: 3px;
}
.stroke:hover {
  stroke: orange;
  stroke-width: 3px;
}
</style>
