import express from "express";
const router = express.Router();
import {
  getAllUserController,
  getUserByIdController,
  createUserController,
  updateUserController,
  deleteUserController,
} from "../controllers/usersController.js";
import { validateUserInput } from "../middlewares/validateUserSchema.js";

router.get("/", getAllUserController);
router.get("/:id", getUserByIdController);
router.post("/", validateUserInput, createUserController);
router.put("/:id", validateUserInput, updateUserController);
router.delete("/:id", deleteUserController);

export default router;
