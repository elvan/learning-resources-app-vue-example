<template>
  <ul>
    <learning-resource
      v-for="resource in storedResources"
      :key="resource.id"
      :title="resource.title"
      :description="resource.description"
      :url="resource.url"
    ></learning-resource>
  </ul>
</template>

<script>
import LearningResource from './components/learning-resources/LearningResource.vue';

export default {
  components: {
    LearningResource,
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
