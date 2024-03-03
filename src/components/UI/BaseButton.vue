<template>
  <button :type="type" :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['type', 'mode'],
};
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  border: 1px solid #3a0061;
  color: white;
  font-family: inherit;
  cursor: pointer;
  background-color: #3a0061;
}

button:hover,
button:active {
  border-color: #270041;
  background-color: #270041;
}

.flat {
  border: none;
  color: #3a0061;
  background-color: transparent;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>
