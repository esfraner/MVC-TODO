<template>
  <li>
    <span class="labels-container">
      <label v-if="todo.active">{{ todo.value }}</label>
      <label v-if="!todo.active" class="cross-out">{{ todo.value }}</label>
    </span>

    <input @click="changeActive" type="checkbox" :checked="!todo.active" />
    <button @click="removeTodo" :id="todo.id" class="btn-remove">x</button>
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
  padding: 1%;
}
label {
  margin-right: 1%;
}

.btn-remove {
  margin-left: 1%;
  border-style: unset;
  border-color: white;
  background-color: white;
  color: teal;
}
.cross-out {
  text-decoration: line-through;
}
</style>