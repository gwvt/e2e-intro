<template>
  <div id="tools-page">
    <div class="text-area">
      <h2 class="title is-2">
        How many have used the following frameworks?
      </h2>
    </div>
    <template v-for="f in frameworks">
      <div class="columns" :key="f.name">
        <div class="column is-4">
          <h4 class="title is-4">
            {{ f.name }}
          </h4>
        </div>
        <div class="column is-4">
          <b-field>
            <b-input :id="`${f.name}-input`" placeholder="enter number" v-model="f.number" type="number"/>
        </b-field>
        </div>
      </div>
    </template>
    <div v-if="allNumbersEntered">
      <h2 class="title is-2" id="winner-message">
        Tonight's winner is {{ winner }}!
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tools',
  data() {
    return {
      frameworks: [
        {
          name: 'Nightwatch',
          number: null,
        },
        {
          name: 'WebdriverIO',
          number: null,
        },
        {
          name: 'Protractor',
          number: null,
        },
        {
          name: 'Cypress',
          number: null,
        },
      ],
    };
  },
  computed: {
    allNumbersEntered() {
      let entered = true;
      this.frameworks.forEach((f) => {
        if (!f.number) {
          entered = false;
        }
      });
      return entered;
    },
    winner() {
      const frameworks = this.frameworks.slice();
      const sorted = frameworks.sort((a, b) => b.number - a.number);
      return sorted[0].name;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
