import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';
import todoReducer from './components/reducers/todo';
import messageReducer from './components/reducers/messages';

const reducer = combineReducers({
    todo: todoReducer,
    message: messageReducer
})

const middleware = [reduxPromise, thunk]; 
export default createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
);