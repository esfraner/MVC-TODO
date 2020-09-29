import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    idTodos: 0
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
      state.todos = [];
    },
    changeAllTodosStates(state) {
      console.log(state)
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
    changeAllTodosStates({ commit }) {
      commit("changeAllTodosStates")
    }
  },
  modules: {
  }
})
