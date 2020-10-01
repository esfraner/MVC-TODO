<template>
  <div id="ChangeStates">
    <button
      class="hover:text-red-500 py-2 px-2 rounded text-base"
      @click="changeAllTodosStates"
    >
      <i class="fa fa-trash"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "ChangeStates",
  props: ["todos", "isSomeActiveTodo"],
  methods: {
    changeAllTodosStates() {
      this.isSomeActiveTodo ? this.changeToInactive() : this.changeToActive();
    },
    changeToActive() {
      this.$store.dispatch("changeTodosToActive");
    },
    changeToInactive() {
      this.$store.dispatch("changeTodosToInactive");
    },
  },
};
</script>