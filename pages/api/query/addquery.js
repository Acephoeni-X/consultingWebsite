// import prisma from "../../prisma/prisma";

// async function getUsers() {
//   const users = await prisma.users.findMany({
//     select: {
//       firstName: true,
//       lastName: true,
//       email: true,
//       phoneNo: true,
//     },
//   });
//   return users;
// }
export default async function handler(req, res) {
  console.log(req.body);
  res.status(200).json({ hello: req.body });
}
