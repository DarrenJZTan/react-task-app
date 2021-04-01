import Card from 'react-bootstrap/Card'

const Task = ({ task }) => {
  return (
    <>
      <Card key={task.index}>
        <Card.Body>
          <Card.Title >{task.taskName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{task.date}</Card.Subtitle>
          <Card.Text>
            {task.description}
          </Card.Text>
          <Card.Link href="#">Edit</Card.Link>
          <Card.Link href="#">Complete</Card.Link>
        </Card.Body>
      </Card>
    </>
  )
}

export default Task
