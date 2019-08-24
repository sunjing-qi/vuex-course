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
    getCount: state => ++state.count,
    // count(state){
    // return ++state.count
    // }
    completedTodos: state => state.todos.filter(todo => todo.completed),
    // completedTodos: function (state) {
    //   return state.todos.filter(function (todo) {
    //      return todo.completed;
    //   })
    // }
    completedTodosCount: (state, getters) => getters.completedTodos.length,
    // completedTodosCount: function (state, getters) {
    //   return getters.completedTodos.length;
    // }
    getTodosById: state => id => state.todos.find(todo => todo.id == id)
    // getTodosById: function (state) {
    //   (function(id) {
    //     return state.todos.find(function (todo) {
    //       return todo.id = id;
    //     })
    //   })(id)
    // }
  },
  mutations: {

  },
  actions: {

  }
})
