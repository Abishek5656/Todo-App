import React, { useState } from "react";
import { Checkbox } from "@mui/material";
import "./Todo.css";
import { ClassNames } from "@emotion/react";
const Todo = ({ todos, setTodos, handleCheck }) => {
  const [activeIndex, SetActiveIndex] = useState(null);

  const handleChange = (index) => {
    SetActiveIndex(index);
  };

  return (
    <>
      {todos.map(({ todo, checked, id }, index) => (
        <div
          key={id}
          onChange={() => handleChange(index)}
          className={`${index === activeIndex || checked? "check__underline" : ""}`}
        >
          <Checkbox onClick={() => handleCheck(id)} />
          {todo}
        </div>
      ))}
    </>
  );
};

export default Todo;
