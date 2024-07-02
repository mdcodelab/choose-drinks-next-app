import { createTask } from "@/utils/actions.js";

function TaskForm() {
  return (
    <form className="flex w-full mb-4" action={createTask}>
      <input
        type="text"
        className="input input-bordered flex-1 w-full rounded p-2 mr-2 join-item"
        placeholder="Create task..."
        name="content"
        required
      />
      <button type="submit" className="btn btn-primary join-item">
        Create Task
      </button>
    </form>
  );
}

export default TaskForm;
