<template>
  <div id="app" class="columns">
    <div class="column is-2 side">
      <aside class="menu">
        <ul class="menu-list">
          <li>
            <router-link to="/">
              Intro
            </router-link>
          </li>
          <li>
            <router-link to="/ask-web">
              How Important is E2E Testing?
            </router-link>
          </li>
          <li>
            <router-link to="/use-e2e">
              E2E Testing and Your Development Workflow
            </router-link>
          </li>
          <li>
            <router-link to="/tools">
              Tools for E2E Testing
            </router-link>
          </li>
        </ul>
      </aside>
    </div>
    <div class="column is-10 main">
      <router-view :key="$route.path" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
};
</script>

<style lang="scss">
@import "~bulmaswatch/darkly/_variables";
@import "~bulma/sass/utilities/_all";

$colors: (
  "white": ($white, $black),
  "black": ($black, $white),
  "light": ($light, $light-invert),
  "dark": ($dark, $dark-invert),
  "primary": ($primary, $primary-invert),
  "info": ($info, $info-invert),
  "success": ($success, $success-invert),
  "warning": ($warning, $warning-invert),
  "danger": ($danger, $danger-invert)
);

$link: $info;
$link-invert: $info-invert;
$link-focus-border: $info;

@import "~bulma";
@import "~bulmaswatch/darkly/_overrides";
@import "~buefy/src/scss/buefy";

li {
  font-size: 1.5rem;
}

.side {
  padding: 5rem 0 0 3rem;
}

.main {
  padding: 2rem;
}
</style>
