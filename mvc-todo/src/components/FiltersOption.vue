<template>
  <div id="FiltersOptions" class="flex">
    <span v-for="filter in filters" :key="filter" class="filters">
      <button
        @click="changeVisibility"
        :id="filter"
        type="button"
        class="text-sm px-1 text-gray-500 hover:text-green-400"
      >
        {{ filter }}
      </button>
    </span>
    <span>
      <button
        v-if="isSomeCompleteTodo"
        @click="clearComplete"
        type="button"
        class="text-xs px-6 text-gray-500 hover:text-red-400"
      >
        Clear Complete
      </button>
    </span>
  </div>
</template>

<script>
export default {
  name: "FiltersOptions",
  props: ["filters", "isSomeCompleteTodo"],
  methods: {
    changeVisibility: function ({ target }) {
      const visibility = target.id;
      this.$store.dispatch("changeVisibility", visibility);
    },
    clearComplete: function () {
      this.$store.dispatch("clearComplete");
    },
  },
};
</script>