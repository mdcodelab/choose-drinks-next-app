import TaskList from "../../components/TaskList";
import TaskForm from "../../components/TaskForm";
import DeleteForm from "../../components/DeleteForm";


function Tasks() {
  return (
    <div className="max-w-lg">
      <h1>Tasks</h1>
      <TaskForm></TaskForm>
      <TaskList></TaskList>
    </div>
  )
}

export default Tasks
