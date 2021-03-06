import React, { useState, useEffect } from "react";
import FormPage from "./FormPage";
import TaskList from "./TaskList";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from 'react-bootstrap/Row'

export default function App() {
  const [show, setShow] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage] = useState(3);
  const [currentTasks, setCurrentTasks] = useState([])

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

  useEffect(async () => {
    await setTasks(() => {
      if (localStorage.tasks === undefined) {
        return [];
      }
      return JSON.parse(localStorage.getItem("tasks"));
    });
    setCurrentPage(1)
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

  // Get current tasks
    
  let indexOfLastTask = currentPage * tasksPerPage;
  let indexOfFirstTask = indexOfLastTask - tasksPerPage;

  useEffect(() => {
    // eslint-disable-next-line
    indexOfLastTask = currentPage * tasksPerPage;
    // eslint-disable-next-line
    indexOfFirstTask = indexOfLastTask - tasksPerPage;
    setCurrentTasks(() => tasks.slice(indexOfFirstTask, indexOfLastTask));
    console.log(currentPage)
    if(currentPage > Math.ceil(tasks.length / tasksPerPage) && tasks.length > 0){
      previousPage()
    } 
  }, [tasks, currentPage])
  // const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);
  
  
  const nextPage = () => setCurrentPage((prev) => prev +1)
  const previousPage = () => setCurrentPage((prev) => prev -1)
  
  return (
    <Container fluid className="app no-gutters">
      <Container
        fluid
        className="vh-100 d-flex align-items-center justify-content-center app-border"
      >
        <h1 style={{ position: "absolute", top: "50px", color: "white", opacity: "40%" }} className="display-1">- Quest Board -</h1>
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
          <>
            <TaskList
              tasks={currentTasks}
              onDelete={deleteTask}
              onStatusClick={handleStatusClick}
            />
            <Button variant="outline-light" style={{ position: "absolute", bottom: "50px", fontSize: "28px", left: "60px"}} onClick={handleShow}>
            Add
            </Button> 
          </>
        ) : (
          <Container>
            <Row className="justify-content-center" style={{color: "white", fontSize: "32px", fontWeight: "Bold"}}>
              No Quests Available
            </Row>
            <Row className="justify-content-center" style={{color: "white", fontSize: "32px", fontWeight: "Bold"}}>
              Click on the Button to create your First Quest 
            </Row>
            <Row className="justify-content-center mt-4">
              <Button variant="primary" style={{ fontSize: "24px", fontWeight: "Bold", display: "block",
              width: "50%" }} onClick={handleShow}>
                Create
              </Button>
            </Row>
          </Container>
        )}
        {1 >= Math.ceil(tasks.length / tasksPerPage) ? (
          null
        ) : (
          <p style={{ color: "white", position: "absolute", bottom: "50px", fontSize: "28px" }}>
          Page {currentPage} / {Math.ceil(tasks.length / tasksPerPage)}
          </p>
        )}

        {currentPage > 1 ? (
          <Button variant="outline-light" onClick={previousPage} style={{ border: "none", position: "absolute", bottom: "50px", right: "175px", fontSize: "28px" }}>Back</Button>
        ) : (
          null
        )}

        {currentPage < tasks.length / tasksPerPage ? (
          <Button variant="outline-light" onClick={nextPage} style={{ border: "none", position: "absolute", bottom: "50px", right: "60px", fontSize: "28px" }}>Next</Button>
        ) : (
          null
        )}
      </Container>
    </Container>
  );
}
