
"use server";
import prisma from "./db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {z} from "zod";

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


export const createTaskCustom = async (prevState, formData) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const content = formData.get("content");
  const Task = z.object({
    content: z.string().min(5)
  })
  
  try {
    Task.parse({content});
    await prisma.task.create({
      data: {
        content,
      },
    });
    // revalidate path
    revalidatePath("/tasks");
    return { message: "success!!!" };
  } catch (error) {
    console.log(error);
    return { message: "Error..." };
  }
};

