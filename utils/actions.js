
"use server";
import prisma from "./db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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

export const updateTask = async (FormData) => {
    const id = await FormData.get("id");
    const content = await FormData.get("content");
    await prisma.task.update({
        where: {
            id: id
        },
        data: {
            content: content
        }
    })
    
revalidatePath("/tasks");
redirect("/tasks");
}

