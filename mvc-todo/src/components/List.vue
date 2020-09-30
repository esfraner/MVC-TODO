<template>
  <li>
    <div class="container labels-container col-md-12">
      <div class="div-toggle col-md-8" @dblclick="makeVisible">
        <input
          v-if="todo.active"
          :value="todo.value"
          @focusout="makeDisabled"
          @keyup.enter="editTodo"
          disabled
        />
        <input
          v-if="!todo.active"
          class="cross-out"
          :value="todo.value"
          @focusout="makeDisabled"
          @keyup.enter="editTodo"
          disabled
        />
      </div>

      <div class="col-md-4">
        <input @click="changeActive" type="checkbox" :checked="!todo.active" />
        <button @click="removeTodo" class="btn-remove">x</button>
      </div>
    </div>
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
    makeVisible(e) {
      e.target.disabled = false;
      e.target.focus();
    },
    makeDisabled(e) {
      e.target.disabled = true;
    },
    editTodo(e) {
      this.todo.value = e.target.value;
      e.target.blur();
    },
  },
};
</script>
<style >
li {
  list-style-type: none;
  padding: 2%;
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
input {
  border: none;
  background: none;
}
.div-toggle {
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  height: 50%;
  bottom: 0;
}
</style>