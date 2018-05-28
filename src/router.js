import Vue from 'vue';
import Router from 'vue-router';
import Intro from './components/Intro.vue';
import AskWeb from './components/AskWeb.vue';
import UseE2E from './components/UseE2E.vue';
import Tools from './components/Tools.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'intro',
      component: Intro,
    },
    {
      path: '/ask-web',
      name: 'ask-web',
      component: AskWeb,
    },
    {
      path: '/use-e2e',
      name: 'use-e2e',
      component: UseE2E,
    },
    {
      path: '/tools',
      name: 'tools',
      component: Tools,
    },
  ],
});
