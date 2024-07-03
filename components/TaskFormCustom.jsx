"use client";

import { createTaskCustom } from "@/utils/actions.js";
import {useFormStatus} from "react-dom";

const SubmitButton = ()=> {
  const {pending}=useFormStatus();
  return (<button type="submit" className="btn btn-primary join-item" aria-disabled={pending}>
        {pending ? "Pending..." : "Edit Task"}
      </button>)
}

function TaskFormCustom() {
  return (
    <form className="flex w-full mb-4" action={createTaskCustom}>
      <input
        type="text"
        className="input input-bordered flex-1 w-full rounded p-2 mr-2 join-item"
        placeholder="Create task..."
        name="content"
        required
      />
      <SubmitButton></SubmitButton>
    </form>
  );
}

export default TaskFormCustom;
