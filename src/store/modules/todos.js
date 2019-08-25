const state = {
    todos: [{
        id: 1, title: "todo item1", completed: false
    }, {
        id: 2, title: "todo item2", completed: true
    }, {
        id: 3, title: "todo item3", completed: true
    }]
};
const getters = {
    completedTodos: state => state.todos.filter(todo => todo.completed),
    completedTodosCount: (state, getters) => getters.completedTodos.length,
    getTodosById: state => id => state.todos.find(todo => todo.id == id)
};
const mutations = {
    setTodos: (state, todos) => state.todos = todos
};
const actions = {
    async fetchDataAsync(context) {
        const response = await axios.get("http://jsonplaceholder.typicode.com/todos");
        context.commit("setTodos", response.data);
    }
};
export default {
    state, getters, mutations, actions
}