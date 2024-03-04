<template>
  <li>
    <base-card>
      <header>
        <h3>{{ title }}</h3>
        <base-button mode="flat" @click="deleteResource(id)"
          >Delete</base-button
        >
      </header>
      <p>{{ description }}</p>
      <nav>
        <a :href="link">View Resource</a>
      </nav>
    </base-card>
  </li>
</template>

<script>
export default {
  props: ['id', 'title', 'description', 'link'],
  inject: ['deleteResource'],
};
</script>

<style scoped>
li {
  max-width: 40rem;
  margin: auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1.25rem;
}

p {
  margin: 0.5rem 0;
}

a {
  color: #ce5c00;
  text-decoration: none;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
