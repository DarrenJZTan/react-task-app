import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import '../index.css'

const FormPage = () => {
    
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    
    <Form validated={false} onSubmit={handleSubmit} noValidate>
        <Form.Row>
          <Form.Group as={Col} controlId="formName">
            <Form.Label>Task Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Task" required />
            <Form.Control.Feedback type="valid"></Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formAssignedTo">
            <Form.Label>Assigned To</Form.Label>
            <Form.Control style={{fontSize: '24px'}} type="text" placeholder="Enter Name" required />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formStatus">
            <Form.Label>Status</Form.Label>
            <Form.Control as="select" defaultValue="Choose..." required>
              <option>Choose...</option>
              <option>Pending</option>
              <option>In progress</option>
              <option>Complete</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formDueDate">
            <Form.Label>Due Date</Form.Label>
            <Form.Control type="date" placeholder="Enter Date" required />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} required/>
        </Form.Group>
        
        <Row className="justify-content-center">
          <Button variant="primary" type="submit" className="mx-2">
            Add
          </Button>
          <Button variant="danger" type="reset" className="mx-2">
            Reset
          </Button>

          
        </Row>
    </Form>  
  )
}

export default FormPage
