
import prisma from "@/utils/db";
import { updateTask } from "@/utils/actions";

async function SingleTask({params}) {
  console.log({ params });
  const { id } = params;
  const task = await prisma.task.findUnique({
    where: {
      id: id
    },
  });

  if (!task) {
    return <h2>Task not found.</h2>;
  }

  const content = task.content;

  return (
    <form className="flex max-w-sm border p-12 border-base-300 rounded-lg" action={updateTask}>
      <input type="hidden" name="id" value={id} />
      <input
        type="text"
        name="content"
        className="input input-bordered"
        defaultValue={content}
      ></input>
      <button type="submit" className="btn btn-info">
        Edit
      </button>
    </form>
  );
}

export default SingleTask;
