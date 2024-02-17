import { FastifyInstance } from "fastify";
import z from "zod";
import { prisma } from "../../lib/prisma";

export async function findPoll(app: FastifyInstance) {
  app.get('/polls/find', async (request, reply) => {
    const getPollParams = z.object({
      id: z.string().uuid(),
    });

    console.log(request.query)

    const { id } = getPollParams.parse(request.query);

    const poll = await prisma.poll.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
      }
    });

    if (!poll) {
      return reply.status(400).send({message: 'Votação não encontrada.'})
    }

    return reply.status(200).send({id: poll.id})
  })
}