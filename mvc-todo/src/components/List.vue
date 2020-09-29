<template>
  <li>
    <label>{{ todo.value }}</label>
    <input type="checkbox" :checked="!todo.active" />
  </li>
</template>

<script>
export default {
  name: "List",
  props: ["todo"],
};
</script>
<style >
li {
  list-style-type: none;
}
</style>