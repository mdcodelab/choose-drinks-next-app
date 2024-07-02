
import prisma from "../utils/db.ts";
import Link from "next/link";
import DeleteForm from "./DeleteForm.js";
import { getAllTasks } from "@/utils/actions.js";

async function TaskList() {
    const tasks = await getAllTasks();

    if(tasks.length === 0) {
        return <h2>No tasks to show.</h2>
    }

  return (
    <div>
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex justify-between items-center my-4 shadow-lg border-base-300"
        >
          <h2 className={`${task.completed} ? "line-through : null`}>
            {task.content}
          </h2>
          <div>
            <Link href={`tasks/${task.id}`} className="btn btn-accent btn-xs">
              Edit
            </Link>
          </div>
          <DeleteForm id={task.id}></DeleteForm>
        </li>
      ))}
    </div>
  );
}

export default TaskList
