<template>
  <div id="show">
    <div>
      <h3>添加内容</h3>
      <form action>
        <input type="text" placeholder="...添加待办事项" v-model="thing.title" />
        <input type="button" value="添加" @click="addTodo" />
      </form>筛选：
      <select @change="checkInf()" id="sel" v-model="number">
        <option value="200">200</option>
        <option value="100">100</option>
        <option value="50">50</option>
        <option value="20">20</option>
        <option value="10">10</option>
        <option value="5">5</option>
      </select>
    </div>
    <h3>待办事项</h3>
    <div class="threeTodo">
      <div>
        <span class="tip">双击表示完成</span>
        <span class="tip">
          <span class="greenk"></span>
          <span>=未完成</span>
        </span>
        <span class="tip">
          <span class="bluek"></span>
          <span>=已完成</span>
        </span>
      </div>
      <div
        v-for="(todo,index) in newTodos"
        :key="index"
        class="todo"
        :class="{completed:todo.completed}"
        @dblclick="todo.completed=true"
      >
        <p>{{todo.title}}</p>
        <button @click="deleteThis(index)">删除</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "show",
  data() {
    return { todos: [], thing: { title: "" }, newTodos: [], number: 200 };
  },
  created() {
    this.$axios.get("http://jsonplaceholder.typicode.com/todos").then(res => {
      this.todos = res.data;
      this.newTodos = res.data;
    });
  },
  methods: {
    addTodo() {
      this.todos.unshift(this.thing);
      // this.thing.title="";
    },
    checkInf() {
      // this.number = sel.options[sel.selectedIndex].value;
      console.log(this.number);
      this.newTodos = this.todos.slice(0, this.number);
    },
    deleteThis(index) {
      this.todos.splice(index, 1);
    }
  }
};
</script>

<style scoped>
h3 {
  display: block;
  margin-bottom: 20px;
}
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  border: 1px solid #41b883;
  outline: none;
  padding: 10px;
}
input[type="button"] {
  flex: 2;
  border: 1px solid #41b883;
  background-color: #41b883;
  columns: white;
  outline: none;
  padding: 10px;
  cursor: pointer;
}
.greenk {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #41b883;
}
.bluek {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #35495e;
}
select {
  border: 1px solid #41b883;
  padding: 5px 10px;
  margin: 20px 0;
}
.threeTodo {
  width: 100%;
  overflow: hidden;
}
.todo {
  width: 290px;
  height: 80px;
  border-radius: 5px;
  border: 1px solid #cccccc;
  background-color: #41b883;
  padding: 20px;
  margin: 10px;
  float: left;
}
.tip {
  display: inline-block;
  margin: 0 130px;
}
.completed {
  color: aliceblue;
  border: 1px solid #cccccc;
  background-color: #35495e;
}
.todo button {
  padding: 5px;
  float: right;
  background-color: white;
  border: 1px solid white;
}
</style>
