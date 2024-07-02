"use server"
import prisma from "./db";
import { revalidatePath } from "next/cache";

export const getAllTasks = async () => {
    return await prisma.task.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });
    
}

export const createTask = async (formData) => {
    const content = await formData.get("content");
const task = await prisma.task.create({
    data: {
        content
    }
})
revalidatePath("/tasks");
console.log(task);
}

