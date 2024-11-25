import {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../services/userServices.js";

export const getAllUsersHandler = async (req, res) => {
  try {
    const users = await getAllUsers;
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createUserHandler = async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateUserHandler = async (req, res) => {
  try {
    const user = await updateUser(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteUserHandler = async (req, res) => {
  try {
    const user = await deleteUser(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
