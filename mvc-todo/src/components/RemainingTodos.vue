<template>
  <div id="RemainingTodos">
    <span>Remaining {{ remainingTodos }}</span>
  </div>
</template>

<script>
export default {
  name: "RemainingTodos",
  props: ["remainingTodos"],
  methods: {},
};
</script>