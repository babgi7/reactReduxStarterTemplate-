import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';
// import {updateCurrent} from './components/reducers/todo';
// import {bindActionCreators} from 'redux';
import {Provider} from 'react-redux';

// const actions = bindActionCreators({updateCurrent}, store.dispatch)
//const todoChangeHadler = (val) => store.dispatch(updateCurrent(val));

   
ReactDOM.render(
 <Provider store={store}>
    <App />
 </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
