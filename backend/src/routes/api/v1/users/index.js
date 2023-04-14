import { Router } from "express";
import { getAllUsers,getOneUser, createOneUser, createComment, getAllComment,getUser,deletecomment } from "./handlers";

const router = Router();
router.post(`/`, createOneUser);
router.get(`/`, getAllUsers);
router.get(`/chat`,getAllComment);
router.post(`/name`, getOneUser);
router.post(`/chatname`, getUser);
router.post(`/chat`, createComment);
router.post(`/delete`, deletecomment);
export default router;
