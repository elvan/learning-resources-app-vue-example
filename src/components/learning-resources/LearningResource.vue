<template>
  <li>
    <div>
      <header>
        <h3>{{ title }}</h3>
        <button>Delete</button>
      </header>
    </div>
    <p>{{ description }}</p>
    <nav>
      <a :href="link">View Resource</a>
    </nav>
  </li>
</template>

<script>
export default {
  props: ['title', 'description', 'link'],
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
