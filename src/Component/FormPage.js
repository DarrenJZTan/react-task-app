import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../index.css";

const FormPage = () => {
  const [validated, setValidated] = useState(false);

  const [object, setObject] = useState({
    taskName: '',
    assignedTo: '',
    status: 'Choose...',
    date: '',
    description: '',
  });

  
  const minDate = new Date().toLocaleDateString('en-CA')
  

 
  const handleChange = (event) => {

    const value = event.target.value
    const key = event.target.id
    console.log(event)
    setObject((prevObject) => ({
      ...prevObject,
      [key]: value
    }));
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    setValidated(true);
  };

  const handleReset = (event) => {
    setValidated(false)
  }

  return (
    <Form validated={validated} onSubmit={handleSubmit} noValidate>
      <Form.Row>
        <Form.Group as={Col} controlId="taskName">
          <Form.Label>Task Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Task" isInvalid={object.taskName > 3 ? false : true} isValid={object.taskName > 3 ? false : true} onChange={handleChange}/>
          <Form.Control.Feedback type="valid">Looks Good</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Looks Bad</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="assignedTo">
          <Form.Label>Assigned To</Form.Label>
          <Form.Control
            style={{ fontSize: "24px" }}
            type="text"
            placeholder="Enter Name"
            onChange={handleChange}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="status">
          <Form.Label>Status</Form.Label>
          <Form.Control as="select" defaultValue="Choose..." onChange={handleChange}>
            <option>Choose...</option>
            <option>Pending</option>
            <option>In progress</option>
            <option>Complete</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="date">
          <Form.Label>Due Date</Form.Label>
          <Form.Control type="date" placeholder="Enter Date" onChange={handleChange} min={minDate} />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={handleChange}/>
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
