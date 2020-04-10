import React, { Component } from "react";
import TodoForm from "./TodoForm";
import { Todo } from "./Todo";

class TodoList extends Component {
  state = {
    todos: [],
  };

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };
  render() {
    return (
      <div>
        <h1>TodoList Component</h1>
        <TodoForm onSubmit={this.addTodo} />
        {this.state.todos.map((todo) => {
          return <Todo key={todo.id} text={todo.text} />;
        })}
        <hr />
      </div>
    );
  }
}
export default TodoList;
