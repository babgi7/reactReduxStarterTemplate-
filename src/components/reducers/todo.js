import {getTodos, createTodo} from '../../lib/todoServices';
import {showMessage, hideMessage} from '../reducers/messages';
import request from '../../lib/basedRequest';

const initState = {
    todos: [],
    currentTodo: ''
}

const TODO_ADD = 'TODO_ADD';
const CURRENT_UPDATE = 'CURRENT_UPDATE';
const TODO_LOAD = 'TODO_LOAD';


export const updateCurrent = (val) => ({type: CURRENT_UPDATE, payload: val});
export const loadTodos = (todos) => ({type: TODO_LOAD, payload: todos});
export const addTodo = (todo) => ({type: TODO_ADD, payload: todo});

export const fetchTodos = () => {
    return (dispatch) => {
        const config = getTodos();
        request(config).then(data => data ? dispatch(loadTodos(data)) : '');
    //    getTodos()
      //     .then(todos => dispatch(loadTodos(todos)))
    }
}

export const saveTodo = (name) => {
    return (dispatch) => {
        const config = createTodo(name);
        request(config).then(data => {
            dispatch(showMessage("message saved"))
            setTimeout(() => dispatch(hideMessage()) , 3000);
           return data ? dispatch(addTodo(data)) : '';
        })
    }
}

export default (state = initState, action) => {
    switch(action.type) {
        case TODO_ADD:
            return {...state, currentTodo: '', todos: state.todos.concat(action.payload) }
        case CURRENT_UPDATE:
            return {...state, currentTodo: action.payload }
        case TODO_LOAD:
            return {...state, todos: action.payload}
        default:
            return state;
    }
}
