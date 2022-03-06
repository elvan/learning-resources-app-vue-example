<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResourcesButtonMode"
      >Stored Resources</base-button
    >
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="adResourceButtonMode"
      >Add Resource</base-button
    >
  </base-card>

  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import AddResource from './AddResource.vue';
import StoredResources from './StoredResources.vue';

export default {
  components: {
    AddResource,
    StoredResources,
  },

  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
    };
  },

  data() {
    return {
      selectedTab: 'stored-resources',

      storedResources: [
        {
          id: '1',
          title: 'Vue Documentation',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org/',
        },
        {
          id: '2',
          title: 'Vue Router',
          description: 'A modern router for Vue.js.',
          link: 'https://router.vuejs.org/',
        },
        {
          id: '3',
          title: 'Vuex',
          description: 'A state management pattern + library for Vue.js.',
          link: 'https://vuex.vuejs.org/',
        },
        {
          id: '4',
          title: 'Vue CLI',
          description: 'A Vue.js development toolkit.',
          link: 'https://cli.vuejs.org/',
        },
      ],
    };
  },

  computed: {
    storedResourcesButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },

    adResourceButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },

  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },

    addResource(title, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: link,
      };

      this.storedResources.unshift(newResource);
    },
  },
};
</script>
