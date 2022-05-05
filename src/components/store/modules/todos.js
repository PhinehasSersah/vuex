import axios from "axios";

const state = {
    todos: []
};

const getters = {
    allTodos: myState => myState.todos,
};

const actions = {
    async fetchTodos({ commit }) {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            commit('setTodos', response.data);
        } catch (error) {
            console.log(error);
        }
    },
    async addTodo({ commit }, title) {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
                title,
                completed: false
            });
            commit('newTodo', response.data);
        } catch (error) {
            console.log(error);
        }
    },
    async deleteTodo({ commit }, id) {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
            commit('removeTodo', id);
        } catch (error) {
            console.log(error)
        }
    },
    async filterTodos({ commit }, event) {

        let selectValue = event.target.options[event.target.options.selectedIndex].value;
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit= ${selectValue}`)
            commit('setTodos', response.data);
            // console.log(response.data)
        } catch (error) {
            console.log(error)
        }

    },
    async updateTodo({ commit }, updTodo) {
        try {
            const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`, updTodo)
            commit('todoUpdate', response.data)
        } catch (error) {
            console.log(error)
        }
    }
};

const mutations = {
    setTodos: (mystate, todos) => (mystate.todos = todos),
    newTodo: (mystate, todo) => mystate.todos.unshift(todo),
    removeTodo: (mystate, id) => mystate.todos = mystate.todos.filter(todo => todo.id !== id),
    todoUpdate: (mystate, updTodo) => {
        const index = mystate.todos.findIndex(todo => todo.id === updTodo.id)
        if (index !== -1) {
            mystate.todos.splice(index, 1, updTodo)
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
}