import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Task = ({ task }) => {
  return (
    <>
      <Card key={task.index} className="m-2" style={{maxWidth: "350px", minWidth: "350px"}}>
        <Card.Body className="d-flex flex-column">
          <div>
            <Card.Title className="float-left">{task.taskName}</Card.Title>
            <p className="float-right text-danger font-weight-bold">X</p>
          </div>
          <Card.Subtitle className="mb-2 text-muted">{task.date}</Card.Subtitle>
          <Card.Text>
            {task.description}
          </Card.Text>
          <div className="mt-auto">
            <Button className="mr-2">Edit</Button>
            <Button>Complete</Button>
            <Card.Text className="float-right mt-2">{task.assignedTo}</Card.Text>
          </div>
          

        </Card.Body>
      </Card>
    </>
  )
}

export default Task
