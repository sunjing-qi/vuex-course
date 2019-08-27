<template>
  <div id="app">
    <div id="container">
      <showTodos />
    </div>
  </div>
</template>

<script>
import showTodos from "./components/ShowTodos";

export default {
  name: "app",
  components: {
    showTodos
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  background-color: rgb(232, 247, 240);
}
#container {
  max-width: 1100px;
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
}
</style>
