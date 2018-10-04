<template>
  <div id="use-e2e-page">
    <div class="text-area">
      <h1 class="title is-1">
        End-to-end testing can be useful for
      </h1>
      <p>
        (click on items to cross out)
      </p>
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
        But probably less useful for
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
          text: 'smoke tests',
          class: {
            strikethrough: false,
          },
        },
        {
          text: 'regression testing',
          class: {
            strikethrough: false,
          },
        },
        {
          text: 'validating functionality from the user\'s perspective',
          class: {
            strikethrough: false,
          },
        },
        {
          text: 'testing integration across components, layers, and systems',
          class: {
            strikethrough: false,
          },
        },
      ],
      notUses: [
        {
          text: 'quick feedback during development',
          class: {
            strikethrough: false,
          },
        },
        {
          text: 'identifying where something is broken',
          class: {
            strikethrough: false,
          },
        },
        {
          text: 'complete coverage',
          class: {
            strikethrough: false,
          },
        },
        {
          text: 'low-maintenance, non-fragile testing',
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
