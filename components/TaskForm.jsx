
const createTask = async(formData) => {
'use server'
const content = formData.get("content");
console.log(content);
await prisma.task.create({
  data: {
    content
  }
})
revalidatePath("/tasks");
}


function TaskForm() {
  return (
    <form className="flex w-full" action={createTask}>
      <input
        type="text"
        className="input input-bordered flex-1 w-full rounded p-2 mr-2"
        placeholder="Create task..."
        name="content"
        required
      />
      <button type="submit" className="btn btn-primary">
        Create Task
      </button>
    </form>
  );
}

export default TaskForm;
