<template>
  <teleport to="body">
    <div @click="$emit('close')"></div>
    <dialog open>
      <header>
        <slot name="header">
          <h2>{{ title }}</h2>
        </slot>
      </header>
      <section>
        <slot></slot>
      </section>
      <menu>
        <slot name="actions">
          <base-button @click="$emit('close')">Close</base-button>
        </slot>
      </menu>
    </dialog>
  </teleport>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
    },
  },
  emits: ['close'],
};
</script>

<style scoped>
div {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  z-index: 100;
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

header {
  width: 100%;
  padding: 1rem;
  color: white;
  background-color: #3a0061;
}

header h2 {
  margin: 0;
}

section {
  padding: 1rem;
}

menu {
  display: flex;
  justify-content: flex-end;
  margin: 0;
  padding: 1rem;
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
</style>
