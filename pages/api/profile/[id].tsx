import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma';

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  const { title, content } = req.body;

  const session = await getSession({ req });
  const result = await await prisma.user.findUnique({
    where: {
      id: session.user.email
  }),
  res.json(result);
}
