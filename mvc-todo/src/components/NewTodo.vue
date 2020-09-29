<template>
  <div id="newTodo">
    <input
      type="text"
      placeholder="What needs to be done?"
      @keyup.enter="addTodo"
    />
  </div>
</template>

<script>
export default {
  name: "NewTodo",

  methods: {
    addTodo(e) {
      const newTodoValue = e.target.value;
      this.$store.commit("addTodo", newTodoValue);
    },
  },
};
</script>