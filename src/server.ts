import fastify from "fastify";
import { PrismaClient } from "@prisma/client";

const app = fastify();

// Aqui instanciamos o prisma para ter acesso ao banco de dados
const prisma = new PrismaClient();

const PORT: number = 3333;

app.get('/Hello', () => 'Hello World');

app.get('/habits', async () => {
  const habits = await prisma.habit.findMany();

  return habits;
});

app.listen({ port: PORT })
  .then(() => console.log(`Server running on port ${PORT}!`));

