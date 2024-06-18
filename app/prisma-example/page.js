import prisma from "../../utils/db";

export const prismaHandlers = async () => {
  // delete all existing tasks
  await prisma.task.deleteMany({});

  // create 1 task
  await prisma.task.create({
    data: {
      content: "wake up",
    },
  });

  // obtain all tasks
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  // By ID
  // const task = await prisma.task.findUnique({
  //   where: {
  //     id: id,
  //   },
  // });

///update a task
  // const updateTask = await prisma.task.update({
  //   where: {
  //     id: id,
  //   },
  //   data: {
  //     content: "updated task",
  //   },
  // });

  //delete a single record
// const deleteTask = await prisma.task.delete({
//   where: {
//     id: id,
//   },
// });

  return allTasks;
};



async function PrismaExample() {
  const allTasks = await prismaHandlers();
  return (
    <div className="max-w-lg m-auto">
      <h1>Prisma Example</h1>
      {allTasks.map((task) => (
        <h2 key={task.id} className="text-xl py-2">
          {task.content}
        </h2>
      ))}
    </div>
  );
}

export default PrismaExample;
