// import axios from "axios";

const state = {
    todos: [
        {
            id: 1,
            title: 'Learn Vue.js state management',
        },
        {
            id: 2,
            title: 'Master JavaScript',
        },
        {
            id: 3,
            title: 'Start ALX full stack development',
        }
    ]
};

const getters = {
    allTodos: myState => myState.todos,
};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations,
}