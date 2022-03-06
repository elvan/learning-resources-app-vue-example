<template>
  <the-header title="LearningResources"></the-header>
  <stored-resources :resources="storedResources"></stored-resources>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import StoredResources from './components/learning-resources/StoredResources.vue';

export default {
  components: {
    TheHeader,
    StoredResources,
  },

  data() {
    return {
      storedResources: [
        {
          id: '1',
          title: 'Vue Documentation',
          description: 'The official Vue.js documentation.',
          url: 'https://vuejs.org/',
        },
        {
          id: '2',
          title: 'Vue Router',
          description: 'A modern router for Vue.js.',
          url: 'https://router.vuejs.org/',
        },
        {
          id: '3',
          title: 'Vuex',
          description: 'A state management pattern + library for Vue.js.',
          url: 'https://vuex.vuejs.org/',
        },
        {
          id: '4',
          title: 'Vue CLI',
          description: 'A Vue.js development toolkit.',
          url: 'https://cli.vuejs.org/',
        },
      ],
    };
  },

  methods: {},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
