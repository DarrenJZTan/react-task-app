import React, { useState, useEffect } from 'react';
import FormPage from './FormPage';
import TaskList from './TaskList';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"



export default function App() {


  const [show, setShow] = useState(false);
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(() => {
      if (localStorage.tasks === undefined) {
        return []
      }
      return (JSON.parse(localStorage.getItem("tasks")))
    }
  )}, [])

  //Add Task
  const addTask = (object) => {
    setTasks((prev) => {
      return [object, ...prev]
    })
  }

  //Remove Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Save Task
  useEffect(() => {save(tasks)}, [tasks])


  const save = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 

  return (
    <Container fluid className="app">
      <Container fluid className='vh-100 d-flex align-items-center justify-content-center'>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormPage onAdd={addTask} setShow={setShow} />
          </Modal.Body>
        </Modal>  
        {tasks.length > 0 ? <TaskList tasks={tasks} onDelete={deleteTask} /> : 'No Tasks To Show'}
      </Container>
    </Container >
        
  );
}





 