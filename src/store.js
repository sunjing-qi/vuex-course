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
      id: 2, title: "todo item2", completed: false
    }, {
      id: 3, title: "todo item3", completed: false
    }]
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  }
})
