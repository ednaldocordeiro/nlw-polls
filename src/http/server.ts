import fastify from 'fastify';

const app = fastify();

app.get('/hello', async () => {
  
})

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server is listening on port 3333');
});
