import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [{ id: 0, value: "test0", active: true },
    { id: 1, value: "test1", active: false }],
    idTodos: 1
  },
  mutations: {
    addTodo(state, newTodo) {
      const todo = { id: ++state.idTodos, value: newTodo, active: true }
      state.todos = [...state.todos, todo];
    },
  },
  actions: {
    addTodo({ commit }, newTodo) {
      commit("addTodo", newTodo)
    },
  },
  modules: {
  }
})
