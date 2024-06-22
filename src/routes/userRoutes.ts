import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { handleGetListUsers, handleUpdateUser } from "../controller/api.controller";
const router = express.Router();

router.get("/fetch-user-data", authMiddleware, handleGetListUsers);

router.post("/update-user-data", authMiddleware, handleUpdateUser);

export default router;
