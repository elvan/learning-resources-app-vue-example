<template>
  <ul>
    <learning-resource
      v-for="res in resources"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></learning-resource>
  </ul>
</template>

<script>
import LearningResource from './LearningResource.vue';

export default {
  props: ['resources'],
  components: {
    LearningResource,
  },
};
</script>

<style scoped>
ul {
  max-width: 40rem;
  margin: 0;
  margin: auto;
  padding: 0;
  list-style: none;
}
</style>
