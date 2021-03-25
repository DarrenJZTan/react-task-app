import React, { useState } from 'react';
import FormPage from './FormPage';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'



function App() {

  const [tasks, setTasks] = useState([])
  return (
    <Container fluid>
      <Row>
        <Container as={Col} fluid className='bg-info vh-100 d-flex align-items-center justify-content-center' xs={4}>
          <FormPage />
        </Container>
        <Container as={Col} fluid className='bg-success'>
          
        </Container>
      </Row>
    </Container>
  );
}

export default App;
