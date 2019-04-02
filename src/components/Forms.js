import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateCurrent, saveTodo} from '../components/reducers/todo';


class Form extends Component {
    handelInputchange = (e) => {
        const val = e.target.value;
        this.props.updateCurrent(val);
    }

    handelSubmit = (e) => {
        e.preventDefault();
        console.log(this.props.currentTodo);
        this.props.saveTodo(this.props.currentTodo)
    }

    render() {
        const {currentTodo} = this.props;
        return (
            <form onSubmit={this.handelSubmit}>
                <input type="text"
                onChange={this.handelInputchange}
                value={currentTodo} /> 
            </form>
        )
  }

}
 

export default connect(
    //mapStateToProps
    (state) => ({currentTodo: state.todo.currentTodo}),
    //mapDispatchToProps
    {updateCurrent, saveTodo})(Form);
 
