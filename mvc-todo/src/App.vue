<template>
  <div id="app" class="container col-md-8">
    <Header class="container col-md-8" />
    <div class="container">
      <div class="col-md-8">
        <ChangeStates
          class="col-md-2"
          :todos="todos"
          :isSomeActiveTodo="isSomeActiveTodo"
        />
        <NewTodo class="col-md-6 text-center" />
      </div>
    </div>
    <ul class="col-md-8 text-center">
      <List v-for="todo in filteredTodos" :key="todo.id" :todo="todo" />
    </ul>
    <div class="col-md-8 text-center">
      <RemainingTodos :remainingTodos="remainingTodos" class="col-md-2" />
      <FiltersOption :filters="filters" class="col-md-10" />
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

const filters = {
  all: (todos) => todos,
  active: (todos) => todos.filter((todo) => todo.active),
  completed: (todos) => todos.filter((todo) => !todo.active),
};

export default {
  name: "App",
  data() {
    return {
      filters,
    };
  },
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
      return this.$store.state.todos;
    },
    isSomeActiveTodo() {
      return this.$store.getters.isSomeActiveTodo;
    },
    visibility() {
      return this.$store.state.visibility;
    },
    filteredTodos() {
      return filters[this.visibility](this.todos);
    },
    remainingTodos() {
      return this.todos.filter((todo) => todo.active).length;
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