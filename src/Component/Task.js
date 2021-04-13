import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onStatusClick }) => {
  
  let timeRemaining;
 
  const timeNow = Date.now()
  const dueDate = new Date(task.date)
  timeRemaining = Math.ceil((dueDate - timeNow) / 86400000)
 

  let variant = "primary";
  if(task.missionStatus === "Complete") {
    variant = "success"
  } else if(task.missionStatus === "Incomplete") {
    variant = "danger"
  }

  
   
  return (
    <>
      <Card key={task.index} className="m-2 scroll">
        <Card.Body className="d-flex flex-column m-5">
          <div>
            <Card.Title className="float-left">{task.taskName}</Card.Title>
            <FaTimes style={{ cursor: 'pointer', fontSize: '1.25em', opacity: '0.75' }} className="float-right" onClick={() => onDelete(task.id)} />
          </div>
          <Card.Subtitle className="mb-2 font-weight-bold text-danger">{`${timeRemaining} days remaining`}</Card.Subtitle>
          <Card.Text>
            {task.description}
          </Card.Text>
          <Card.Text className="mx-2">{`- ${task.assignedTo}`}</Card.Text>
          <div className="mt-auto">
            <Button variant={variant} onClick={() => onStatusClick(task.id)}>{task.missionStatus}</Button>
          </div>
          

        </Card.Body>
      </Card>
    </>
  )
}

export default Task
