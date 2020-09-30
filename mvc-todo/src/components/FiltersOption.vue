<template>
  <div id="FiltersOptions">
    <span v-for="(val, key) in filters" :key="key" class="filters">
      <button
        @click="changeVisibility"
        :id="key"
        type="button"
        class="btn btn-outline-secondary"
      >
        {{ key }}
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
      this.$store.dispatch("changeVisibility",visibility);
    },
    clearComplete: function () {
      this.$store.dispatch("clearComplete");
    },
  },
};
</script>