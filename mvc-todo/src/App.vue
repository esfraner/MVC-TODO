<template>
  <div id="app" class="container">
    <Header />
    <div class="container inline-flex justify-center">
      <ChangeStates :todos="todos" :isSomeActiveTodo="isSomeActiveTodo" />
      <NewTodo />
    </div>
    <ul class="container ">
      <List v-for="todo in filteredTodos" :key="todo.id" :todo="todo" />
    </ul>
    <div class="container inline-flex justify-center">
      <RemainingTodos :remainingTodos="remainingTodos" />
      <FiltersOption
        :filters="filters"
        :isSomeCompleteTodo="isSomeCompleteTodo"
      />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import List from "./components/List";
import NewTodo from "./components/NewTodo";
import ChangeStates from "./components/ChangeStates";
import FiltersOption from "./components/FiltersOption";
import RemainingTodos from "./components/RemainingTodos.vue";

export default {
  name: "App",
  components: {
    Header,
    List,
    NewTodo,
    ChangeStates,
    FiltersOption,
    RemainingTodos,
  },
  computed: {
    todos() {
      return this.$store.getters.todos;
    },
    filteredTodos() {
      return this.$store.getters[this.visibility];
    },
    isSomeActiveTodo() {
      return this.$store.getters.isSomeActiveTodo;
    },
    isSomeCompleteTodo() {
      return this.$store.getters.isSomeCompleteTodo;
    },
    visibility() {
      return this.$store.getters.visibility;
    },
    remainingTodos() {
      return this.$store.getters.remainingTodos;
    },
    filters() {
      return this.$store.getters.filters;
    },
  },
  methods: {},
};
</script>
<style >
span {
  padding: 1%;
}
</style>