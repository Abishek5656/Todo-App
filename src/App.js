import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Form, Todo } from "./components";
import { Home, Active, Complete } from "./pages";

function App() {

  const [todos, setTodos] = useState([]);
  const [complete, setCompleted] = useState([]);

  const handleCheck = (id) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      );
      return updatedTodos;
    });
  };

  useEffect(() => {
    setCompleted(todos.filter((todo) => todo.checked === true));
  }, [todos]);

  const removeTask = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    const newCompletedList = complete.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    setCompleted(newCompletedList);
  };
  return (
    <div className="App section__padding">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <Home
                  todos={todos}
                  setTodos={setTodos}
                  handleCheck={handleCheck}
                />
              </>
            }
          />
          <Route
            path="/active"
            element={
              <>
                <Active
                  setTodos={setTodos}
                  todos={todos}
                  handleCheck={handleCheck}
                  // removeCheckedValue={removeCheckedValue}
                  // taskCompleted={taskCompleted}
                />
              </>
            }
          />

          <Route
            path="/complete"
            element={
              <>
                <Complete complete={complete} removeTask={removeTask} />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
