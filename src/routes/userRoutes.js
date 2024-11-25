import express from "express";
import {
  getAllUsersHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
} from "../controllers/userControllers.js";

const router = express.Router();

router.get("/users", getAllUsersHandler);
router.post("/create", createUserHandler);
router.put("/update", updateUserHandler);
router.delete("/delete", deleteUserHandler);

export default router;
