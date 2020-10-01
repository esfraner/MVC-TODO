<template>
  <div id="RemainingTodos" class="flex px-1">
    <span class="text-sm px-1">Remaining: {{ remainingTodos }}</span>
  </div>
</template>

<script>
export default {
  name: "RemainingTodos",
  props: ["remainingTodos"],
  methods: {},
};
</script>