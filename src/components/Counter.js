import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { count, increment, decrement } = this.props;
    return (
      <div>
        <div>Count: {count} </div>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
