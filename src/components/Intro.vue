<template>
  <div>
    <h1 class="title is-1">
      e2e testing = functional testing = UI testing
    </h1>
    <h1 class="title is-1">
      "end to end" = front-end application > API/service calls > back-end application > data store
    </h1>
    <h1 class="title is-1">
      The Testing Pyramid
    </h1>
    <a class="button" @click="togglePyramid">
      View Pyramid
    </a>
    <div>
      <img src="../../static/pyramid.png" alt="pyramid" v-if="viewPyramid" class="half-size">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  data() {
    return {
      viewPyramid: false,
    };
  },
  methods: {
    togglePyramid() {
      this.viewPyramid = !this.viewPyramid;
    },
  },
};
</script>

<style lang="scss" scoped>
.half-size {
  width: 50%;
}
</style>
