import express from "express";
const router = express.Router();
import { authUser } from "../controllers/userController.js";

router.post("/auth");

export default router;
