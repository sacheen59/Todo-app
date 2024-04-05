import React, { useRef, useContext } from "react";
import { Col, Form, Button, Row } from "react-bootstrap";
import { TodoContext } from "../store/todo-store";

const NewTodo = () => {
  const { addTaskToList } = useContext(TodoContext);
  const taskRef = useRef();

  return (
    <Row>
      <Col md={8}>
        <Form.Control type="text" placeholder="Enter your task" ref={taskRef} />
      </Col>
      <Col md={4}>
        <Button
          type="button"
          className="bg-dark text-white"
          onClick={() => {
            addTaskToList(taskRef.current.value);
          }}
        >
          Add Task
        </Button>
      </Col>
    </Row>
  );
};

export default NewTodo;
