<template>
  <div id="app">
    <p>App.vue: {{count}}</p>
    <p>app-vue:{{todos}}</p>
    <Count />
  </div>
</template>

<script>
import Count from "./components/Count";
// {}是解构，如果store.js里面没有default，则必须有{}
import { mapState } from "vuex";

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
  computed: mapState(["count", "todos"])
};
</script>

<style>
</style>
