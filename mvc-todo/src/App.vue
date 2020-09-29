<template>
  <div id="app" class="container col-md-8">
    <Header class="container col-md-8" />
    <NewTodo class="col-md-8 text-center" />
    <ul class="col-md-8 text-center">
      <List v-for="todo in filteredTodos" :key="todo.id" :todo="todo" />
    </ul>
    <div class="col-md-8 text-center">
      <span>Remaining {{ remainingTodos }}</span>
      <span v-for="(val, key) in filters" :key="key" class="filters">
        <button
          @click="changeVisibility"
          :id="key"
          type="button"
          class="btn btn-outline-secondary"
        >
          {{ key }}
        </button>
      </span>
      <span>
        <button
          @click="clearComplete"
          type="button"
          class="btn btn-outline-success"
        >
          Clear Complete
        </button>
      </span>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import List from "./components/List";
import NewTodo from "./components/NewTodo";

const filters = {
  all: (todos) => todos,
  active: (todos) => todos.filter((todo) => todo.active),
  completed: (todos) => todos.filter((todo) => !todo.active),
};

export default {
  name: "App",
  data() {
    return {
      visibility: "all",
      filters,
    };
  },
  components: {
    Header,
    List,
    NewTodo,
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    filteredTodos() {
      return filters[this.visibility](this.todos);
    },
    remainingTodos() {
      return this.todos.filter((todo) => todo.active).length;
    },
  },
  methods: {
    changeVisibility: function ({ target }) {
      this.visibility = target.id;
    },
    clearComplete: function () {
      this.$store.dispatch("clearComplete");
    },
  },
};
</script>
<style >
span {
  padding: 1%;
}
</style>