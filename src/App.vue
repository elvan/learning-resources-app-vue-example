<template>
  <ul></ul>
</template>

<script>
export default {
  name: 'App',

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
