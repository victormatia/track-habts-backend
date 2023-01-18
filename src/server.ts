import fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import cors from "@fastify/cors"

const app = fastify();

// Aqui instanciamos o prisma para ter acesso ao banco de dados
const prisma = new PrismaClient();

const PORT: number = 3333;

// Aqui possibilitamos que  o front tenha acesso ao back. Saiba mais: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS
app.register(cors);

app.get('/Hello', () => 'Hello World');

app.get('/habits', async () => {
  // Aqui capturamos do banco de dados todos os valores da model habit
  const habits = await prisma.habit.findMany();

  return habits;
});

app.listen({ port: PORT })
  .then(() => console.log(`Server running on port ${PORT}!`));

