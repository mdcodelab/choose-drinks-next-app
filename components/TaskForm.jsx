

function TaskForm() {
  return (
    <form>
    <input type="text" className="border-2 border-color: rgb(0,0,0) rounded p-2"
    placeholder="Create task..."></input> 
    <button type="submit" className="btn bg-blue-700">Create Task</button>
    </form>
  )
}

export default TaskForm
