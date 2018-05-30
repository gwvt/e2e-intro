<template>
  <div id="ask-web-page">
    <div class="text-area">
      <h1 class="title is-1">
        How important is end-to-end testing?
      </h1>
      <h2 class="title is-2">
        Let's ask the web!
      </h2>
    </div>
    <div class="columns">
      <div class="column is-half image-area is-centered-vertically-horizontally" id="image-area-1"
      @mouseover="showImage(1)" @mouseout="hideImage(1)">
      <div v-if="showAnswer[1]" id="answer-1">
        <img src="../../static/e1.png" alt="answer-1">
        <a href="https://medium.freecodecamp.org/why-end-to-end-testing-is-important-for-your-team-cb7eb0ec1504">
          medium.freecodecamp.org
        </a>
      </div>
      <h3 v-else>
        Answer 1
      </h3>
    </div>
    <div class="column is-half image-area is-centered-vertically-horizontally" id="image-area-2"
    @mouseover="showImage(2)" @mouseout="hideImage(2)">
    <div v-if="showAnswer[2]" id="answer-2">
      <img src="../../static/e2.png" alt="answer-2">
      <a href="https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html">
        testing.googleblog.com
      </a>
    </div>
    <h3 v-else>
      Answer 2
    </h3>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'AskWeb',
  data() {
    return {
      showAnswer: {
        1: false,
        2: false,
      },
    };
  },
  methods: {
    showImage(n) {
      this.showAnswer[n] = true;
    },
    hideImage(n) {
      this.showAnswer[n] = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.image-area {
  border-radius: 10px;
  background-color: #363636;
  margin: 5px;
  width: 360px;
  height: 340px;
}
</style>
