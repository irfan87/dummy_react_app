import React from "react";

const Todo = ({ toggleComplete, todo }) => {
  return (
    <ul>
      <li>
        <div
          style={{
            textDecoration: todo.complete ? "line-through" : "",
          }}
          onClick={toggleComplete}
        >
          {todo.text}
        </div>
      </li>
    </ul>
  );
};

export default Todo;
