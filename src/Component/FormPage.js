import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../index.css";
import { v4 as uuidv4 } from 'uuid';

const FormPage = ({ onAdd }) => {

  const [object, setObject] = useState({
    taskName: '',
    assignedTo: '',
    date: '',
    description: '',
    id: uuidv4(),
      });
  const [ errors, setErrors ] = useState({})
  
  const minDate = new Date().toLocaleDateString('en-CA')

 
  const handleChange = (event) => {

    const value = event.target.value
    const key = event.target.id
    setObject((prevObject) => ({
      ...prevObject,
      [key]: value
    }));
    if ( !!errors[key] ) setErrors({
      ...errors,
      [key]: null
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validateFormErrors()
    if ( Object.keys(newErrors).length > 0 ) {
      setErrors(newErrors)
    } else {
      // No errors! Put any logic here for the form submission!
     
      onAdd(object)

      setObject({
        taskName: '',
        assignedTo: '',
        date: '',
        description: '',
        id: uuidv4()
      })
    }
  };

  const handleReset = (event) => {
    setErrors({})
    setObject({
      taskName: '',
      assignedTo: '',
      date: '',
      description: '',
    })
  }

  const validateFormErrors = () => {
    const { taskName, assignedTo, status, date, description } = object
    const newErrors = {}
    
    if ( !taskName || taskName.length > 30 || taskName.length < 1 ) newErrors.taskName = 'Task name must be between 2 and 30 characters long.'
    
    if ( !assignedTo || assignedTo === '' ) newErrors.assignedTo = 'Please assign task to an individual'
    else if ( assignedTo.length > 30 ) newErrors.assignedTo = 'Name is too long!'
    
    if ( !date || date === '' ) newErrors.date = 'Please select a due date'
    
    if ( description.length > 100 ) newErrors.description = 'Description is too long!'
    

    return newErrors
  }


  return (
    <Form onSubmit={handleSubmit} noValidate>
      <Form.Row>
        <Form.Group as={Col} controlId="taskName">
          <Form.Label>Task Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Task" isInvalid={!!errors.taskName} onChange={handleChange} value={object.taskName} />
          <Form.Control.Feedback type="invalid">{ errors.taskName }</Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      <Form.Row>
      <Form.Group as={Col} controlId="assignedTo">
          <Form.Label>Assigned To</Form.Label>
          <Form.Control
            style={{ fontSize: "24px" }}
            type="text"
            placeholder="Enter Name"
            isInvalid={!!errors.assignedTo}
            onChange={handleChange}
            value={object.assignedTo}
          />
          <Form.Control.Feedback type="invalid">{ errors.assignedTo }</Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="date">
          <Form.Label>Due Date</Form.Label>
          <Form.Control type="date" placeholder="Enter Date" isInvalid={!!errors.date} onChange={handleChange} min={minDate} value={object.date} />
          <Form.Control.Feedback type="invalid">{ errors.date }</Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} isInvalid={!!errors.description} onChange={handleChange} value={object.description}/>
        <Form.Control.Feedback type="invalid">{ errors.description }</Form.Control.Feedback>
      </Form.Group>

      <Row className="justify-content-center">
        <Button variant="primary" type="submit" className="mx-2">
          Add
        </Button>
        <Button variant="danger" type="reset" className="mx-2" onClick={handleReset}>
          Reset
        </Button>
      </Row>
    </Form>
  );
};

export default FormPage;
