<template>
  <div id="newTodo" class="flex-inline">
    <input
      class="shadow border rounded py-2 px-3 focus:outline-none focus:shadow-outline"
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
    addTodo(event) {
      let newTodoValue = event.target.value;
      if (newTodoValue) {
        this.$store.dispatch("addTodo", newTodoValue);
        event.target.value = "";
      }
    },
  },
};
</script>