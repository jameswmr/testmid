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
  console.log(req.session.userID);
  return res.status(201).json(user);
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export async function getOneUser(req, res) {
  const { name, password } = req.body;
  // if (isNaN({ name })) return res.status(400).json({ error: "Invalid name" });

  const user = await prisma.user.findUnique({ where: { name:name, }, });
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
  console.log(req.session.userID);
  const id = req.session.userID;
  console.log(id);
  const user = await prisma.user.findUnique({where: {id: id,}, });
  console.log(user);
  const comment = await prisma.comment.create({data: {message: req.body.message, userId: id, username: user.name }});
  return res.status(201).json(comment);
}
export async function getUser(req,res){
  const {id} = req.body.id;
  const user = await prisma.user.findUnique({where:{id}});
  return res.json(user);
}
export async function deletecomment(req,res){
  const id = req.body.id;
  const userId = req.body.userId;
  if(req.session.userID === userId){
    const comment = await prisma.comment.delete({where:{id: id}});
    return res.status(201).json(comment);
  }
  else{
    console.log("You have no permission!!");
  }
}

