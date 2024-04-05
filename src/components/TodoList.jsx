import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { Card } from "react-bootstrap";

import { TodoContext } from "../store/todo-store";

const TodoList = () => {
  const { items } = useContext(TodoContext);

  return (
    <div className="mt-5">
      {items.length === 0 && (
        <Card className="p-3 text-center bg-dark">
          <h1 className="text-white">No Todo Items</h1>
          <p className="text-white">Please add your todo</p>
        </Card>
      )}

      {items.length > 0 &&
        items.map((todoItem) => {
          return <TodoItem key={todoItem.id} todoItem={todoItem} />;
        })}
    </div>
  );
};

export default TodoList;
