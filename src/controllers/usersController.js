import { handleResponse } from "../middlewares/responseHandler.js";
import {
  createNewUserService,
  deleteUserService,
  getAllUsersService,
  getUserByIdService,
  updateUserService,
} from "../models/userModels.js";

export const getAllUserController = async (req, res, next) => {
  try {
    const users = await getAllUsersService();
    handleResponse(res, 200, "Retrieved all users.", users);
  } catch (error) {
    next(error);
  }
};

export const getUserByIdController = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await getUserByIdService(id);
    if (!user) return handleResponse(res, 404, "No user found against this id");
    handleResponse(res, 200, "user fetched successfully", user);
  } catch (error) {
    next(error);
  }
};

export const createUserController = async (req, res, next) => {
  const { name, email } = req.body;
  try {
    const newUser = await createNewUserService(name, email);
    handleResponse(res, 201, "New user created successfully.", newUser);
  } catch (error) {
    next(error);
  }
};

export const updateUserController = async (req, res, next) => {
  const { name, email } = req.body;
  const { id } = req.params;
  try {
    const updatedUser = await updateUserService(id, name, email);
    if (!updatedUser)
      return handleResponse(res, 404, "No user found against this id");
    handleResponse(res, 200, "User updated successfully.", updatedUser);
  } catch (error) {
    next(error);
  }
};

export const deleteUserController = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedUser = await deleteUserService(id);
    if (!deletedUser)
      return handleResponse(res, 404, "No user found against this id");

    handleResponse(res, 200, "User deleted successfull.", deletedUser);
  } catch (error) {}
};
