import TaskList from "../../components/TaskList";
import TaskFormClient from "../../components/TaskFormCustom";
import DeleteForm from "../../components/DeleteForm";


function Tasks() {
  return (
    <div className="max-w-lg">
      <h1>Tasks</h1>
      <TaskFormClient></TaskFormClient>
      <TaskList></TaskList>
    </div>
  )
}

export default Tasks
