import React, { useState } from 'react';
import FormPage from './FormPage';
import TaskList from './TaskList';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';



function App() {

  const [tasks, setTasks] = useState([
    {
      taskName: 'Test',
      assignedTo: 'Darren',
      status: 'Choose...',
      date: '31-Mar-2021',
      description: '',
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
    }, 
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
    }, 
  ])

  return (
    <Container fluid>
      <Row>
        <Container as={Col} fluid className=' vh-100 d-flex align-items-center justify-content-center' xs={4}>
          <FormPage />
        </Container>
        <Container as={Col} fluid className='bg-success'>
          <TaskList tasks={tasks} className='' />
        </Container>
      </Row>
    </Container>
  );
}

export default App;
