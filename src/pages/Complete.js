import { Button, Checkbox } from "@mui/material";
import { AiOutlineDelete } from 'react-icons/ai';
import '../App.css'
import "../components/Todos/Todo.css"

const Complete = ({ complete, removeTask }) => {
  console.log(complete);

  return (
    <>
      {complete.map(({ todo, id, checked, index }) => (
        <div
          className={`${checked ? "complete check__underline" : "completed"}`}
          key={id}
        >
          <div>
            <Checkbox checked={checked} />
            <p>{todo}</p>
          </div>
          <div>
            <Button onClick={() => removeTask(id)}>
              <AiOutlineDelete />
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Complete;
