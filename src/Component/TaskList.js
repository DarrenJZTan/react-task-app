import Task from './Task'
import CardColumns from 'react-bootstrap/CardColumns'

const TaskList = ({ tasks }) => {
  
  return (
    <CardColumns className='pt-5'>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </CardColumns>
  )
}

export default TaskList
