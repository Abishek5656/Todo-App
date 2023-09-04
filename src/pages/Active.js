import React from "react";
import { Form, ActiveList } from "../components";
const Active = ({ setTodos, todos, handleCheck }) => {
  return (
    <>
      <Form setTodos={setTodos} todos={todos} />
     <ActiveList setTodos={setTodos} todos={todos} handleCheck={handleCheck}/>
    </>
  );
};

export default Active;


