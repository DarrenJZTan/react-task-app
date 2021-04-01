import Task from './Task'


const TaskList = ({ tasks }) => {
  
  return (
    <div className='mt-5 d-flex flex-wrap justify-content-center '>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  )
}

export default TaskList
