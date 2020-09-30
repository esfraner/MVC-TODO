<template>
  <div id="ChangeStates">
    <button @click="changeAllTodosStates" class="btn btn-outline-secondary">
      Change
    </button>
  </div>
</template>

<script>
export default {
  name: "ChangeStates",
  props: ["todos"],
  methods: {
    changeAllTodosStates() {
      this.isSomeActiveTodo() ? this.changeToInactive() : this.changeToActive();
    },
    isSomeActiveTodo() {
      return this.todos.some((todo) => todo.active);
    },
    changeToActive() {
      this.$store.dispatch("changeTodosToActive");
    },
    changeToInactive() {
      this.$store.dispatch("changeTodosToInactive");
    },
  },
};
</script>