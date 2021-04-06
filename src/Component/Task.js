import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete }) => {

  return (
    <>
      <Card key={task.index} className="m-2 scroll">
        <Card.Body className="d-flex flex-column m-5">
          <div>
            <Card.Title className="float-left">{task.taskName}</Card.Title>
            <FaTimes style={{ cursor: 'pointer', fontSize: '1.25em', opacity: '0.75' }} className="float-right" onClick={() => onDelete(task.id)} />
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
