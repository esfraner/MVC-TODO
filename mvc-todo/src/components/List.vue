<template>
  <li>
    <label>{{ todo.value }}</label>
    <input @click="changeActive" type="checkbox" :checked="!todo.active" />
    <button @click="removeTodo" :id="todo.id">x</button>
  </li>
</template>

<script>
export default {
  name: "List",
  props: ["todo"],
  methods: {
    changeActive() {
      this.todo.active = !this.todo.active;
    },
    removeTodo() {
      this.$store.dispatch("removeTodo", this.todo);
    },
  },
};
</script>
<style >
li {
  list-style-type: none;
}
</style>