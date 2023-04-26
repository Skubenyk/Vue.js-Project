<template>
  <div>
    <li>
      <span v-bind:class="{ done: todo.completed }">
        <input type="checkbox" v-on:change="todo.completed = !todo.completed" />
        <strong>{{ index + 1 }}</strong>
        {{ todo.title }}
        <!-- {{ todo.title | uppercase }} -->
      </span>
      <button class="rm" v-on:click="$emit('remove-todo', todo.id)">
        &times;
      </button>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: Number,
  },
  // filters: {
  //   uppercase(value) {
  //     return value.toUpperCase();
  //   },
  // },
};
</script>

<style scoped>
li {
  justify-content: space-between;
  border: 1px solid #ccc;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
  display: flex;
}
.rm {
  border-radius: 50%;
  background: red;
  font-weight: bold;
  cursor: pointer;
  color: #fff;
  border: none;
}

input {
  margin-right: 1rem;
}
.done {
  text-decoration: line-through;
}
</style>
