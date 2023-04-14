import { prisma } from "../../../../adapters";

export async function getAllUsers(req, res) {
  const allUsers = await prisma.user.findMany();
  return res.json(allUsers);
}
export async function getAllComment(req,res){
  const allComment = await prisma.comment.findMany();
  return res.json(allComment);
}
/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export async function createOneUser(req, res) {
  const user = await prisma.user.create({ data: { name: req.body.name , password: req.body.password} });
  return res.status(201).json(user);
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export async function getOneUser(req, res) {
  const { name, password } = req.body;
  // if (isNaN({ name })) return res.status(400).json({ error: "Invalid name" });

  const user = await prisma.user.findUnique({ where: { name } });
  console.log(req.session.userID);
  if (user.password === password){
    req.session.userID = user.id;
    console.log(req.session.userID);
  }
  else {
    return res.send("Wrong password!!");
  }
  if (user === null) return res.status(404).json({ error: "Not Found" });
  return res.json(user);
}
export async function createComment(req, res) {
  const comment = await prisma.comment.create({data: {message: req.body.message, userId: req.session.userID}});
  return res.status(201).json(comment);
}

