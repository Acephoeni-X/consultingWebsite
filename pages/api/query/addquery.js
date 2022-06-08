import prisma from "../../../prisma/prisma";

async function addquery(data) {
  await prisma.queries.create({
    data: {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.body,
      phoneNumber: data.phNo,
    },
  });

  return data;
}

export default async function handler(req, res) {
  console.log(req.body);
  let data = await req.body;
  let response = await addquery(data);
  console.log(response);
  res.status(200).json({ hello: response });
}
