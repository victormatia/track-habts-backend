import fastify from "fastify";

const app = fastify();

app.get('/', () => 'Hello World');

app.listen({ port: 3333 });

