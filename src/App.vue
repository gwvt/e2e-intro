<template>
  <div id="app" class="columns">
    <div class="column is-3 side">
      <aside class="menu">
        <ul class="menu-list">
          <li class="menu-item">
            <router-link to="/" id="intro-link">
              E2E
            </router-link>
          </li>
          <li class="menu-item">
            <router-link to="/ask-web" id="ask-web-link">
              How Important Is It?
            </router-link>
          </li>
          <li class="menu-item">
            <router-link to="/use-e2e" id="use-e2e-link">
              Using E2E In Your Workflow
            </router-link>
          </li>
          <li class="menu-item">
            <router-link to="/tools" id="tools-link">
              Testing Frameworks
            </router-link>
          </li>
        </ul>
      </aside>
    </div>
    <div class="column is-9 main">
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
  margin: 12rem 0 0 1rem;
}

.main {
  margin-top: 8rem;
}

.is-centered-vertically-horizontally {
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-area {
  margin-bottom: 3rem;
  padding-right: 2rem;
}
</style>
