import React, { Component } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: "",
};

export default class ValidationsForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    nameError: "",
    emailError: "",
    passwordError: "",
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";

    if (!this.state.name) {
      nameError = "Name cannot be blank!";
    }

    if (!this.state.email.includes("@")) {
      emailError = "Invalid email";
    }

    if (this.state.password < 4) {
      passwordError = "Your password must be at least 4 characters";
    }

    if (emailError || nameError || passwordError) {
      this.setState({ emailError, nameError, passwordError });
      return false;
    }

    return true;
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
    const isValid = this.validate();

    if (isValid) {
      console.log(this.state);
      // clear the form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <div>
        <h1>Form Component</h1>
        {this.state.name ? `Hi ${this.state.title} ${this.state.name}` : ""}
        <form onSubmit={this.handleSubmit} noValidate>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Username"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <div style={{ color: "red", fontSize: 12 }}>
              {this.state.nameError}
            </div>
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <div style={{ color: "red", fontSize: 12 }}>
              {this.state.emailError}
            </div>
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <div style={{ color: "red", fontSize: 12 }}>
              {this.state.passwordError}
            </div>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
