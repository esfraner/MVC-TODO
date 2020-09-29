<template>
  <div id="app">
    <Header />
    <NewTodo />
    <ul>
      <List v-for="todo in filteredTodos" :key="todo.id" :todo="todo" />
    </ul>
    <div>
      <span>Remaining {{ remainingTodos }}</span>
      <span v-for="(val, key) in filters" :key="key" class="filters">
        <button @click="changeVisibility" :id="key">{{ key }}</button>
      </span>
      <span>
        <button @click="clearComplete">Clear Complete</button>
      </span>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
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
    Footer,
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