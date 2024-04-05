import React, { useContext } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { TodoContext } from "../store/todo-store";

function TodoItem({ todoItem }) {
  const { removeTaskFromList } = useContext(TodoContext);
  return (
    <Card className="bg-dark shadow-lg p-3 mb-2">
      <Row className="align-items-center">
        <Col md={10}>
          <h4 className={`text-white`}>{todoItem.task}</h4>
        </Col>
        <Col md={2}>
          <Button
            className="bg-danger btn-outline-danger"
            onClick={() => {
              removeTaskFromList(todoItem.id);
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </Button>
        </Col>
      </Row>
    </Card>
  );
}

export default TodoItem;
