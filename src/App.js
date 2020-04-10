import React from "react";
import "./App.css";

import Header from "./components/Header";

import Footer from "./components/Footer";
import TodoList from "./todo_components/TodoList";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
