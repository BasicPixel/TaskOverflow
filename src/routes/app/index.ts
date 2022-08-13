import prisma from "../../lib/prisma";

export const GET = async () => {
  const tasks = await prisma.tasks.findMany();

  if (!tasks) return { status: 400 };

  return {
    headers: { "Content-Type": "application/json" },
    status: 200,
    body: { tasks },
  };
};
