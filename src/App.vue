<template>
  <div id="app">
    <!-- mutations -->
    <!-- <button @click="decrement({amount:2})">-</button>
    <span>{{getCount}}</span>
    <button @click="increment">+</button>-->
    <!-- <button @click="decrementCount({amount:2})">-</button>
    <span>{{getCount}}</span>
    <button @click="incrementCount">+</button>-->
    <button @click="decrementCountAsync({amount:2})">-</button>
    <span>{{getCount}}</span>
    <button @click="incrementCountAsync">+</button>
    <hr />
    <p>{{completedTodos}}</p>
    <button @click="fetchDataAsync">fetchData</button>
    <!-- <button @click="fetchData">fetchData</button> -->
  </div>
</template>

<script>
import Count from "./components/Count";
// {}是解构，如果store.js里面没有default，则必须有{}
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "app",
  components: { Count },
  computed: mapGetters([
    "getCount",
    "completedTodos",
    "completedTodosCount",
    "getTodosById"
  ]),
  methods: mapActions([
    "incrementCountAsync",
    "decrementCountAsync",
    "fetchDataAsync"
  ])
  // methods: {
  //   incrementCount() {
  //     // 触发actions
  //     this.$store.dispatch("incrementCountAsync");
  //   },
  //   decrementCount(n) {
  //     // 触发actions
  //     this.$store.dispatch("decrementCountAsync", n);
  //   },
  //   fetchData() {
  //     // 触发actions
  //     this.$store.dispatch("fetchDataAsync");
  //   }
  // }
};
</script>

<style>
</style>
