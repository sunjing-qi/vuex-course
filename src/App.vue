<template>
  <div id="app">
    <!-- <p>App.vue: {{count}}</p> -->
    <!-- <p>app-vue:{{todos}}</p> -->
    <p>App.vue: {{getCount}}</p>
    <hr />
    <p>{{completedTodos}}</p>
    <p>{{completedTodosCount}}</p>
    <p>{{getTodosById(1)}}</p>
    <!-- <Count /> -->
  </div>
</template>

<script>
import Count from "./components/Count";
// {}是解构，如果store.js里面没有default，则必须有{}
import { mapState, mapGetters } from "vuex";

export default {
  name: "app",
  components: { Count },
  // 写法1
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   },
  //   todos() {
  //     return this.$store.state.todos;
  //   }
  // }
  // 写法2
  // computed: mapState({
  //   // count:function(state){
  //   //   return state.count;
  //   // }
  //   count:state=>state.count,
  //   todos:state=>state.todos
  // })
  // 写法3
  // computed: mapState(["count", "todos"])
  // 这里面写的方法名不用和store.js里一样
  // computed: {
  //   count() {
  //     return this.$store.getters.getCount;
  //   },
  //   completedTodos() {
  //     return this.$store.getters.completedTodos;
  //   },
  //   completedTodosCount() {
  //     return this.$store.getters.completedTodosCount;
  //   },
  //   getTodosById() {
  //     return this.$store.getters.getTodosById;
  //   }
  // },
  // 这里的名字必须和store.js里面一样
  computed: mapGetters([
    "getCount",
    "completedTodos",
    "completedTodosCount",
    "getTodosById"
  ])
};
</script>

<style>
</style>
