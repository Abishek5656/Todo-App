import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import "./Form.css";

const Form = ({ setTodos, todos }) => {

  const [value, setValue] = useState("");

  const handleAdd = () => {
    if (value && value.trim() !== "") {
      const newTodo = {
        todo: value,
        id: new Date().getTime().toString(),
        checked: false,
      };
      setTodos([...todos, newTodo]);
      setValue("");
    }

  };
  return (
    <div className="form">
      <TextField
        id="outlined-basic"
        variant="outlined"
        className="form__input"
        placeholder="add details"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button className="form__button" variant="contained" onClick={handleAdd}>
        Add
      </Button>
    </div>
  );
};

export default Form;
