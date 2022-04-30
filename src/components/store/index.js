import {createStore} from 'vuex';
import todos from './modules/todos';

export const store = createStore({
    modules:{
        todos
    }
})