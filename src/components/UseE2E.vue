<template>
  <div>
    <div class="text-area">
      <h1 class="title is-1">
        You can use end-to-end testing for...
      </h1>
      <div class="columns">
        <div class="column is-offset-1">
          <h3 v-for="(e,i) in uses" :key="e.text"
          :id="`uses-${i}`" class="title is-3"
          :class="e.class" @click="strikeOut(e)">
            {{ e.text }}
          </h3>
        </div>
      </div>
    </div>
    <div class="text-area">
      <h1 class="title is-1">
        But not so much for...
      </h1>
      <div class="columns">
        <div class="column is-offset-1">
          <h3 v-for="(e,i) in notUses" :key="e.text" :id="`not-uses-${i}`" class="title is-3"
          :class="e.class" @click="strikeOut(e)">
            {{ e.text }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UseE2E',
  data() {
    return {
      uses: [
        {
          text: 'regression testing',
          class: {
            strikethrough: false,
          },
        },
        {
          text: 'quality control',
          class: {
            strikethrough: false,
          },
        },
        {
          text: 'validation of user experience',
          class: {
            strikethrough: false,
          },
        },
        {
          text: 'integration of all systems',
          class: {
            strikethrough: false,
          },
        },
        {
          text: 'smoke tests',
          class: {
            strikethrough: false,
          },
        },
      ],
      notUses: [
        {
          text: 'fast iteration / validation during development',
          class: {
            strikethrough: false,
          },
        },
      ],
    };
  },
  methods: {
    strikeOut(e) {
      e.class.strikethrough = !e.class.strikethrough;
    },
  },
};
</script>

<style lang="scss" scoped>
.strikethrough {
  text-decoration: line-through;
}
</style>
