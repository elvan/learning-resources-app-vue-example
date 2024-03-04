<template>
  <base-card>
    <form>
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea id="description" name="description" rows="3"></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" />
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<style scoped>
label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input,
textarea {
  display: block;
  width: 100%;
  padding: 0.15rem;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  border-color: #3a0061;
  outline: none;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
