<template>
  <div>
    筛选:
    <select v-model="count" @change="filterTodos(count)">
      <option v-for="(value,index) in values" :key="index">{{value}}</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FilterTodos",
  data() {
    return {
      values: [200, 100, 50, 20, 10, 5],
      count: 200
    };
  },
  methods: mapActions(["filterTodos"])
};
</script>

<style scoped>
select {
  margin-top: 20px;
  padding: 6px;
  border: 1px solid #41b883;
}
</style>