import React, { useState, useEffect } from 'react';
import FormPage from './FormPage';
import TaskList from './TaskList';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';



function App() {
  
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

  return (
    <Container fluid>
      <Row>
        <Container as={Col} fluid className=' vh-100 d-flex align-items-center justify-content-center' xs={4}>
          <FormPage onAdd={addTask} />
        </Container>
        <Container as={Col} fluid className='bg-success'>
          <div style={{height: "500px", backgroundColor: "blue"}}></div>
          {tasks.length > 0 ? <TaskList tasks={tasks} onDelete={deleteTask} /> : 'No Tasks To Show'}
        </Container>
      </Row>
    </Container>
  );
}

export default App;
