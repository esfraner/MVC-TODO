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
  },
  actions: {
  },
  modules: {
  }
})