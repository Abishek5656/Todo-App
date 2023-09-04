import { Checkbox } from "@mui/material";
import React from "react";

const ActiveList = ({ setTodos, todos, handleCheck }) => {
    // {console.log(todos)}
  return (
    <div>
     {todos.map( ({ todo, id, checked,index }) => (
        <div key={id} style={{ display: "flex", alignItems:"center",gap:"1rem"}}>
            <Checkbox checked={checked} onChange={() => handleCheck(id)}/>
        <p>{todo}</p>
        </div>
     ))}
       
    </div>
  )
};

export default ActiveList;

