import React, { Component } from "react";

export default class DummyForm extends Component {
  state = {
    name: "",
    address: "",
    rememberMe: false,
    title: "Mr.",
  };

  handleChange = (event) => {
    const isCheckBox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckBox
        ? event.target.checked
        : event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>Form Component</h1>
        {this.state.name ? `Hi ${this.state.title} ${this.state.name}` : ""}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="any text you can text"
            onChange={this.handleChange}
          />
          <textarea
            name="address"
            value={this.state.address}
            onChange={this.handleChange}
          ></textarea>
          <input
            name="rememberMe"
            type="checkbox"
            checked={this.state.rememberMe}
            onChange={this.handleChange}
          />
          <div>
            <select
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            >
              <option>Mr.</option>
              <option>Mrs.</option>
              <option>Miss.</option>
              <option>Ms.</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
