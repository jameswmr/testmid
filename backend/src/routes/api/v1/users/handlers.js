import { prisma } from "../../../../adapters";
import bcrypt from 'bcryptjs';
function comparePasswords(a, b) {
  return bcrypt.compareSync(b, a);
}
export async function getAllUsers(req, res) {
  const allUsers = await prisma.user.findMany();
  return res.json(allUsers);
}
export async function getAllComment(req,res){
  const allComment = await prisma.comment.findMany({
  orderBy: { createdAt: 'desc' },
  take: 10});
  return res.json(allComment);
}
/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export async function createOneUser(req, res) {
  const u = await prisma.user.findUnique({where:{name: req.body.name}});
  if(u === null){
    const user = await prisma.user.create({ data: { name: req.body.name , password: req.body.password, image: req.body.image} });
    return res.status(201).json(user);
  }
  else return res.send("0");
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export async function getOneUser(req, res) {
  const { name, password } = req.body;
  // if (isNaN({ name })) return res.status(400).json({ error: "Invalid name" });

  const user = await prisma.user.findUnique({ where: { name:name } });
  if (user === null) return res.send("User not found");
  if (comparePasswords(user.password,password)){
    req.session.userID = user.id;
  }
  else {
    return res.send("Wrong password!!");
  }
  
  return res.send("Successfully log in");
}
export async function createComment(req, res) {
  const id = req.session.userID;
  const user = await prisma.user.findUnique({where: {id: id} });
  if(user === null) return res.send("Safe");
  const comment = await prisma.comment.create({data: {message: req.body.message, userId: id, username: user.name, image: user.image }});
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
    return res.send("no");
  }
}
export async function getID(req,res){
  if(req.session.userID === undefined){
    return res.send("null");
  }
  return res.send(req.session.userID);
}
export async function delid(req,res){
  req.session.userID = undefined;
  return res.send("Successfully delete");
}

