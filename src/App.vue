<template>
  <div id="app">
    <SelectImages v-if="images.length === 0" />
    <div v-else>
      <AnnotateImage
        v-for="(image, index) in images"
        v-if="selectedIndex === index"
        :key="index" :image-index="index" :image-url="image" @next="next" @prev="prev" />
    </div>
    <div v-for="(annotation, index) in annotations" :key="index">{{ annotation[0] }}: {{ annotation[1].x }}, {{ annotation[1].y }}</div>
  </div>
</template>

<script>
import SelectImages from './components/SelectImages.vue';
import AnnotateImage from './components/AnnotateImage.vue';

export default {
  name: 'app',
  components: {
    SelectImages,
    AnnotateImage,
  },
  data() {
    return {
      selectedIndex: 0
    }
  },
  computed: {
    annotations() {
      return this.$store.state.annotations;
    },
    images() {
      return this.$store.state.images;
    }
  },
  methods: {
    prev() {
      if (this.selectedIndex === 0) {
        this.selectedIndex = this.images.length - 1;
      } else {
        this.selectedIndex = this.selectedIndex - 1;
      }
    },
    next() {
      if (this.selectedIndex === this.images.length - 1) {
        this.selectedIndex = 0;
      } else {
        this.selectedIndex = this.selectedIndex + 1;
      }
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
button {
  cursor: pointer;
  font-size: 24px;
  background: rgb(53, 53, 187);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  &:hover {
    background: rgb(75, 75, 194);
  }
}
textarea {
  width: 900px;
  height: 300px;
  border: 1px solid #CCC;
}
</style>
