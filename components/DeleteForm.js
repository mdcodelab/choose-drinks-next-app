"use client";
import { deleteTask } from "@/utils/actions";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import { useEffect } from "react";

const DeleteButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className="btn btn-error btn-xs" disabled={pending}>
      {pending ? "Pending..." : "Delete"}
    </button>
  );
};

const initialState = {
  message: null,
};

function DeleteForm({ id }) {
  const [state, formAction] = useFormState(deleteTask, initialState);

  useEffect(() => {
    console.log("State:", state); // Log pentru a verifica starea
      if (state.message === "Error") {
        console.log(state.message);
        toast.error("There was an error...");
        return;
      }
      if(state.message){
        console.log(state.message);
        toast.success(state.message);
        return;
      }
    
  }, [state]);

  return (
    <form action={formAction}>
      {state.message ? <p>{state.message}</p> : null}
      <input type="hidden" name="id" value={id} />
      <DeleteButton />
    </form>
  );
}

export default DeleteForm;
