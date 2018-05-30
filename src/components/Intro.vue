<template>
  <div id="intro-page">
    <div class="text-area">
      <h1 class="title is-1">
        End-to-end testing = UI testing
      </h1>
    </div>
    <div class="text-area">
      <h1 class="title is-1">
        "end to end":
      </h1>
      <div class="columns">
        <div class="column is-offset-1">
          <h2 class="title is-2">
            front-end application ↔ API calls ↔ back-end application ↔ data store
          </h2>
        </div>
      </div>
    </div>
    <div class="text-area">
      <h1 class="title is-1">
        The Testing Pyramid
      </h1>
    </div>
    <div class="text-area">
      <a class="button" @click="togglePyramid">
        View Pyramid
      </a>
    </div>
    <div v-show="viewPyramid" >
      <img src="../../static/pyramid.png" alt="pyramid" class="half-size">
      <div>
        Image lifted from from <a href="https://strongloop.com/strongblog/nodejs-testing-documenting-apis-mocha-acquit/" id="image-link">strongloop.com</a>
      </div>
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
