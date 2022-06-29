import userModel from "../models/User.js";

export const updateUser = async (request, response, next) => {
  try {
    const updatedUser = await userModel.findByIdAndUpdate(
      request.params.id,
      { $set: request.body },
      { new: true }
    );
    response.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (request, response, next) => {
  try {
    await userModel.findByIdAndDelete(request.params.id);
    response.status(200).json("User has been deleted");
  } catch (error) {
    next(error);
  }
};

export const getUser = async (request, response, next) => {
  try {
    const user = await userModel.findById(request.params.id);
    response.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (request, response, next) => {
  try {
    const users = await userModel.find();
    response.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
