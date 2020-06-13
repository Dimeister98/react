import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Watermark from "./components/Watermark";

class App extends Component {
  state = {
    count: 0
  };
  render() {
    return (
      <div>
        <div className="App">
          <TodoList />
        </div>
        <div className="App">
        <Watermark />
        </div>
      </div>
    );
  }
}

export default App;
