<template>
  <div id="newTodo">
    <input
      class="form-control col-md-6"
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