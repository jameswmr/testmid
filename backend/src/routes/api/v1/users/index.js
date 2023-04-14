import { Router } from "express";
import { getAllUsers,getOneUser, createOneUser, createComment, getAllComment } from "./handlers";

const router = Router();
router.post(`/`, createOneUser);
router.get(`/`, getAllUsers);
router.get(`/chat`,getAllComment);
router.post(`/name`, getOneUser);
router.post(`/chat`, createComment);
export default router;
