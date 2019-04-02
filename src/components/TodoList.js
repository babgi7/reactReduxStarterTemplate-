import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../components/reducers/todo';

const List = ({ id, isComplete, name }) => (
  <li>
    <input type="checkbox" defaultChecked={isComplete} />{name}
  </li>
)

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <ul>
        {this.props.todos.map((todos) => (
          <List key={todos.id} {...todos} />
        ))}
      </ul>
    )
  }
}

export default connect(
  (state) => ({ todos: state.todo.todos }),
  { fetchTodos }
)(TodoList);

