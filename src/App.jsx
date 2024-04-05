import { Col } from "react-bootstrap";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

function App() {
  const TodoItems = [
    {
      id: "t1",
      task: "Learn useStateHook!",
    },
    {
      id: "t2",
      task: "Learn React!",
    },
    {
      id: "t3",
      task: "Buy milk!",
    },
  ];
  return (
    <main className="d-flex justify-content-center my-5">
      <Col md={5} className="shadow-lg rounded bg-dark p-5">
        <h1 className="text-white mb-5">TODO APP</h1>

        <NewTodo />
        <TodoList todoItems={TodoItems} />
      </Col>
    </main>
  );
}

export default App;
