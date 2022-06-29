import userModel from "../models/User.js";
import JWT from "jsonwebtoken";
import Bcrypt from "bcrypt";
import { createError } from "../utils/error.js";
import dotenv from "dotenv";
dotenv.config();

export const register = async (request, response, next) => {
  try {
    const salt = Bcrypt.genSaltSync(10);
    const hash = Bcrypt.hashSync(request.body.password, salt);

    const newUser = new userModel({
      name: request.body.name,
      email: request.body.email,
      password: hash,
    });

    await newUser.save();
    response.status(200).send("User has been created");
  } catch (error) {
    next(error);
  }
};

export const login = async (request, response, next) => {
  try {
    const user = await userModel.findOne({ name: request.body.name });
    if (!user) return next(createError(404, "User not found"));

    const isPasswordCorrect = await Bcrypt.compare(
      request.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong Password or Username!"));

    const token = JWT.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.jwt_secret
    );

    const { password, isAdmin, ...otherDetails } = user._doc;
    response
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin });
  } catch (error) {
    next(error);
  }
};
