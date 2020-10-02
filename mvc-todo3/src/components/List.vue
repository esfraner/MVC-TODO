<template>
  <li>
    <div class="container inline-flex justify-center">
      <div>
        <input
          class="align-middle py-1 px-1"
          @click="changeActive"
          type="checkbox"
          :checked="!todo.active"
        />
      </div>
      <div
        class="inset-0 relative h-5 py-1 px-2 w-5/12"
        @dblclick="makeVisible"
      >
        <input
          class="bg-white w-10/12 px-1"
          v-if="todo.active"
          :value="todo.value"
          @focusout="makeDisabled"
          @keyup.enter="editTodo"
          disabled
        />
        <input
          v-if="!todo.active"
          class="line-through bg-white w-10/12 px-1"
          :value="todo.value"
          @focusout="makeDisabled"
          @keyup.enter="editTodo"
          disabled
        />
      </div>

      <div>
        <button @click="removeTodo" class="hover:text-red-400">x</button>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "List",
  props: ["todo"],
  data() {
    return {
      currentInputValue: "",
    };
  },
  methods: {
    changeActive() {
      this.$store.dispatch("changeActive", this.todo);
    },
    removeTodo() {
      this.$store.dispatch("removeTodo", this.todo);
    },
    makeVisible(e) {
      e.target.disabled = false;
      this.currentInputValue = e.target.value;
      e.target.focus();
    },
    makeDisabled(e) {
      e.target.disabled = true;
    },
    editTodo(e) {
      if (e.target.value) {
        const paramsToEdit = {
          selectedTodo: this.todo,
          newValue: e.target.value,
        };
        this.$store.dispatch("editTodoValue", paramsToEdit);
      } else {
        e.target.value = this.currentInputValue;
      }
      e.target.blur();
    },
  },
};
</script>
<style >
</style>