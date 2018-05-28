<template>
  <div>
    <h1 class="title is-1">
      How important is end-to-end testing?
    </h1>
    <h2 class="title is-2">
      Let's ask the web!
    </h2>
    <div class="columns">
      <div class="column is-half image-area" @mouseover="showImage(1)" @mouseout="hideImage(1)">
        <img src="../../static/e1.png" alt="answer-1" v-if="showAnswer[1]">
        <h3 v-else>
          Answer 1
        </h3>
      </div>
      <div class="column is-half image-area" @mouseover="showImage(2)" @mouseout="hideImage(2)">
        <img src="../../static/e2.png" alt="answer-2" v-if="showAnswer[2]">
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
  border: 1px solid white;
  min-height: 400px;
}
</style>
