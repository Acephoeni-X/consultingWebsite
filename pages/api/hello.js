// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../prisma/prisma";

async function getUsers() {
  const users = await prisma.users.findMany({
    select: {
      firstName: true,
      lastName: true,
      email: true,
      phoneNo: true,
    },
  });
  return users;
}
export default async function handler(req, res) {
  const user = await getUsers();
  res.status(200).json(user);
}
