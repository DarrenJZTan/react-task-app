import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onStatusClick }) => {
  
  let timeRemaining;
 
  const timeNow = Date.now()
  const dueDate = new Date(task.date)
  timeRemaining = Math.ceil((dueDate - timeNow) / 86400000)+1 + ' days remaining'
  if (timeRemaining === '1 days remaining') {
    timeRemaining = '1 day remaining!'
  }
  if(timeRemaining === '0 days remaining' && task.missionStatus === 'Accept' || Math.ceil((dueDate - timeNow) / 86400000)+1 < 0 && task.missionStatus === 'Accept') {
    timeRemaining = 'This quest is no longer available'
  } else if(timeRemaining === '0 days remaining' && task.missionStatus === 'Incomplete' || Math.ceil((dueDate - timeNow) / 86400000)+1 < 0 && task.missionStatus === 'Incomplete') {
    timeRemaining = 'You have failed this quest'
  } else if (task.missionStatus === 'Complete') {
    timeRemaining = 'You have completed this quest'
  }
 

  let variant = "outline-primary";
  if(task.missionStatus === "Complete") {
    variant = "outline-success"
  } else if(task.missionStatus === "Incomplete") {
    variant = "outline-danger"
  }
   
  return (
    <>
      <Card key={task.index} style={{ fontFamily: 'Papyrus'}} className="mx-5 scroll">
        <Card.Body className="d-flex flex-column m-5">
          <div className="text-center">
            <Card.Title style={{ fontSize: "2.75em", fontWeight: "bolder"}}>{task.taskName}</Card.Title>
            <FaTimes style={{ cursor: 'pointer', fontSize: '1.25em', opacity: '0.75', position: "absolute", top: "35px", right: "45px" }} onClick={() => onDelete(task.id)} />
          </div>
          <Card.Subtitle className="mb-2 font-weight-bold text-danger">{`- ${timeRemaining}`}</Card.Subtitle>
          <Card.Text style={{ fontSize: '1.25em' }}>
            {task.description}
          </Card.Text>
          <Card.Text className="mx-4" style={{ position: "absolute", bottom: "70px", right: "70px" }}>{`- ${task.assignedTo}`}</Card.Text>
          <div className="mt-auto">
            <Button style={{ position: "absolute", bottom: "80px", fontWeight: "bolder" }} variant={variant} onClick={() => onStatusClick(task.id)}>{task.missionStatus}</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default Task
