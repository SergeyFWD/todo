import "./App.css";
import React from "react";
import { AddTodo } from "./components/add-todo";
import { TodoList } from "./components/todo-list";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddTodo />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
