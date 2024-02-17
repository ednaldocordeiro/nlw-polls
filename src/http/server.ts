import fastify from 'fastify';

import { createPoll } from './routes/create-poll';
import { getPoll } from './routes/get-poll';
import { voteOnPoll } from './routes/vote-on-poll';

import fastifyCookie from '@fastify/cookie';
import fastifyWebsocket from '@fastify/websocket';
import { pollResults } from './ws/poll-results';
import { findPoll } from './routes/find-poll';

const app = fastify();

app.register(fastifyCookie, {
  secret: 'cbn827364c273458uyt',
  hook: 'onRequest',
});
app.register(fastifyWebsocket);

app.register(getPoll);
app.register(findPoll)
app.register(createPoll);
app.register(voteOnPoll);
app.register(pollResults);

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server is listening on port 3333');
});
