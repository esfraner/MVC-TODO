<template>
  <div id="ChangeStates">
    <button @click="changeAllTodosStates" class="btn btn-outline-secondary">
      Change
    </button>
  </div>
</template>

<script>
export default {
  name: "ChangeStates",
  props: ["todos"],
  methods: {
    changeAllTodosStates() {
      console.log(
        this.todos.map((todo) => ({ ...todo, active: !todo.active }))//send to store by using dispatch
      );
    },
  },
};
</script>