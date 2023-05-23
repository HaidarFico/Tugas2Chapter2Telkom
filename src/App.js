import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((item) => item.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((item) => item.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
    // console.log(`Ini local storage ${localStorage}`);
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos").length == 2) {
      console.log("nyampe sini");
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  useEffect(() => getLocalTodos(), []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  return (
    <div>
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
