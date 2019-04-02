import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodosForm from './components/Forms';
import TodosList from './components/TodoList';
import Message from './components/Message';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div className="Todo-app">
            <Message />
            <TodosForm />
            <TodosList />
          </div>
        </header>
      </div>
    );
  }
}

// const mapStateToProps = (state) => state;
// const mapDispatchToProps = {updateCurrent};
// const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
// export default ConnectedApp;

// or this shortcut

//export default connect((state) => state, {updateCurrent})(App);
export default App;
