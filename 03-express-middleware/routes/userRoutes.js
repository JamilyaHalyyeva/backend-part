import express from "express";
import {handleRegister,handleLogin} from "./../controller/userController.js";

const router = express.Router();
router.post("/register", handleRegister);
router.post("/login", handleLogin);

export default router;