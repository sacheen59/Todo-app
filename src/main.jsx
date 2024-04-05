import React from "react";
import ReactDOM from "react-dom/client";
import "./bootstrap.min.css";
import App from "./App.jsx";
import "./index.css";
import TodoContextProvider from "./store/todo-store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </React.StrictMode>
);
