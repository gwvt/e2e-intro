import Vue from 'vue';
import Router from 'vue-router';
import One from './components/One.vue';
import Two from './components/Two.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'one',
      component: One,
    },
    {
      path: '/two',
      name: 'two',
      component: Two,
    },
  ],
});
