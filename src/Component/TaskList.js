import Task from './Task'


const TaskList = ({ tasks, onDelete }) => {
  
  return (
    <div className='mt-5 d-flex flex-wrap justify-content-center '>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default TaskList
