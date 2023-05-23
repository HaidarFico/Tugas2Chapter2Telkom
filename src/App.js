import React, { useState } from "react";
import Form from './components/Form'
import TodoList from "./components/TodoList";
import './App.css'

function App() {


  return (
    <div>
      <header>
      <h1>Todo List</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
