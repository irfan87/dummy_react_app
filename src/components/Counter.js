import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  componentWillUnmount() {
    console.log("Unmounting");
  }

  componentDidMount() {
    console.log("Mounting");
  }

  handleIncrement = () => {
    const { count } = this.state;

    this.setState({
      count: count + 1,
    });
  };

  handleDecrement = () => {
    const { count } = this.state;

    if (count === 0) {
      alert("0 is invalid");
    } else {
      this.setState({
        count: count - 1,
      });
    }
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <div>Count: {count} </div>
        <button onClick={() => this.handleDecrement()}>Decrement</button>
        <button onClick={() => this.handleIncrement()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
