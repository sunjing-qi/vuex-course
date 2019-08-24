import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 属性
    count: 0,
    todos: [{
      id: 1, title: "todo item1", completed: false
    }, {
      id: 2, title: "todo item2", completed: true
    }, {
      id: 3, title: "todo item3", completed: true
    }]
  },
  getters: {
    // 并没有改变属性的值
    getCount: state => state.count,
    completedTodos: state => state.todos.filter(todo => todo.completed),
    completedTodosCount: (state, getters) => getters.completedTodos.length,
    getTodosById: state => id => state.todos.find(todo => todo.id == id)
  },
  mutations: {
    // 改变
    incrementCount: state => state.count++,
    decrementCount: (state, number) => state.count -= number.amount,
    setTodos: (state, todos) => state.todos = todos
  },
  actions: {
    incrementCountAsync: ({ commit }) => {
      // incrementCountAsync: context => {
      setTimeout(() => {
        // context/* =this.$store*/.commit("incrementCount");
        commit("incrementCount");
      }, 2000);
    },
    decrementCountAsync: (context, number) => {
      setTimeout(() => {
        context/* =this.$store*/.commit("decrementCount", number);
      }, 1000);
    },
    async fetchDataAsync(context) {
      const response = await axios.get("http://jsonplaceholder.typicode.com/todos");
      context.commit("setTodos", response.data);
    }
  }
})
