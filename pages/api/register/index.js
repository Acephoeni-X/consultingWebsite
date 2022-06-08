import prisma from "../../../prisma/prisma";

async function register(data) {
  await prisma.query.create({
    data,
  });

  return data;
}

async function checkUser(data) {
  const users = await prisma.users.findMany({
    where: {
      email: data.email,
    },
  });
  return users;
}

export default async function handler(req, res) {
  const { firstName, lastName, email, phoneNo } = req.body;
  const userData = {
    firstName,
    lastName,
    email,
    phoneNo,
  };
  const isUserRegistered = await checkUser(userData);
  console.log(isUserRegistered);
  if (isUserRegistered.length > 0) {
    res.status(200).json({ isRegistered: true });
  } else {
    const data = await register(userData);
    res.status(200).json(data);
  }
}
