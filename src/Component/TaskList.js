import Task from './Task'


const TaskList = ({ tasks, onDelete, onStatusClick }) => {
  
  return (
    <div className='mt-5 d-flex flex-wrap justify-content-center '>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onStatusClick={onStatusClick} />
      ))}
    </div>
  )
}

export default TaskList
