import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    todos: [],
    idTodos: 0,
    visibility: "all",
    filters: ["all", "active", "completed"]
  },
  getters: {
    isSomeActiveTodo(state) {
      return state.todos.some((todo) => todo.active);
    },
    isSomeCompleteTodo(state) {
      return state.todos.some((todo) => !todo.active);
    },
    todos(state) {
      return state.todos;
    },
    remainingTodos(state) {
      return state.todos.filter((todo) => todo.active).length;
    },
    visibility(state) {
      return state.visibility;
    },
    all(state) {
      return state.todos;
    },
    active(state) {
      return state.todos.filter((todos) => todos.active)
    },
    completed(state) {
      return state.todos.filter((todos) => !todos.active)
    },
    filters(state) {
      return state.filters;
    }
  },
  mutations: {
    addTodo(state, newTodo) {
      const todo = { id: ++state.idTodos, value: newTodo, active: true }
      state.todos = [...state.todos, todo];
    },
    removeTodo(state, todo) {
      state.todos.splice(state.todos.indexOf(todo), 1)
    },
    clearComplete(state) {
      state.todos = state.todos.filter(todo => todo.active)
    },
    changeTodosToActive(state) {
      state.todos = state.todos.map((todo) => ({ ...todo, active: true }))
    },
    changeTodosToInactive(state) {
      state.todos = state.todos.map((todo) => ({ ...todo, active: false }))
    },
    changeVisibility(state, newVisibility) {
      state.visibility = newVisibility;
    },
    changeActive(state, selectedTodo) {
      let todoToChange = state.todos.find((todo) => todo.id == selectedTodo.id);
      todoToChange.active = !todoToChange.active
    },
    editTodoValue(state, paramsToEdit) {
      let todoToEdit = state.todos.find(todo => todo.id === paramsToEdit.selectedTodo.id);
      todoToEdit.value = paramsToEdit.newValue;
    }
  },
  actions: {
    addTodo({ commit }, todo) {
      commit("addTodo", todo)
    },
    removeTodo({ commit }, todo) {
      commit("removeTodo", todo)
    },
    clearComplete({ commit }) {
      commit("clearComplete")
    },
    changeTodosToActive({ commit }) {
      commit("changeTodosToActive")
    },
    changeTodosToInactive({ commit }) {
      commit("changeTodosToInactive")
    },
    changeVisibility({ commit }, newVisibility) {
      commit("changeVisibility", newVisibility)
    },
    changeActive({ commit }, selectedTodo) {
      commit("changeActive", selectedTodo)
    },
    editTodoValue({ commit }, paramsToEdit) {
      commit("editTodoValue", paramsToEdit)
    }

  },
  modules: {}
})
