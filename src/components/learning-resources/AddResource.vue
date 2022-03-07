<template>
  <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="closeDialog">
    <template #default>
      <p>The input is invalid. Please try again.</p>
    </template>
    <template #actions>
      <button @click="closeDialog">Close</button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input ref="titleInput" id="title" name="title" type="text" />
      </div>

      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          ref="descriptionInput"
          id="description"
          name="description"
          rows="3"
        ></textarea>
      </div>

      <div class="form-control">
        <label for="link">Link</label>
        <input ref="linkInput" id="link" name="link" type="url" />
      </div>

      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ['addResource'],

  data() {
    return {
      inputIsInvalid: false,
    };
  },

  methods: {
    submitData(event) {
      event.preventDefault();

      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descriptionInput.value;
      const enteredLink = this.$refs.linkInput.value;

      if (
        enteredTitle.trim().length === 0 ||
        enteredDescription.trim().length === 0 ||
        enteredLink.trim().length === 0
      ) {
        this.inputIsInvalid = true;
        return;
      }

      this.addResource(enteredTitle, enteredDescription, enteredLink);
    },

    closeDialog() {
      this.inputIsInvalid = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
