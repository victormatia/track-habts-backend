import fastify from "fastify";

const app = fastify();
const PORT: number = 3333;

app.get('/Hello', () => 'Hello World');

app.listen({ port: PORT })
  .then(() => console.log(`Server running on port ${PORT}!`));

