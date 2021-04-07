import React, { useState, useEffect } from "react";
import FormPage from "./FormPage";
import TaskList from "./TaskList";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function App() {
  const [show, setShow] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleStatusClick = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          if (task.missionStatus === "Accept") {
            return { ...task, missionStatus: "Incomplete" };
          } else if (task.missionStatus === "Incomplete") {
            return { ...task, missionStatus: "Complete" };
          } else if (task.missionStatus === "Complete") {
            return { ...task, missionStatus: "Incomplete" };
          }
        } else {
          return task;
        }
        return task;
      })
    );
  };

  useEffect(() => {
    setTasks(() => {
      if (localStorage.tasks === undefined) {
        return [];
      }
      return JSON.parse(localStorage.getItem("tasks"));
    });
  }, []);

  //Add Task
  const addTask = (object) => {
    setTasks((prev) => {
      return [object, ...prev];
    });
  };

  //Remove Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Save Task
  useEffect(() => {
    save(tasks);
  }, [tasks]);

  const save = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid className="app">
      <Container
        fluid
        className="vh-100 d-flex align-items-center justify-content-center"
      >
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex justify-content-center">
              <FormPage onAdd={addTask} setShow={setShow} />
            </div>
          </Modal.Body>
        </Modal>
        {tasks.length > 0 ? (
          <TaskList
            tasks={tasks}
            onDelete={deleteTask}
            onStatusClick={handleStatusClick}
          />
        ) : (
          "No Tasks To Show"
        )}
      </Container>
    </Container>
  );
}
