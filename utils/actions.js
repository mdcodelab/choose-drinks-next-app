"use server";

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
}

export const deleteTask = async (formData) => {
    const id = await formData.get("id");
    await prisma.task.delete({
        where: {
            id: id
        }
    })
    revalidatePath("/tasks");
}

