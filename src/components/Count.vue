<template>
  <div id="count">
    <hr />
    <h1>count.vue:{{count}}</h1>
    <h2>count.vue:{{todos}}</h2>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "app",
  components: {},
  computed: mapState({
    count: state => state.count,
    todos: state => state.todos
  })
};
</script>

<style scoped>
</style>
