<template>
  <div id="FiltersOptions">
    <span v-for="filter in filters" :key="filter" class="filters">
      <button
        @click="changeVisibility"
        :id="filter"
        type="button"
        class="btn btn-outline-secondary"
      >
        {{ filter }}
      </button>
    </span>
    <span>
      <button
        @click="clearComplete"
        type="button"
        class="btn btn-outline-success"
      >
        Clear Complete
      </button>
    </span>
  </div>
</template>

<script>
export default {
  name: "FiltersOptions",
  props: ["filters"],
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