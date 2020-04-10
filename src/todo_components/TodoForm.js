import React, { Component } from "react";
import shortid from "shortid";

class TodoForm extends Component {
  state = {
    text: "",
  };

  handleTodoChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleTodoSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false,
    });

    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleTodoSubmit}>
          <input
            type="text"
            name="text"
            value={this.state.text}
            placeholder="What are you planning to do today?"
            onChange={this.handleTodoChange}
          />
          <button type="submit" onClick={this.handleTodoSubmit}>
            Add
          </button>
        </form>
      </div>
    );
  }
}
export default TodoForm;
