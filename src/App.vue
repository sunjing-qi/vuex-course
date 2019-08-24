<template>
  <div id="app">
    <!-- mutations -->
    <!-- <button @click="decrement({amount:2})">-</button>
    <span>{{getCount}}</span>
    <button @click="increment">+</button>-->
    <button @click="decrementCount({amount:2})">-</button>
    <span>{{getCount}}</span>
    <button @click="incrementCount">+</button>
  </div>
</template>

<script>
import Count from "./components/Count";
// {}是解构，如果store.js里面没有default，则必须有{}
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: "app",
  components: { Count },

  computed: mapGetters([
    "getCount",
    "completedTodos",
    "completedTodosCount",
    "getTodosById"
  ]),
  // methods: {
  //   increment() {
  //     // 调用mutation里的incrementCount
  //     this.$store.commit("incrementCount");
  //   },
  //   decrement(n) {
  //     this.$store.commit("decrementCount", n);
  //   }
  // }
  methods: mapMutations(["incrementCount", "decrementCount"])
};
</script>

<style>
</style>
