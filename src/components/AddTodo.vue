<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title" />
    <button type="submit">Create</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
    };
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false,
        };
        this.$emit('add-todo', newTodo);
        this.title = '';
      }
    },
  },
};
</script>

<style scoped>
form {
  justify-content: center;
  display: flex;
}
input {
  padding-right: 10px;
  margin-right: 10px;
  padding-left: 10px;
  font-size: 14px;
  width: 400px;
  height: 30px;
}
button {
  background-color: green;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
}
</style>
