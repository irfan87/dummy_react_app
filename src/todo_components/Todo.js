import React from "react";

const Todo = ({ toggleComplete, todo, onDelete }) => {
  return (
    <ul>
      <li>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div
            style={{
              textDecoration: todo.complete ? "line-through" : "",
            }}
            onClick={toggleComplete}
          >
            {todo.text}
          </div>
          <button onClick={onDelete}>Delete</button>
        </div>
      </li>
    </ul>
  );
};

export default Todo;
