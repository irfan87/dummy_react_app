import React from "react";
import "./App.css";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Body title="Welcome to My Dummy ReactJS Application!" />
      <Footer />
    </div>
  );
}

export default App;
