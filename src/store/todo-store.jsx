import { createContext, useState } from "react";

export const TodoContext = createContext({
  items: [],
  addTaskToList: () => {},
  removeTaskFromList: () => {},
});

export default function TodoContextProvider({ children }) {
  const [todoItems, setTodoItems] = useState([]);

  // function to add the task
  function addTaskHandler(newTask) {
    if (newTask.trim().length === 0) {
      return;
    }
    setTodoItems((prevTodo) => [
      {
        id: Math.random(),
        task: newTask,
      },
      ...prevTodo,
    ]);
  }

  // function to remove task
  function removeTaskHandler(id) {
    setTodoItems((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  }

  const ctxValue = {
    items: todoItems,
    addTaskToList: addTaskHandler,
    removeTaskFromList: removeTaskHandler,
  };
  return (
    <TodoContext.Provider value={ctxValue}>{children}</TodoContext.Provider>
  );
}
