import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    visibility: "all"
  },
  mutations: {
    addTodo(state, newTodo) {
      const todo = { value: newTodo, active: true }
      state.todos = [...state.todos, todo];
    },
    removeTodo(state, todo) {
      state.todos.splice(state.todos.indexOf(todo), 1)
    },
    clearComplete(state) {
      state.todos = [];
    },
    changeTodosToActive(state) {
      state.todos = state.todos.map((todo) => ({ ...todo, active: true }))
    },
    changeTodosToInactive(state) {
      state.todos = state.todos.map((todo) => ({ ...todo, active: false }))
    },
    changeVisibility(state, newVisibility) {
      state.visibility = newVisibility;
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
    }

  },
  modules: {}
})
