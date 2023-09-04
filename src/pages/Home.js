import { Form, Todo } from "../components";

const Home = ({ todos, setTodos, handleCheck  }) => {

  return (
    <>
      <Form setTodos={setTodos} todos={todos} />
      <Todo todos={todos} setTodos={setTodos} handleCheck={handleCheck }  />
    </>
  );
};

export default Home;


