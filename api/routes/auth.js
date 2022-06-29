import express from "express";
import { login, register } from "../controllers/auth.js";

const router = express.Router();

router.post("/user-register", register);
router.post("/user-login", login);

export default router;

// router.post("/api/user-login", (request, response) => {
//   const form = new Formidable.IncomingForm();
//   form.parse(request, async (error, fields, files) => {
//     const { email, password } = fields;

//     try {
//       if (!email || !password) {
//         return response
//           .status(400)
//           .json({ msg: "All fields have to be entered" });
//       }
//       const user = await userModel.findOne({ email: email });

//       if (!user) {
//         return response
//           .status(400)
//           .json({ msg: "user with this email does not exist" });
//       }

//       const isPasswordMatching = await Bcrypt.compare(password, user.password);

//       if (!isPasswordMatching) {
//         return response.status(400).json({ msg: "Invalid credentials" });
//       }

//       const token = JWT.sign({ id: user._id }, process.env.jwt_secret);
//       return response
//         .status(200)
//         .json({
//           msg: "Logging you in...",
//           token: token,
//           name: user.name,
//           email: user.email,
//         });
//     } catch (error) {
//       return response
//         .status(500)
//         .json({ msg: "Server is currently down please try again later" });
//     }
//   });
// });
//register
// if (!email || !password || !name || !verifiedPassword || !isSeller) {
//   return response
//     .status(400)
//     .json({ msg: "All fields are to be entered" });
// }
// if (password.length < 5) {
//   return response
//     .status(400)
//     .json({ msg: "Password must be atleast 5 characters long" });
// }
// if (password !== verifiedPassword) {
//   return response.status(400).json({ msg: "Password's have to match" });
// }

// const user = await userModel.findOne({ email: email });
// if (user) {
//   return response
//     .status(400)
//     .json({ msg: "User with this email already exists" });
// }

// const salt = await Bcrypt.genSalt(15);
// const hashedPassword = Bcrypt.hash(password, salt);

// const savedUser = await newUser.save();

// const token = JWT.sign({ id: savedUser._id }, process.env.jwt_secret);
// return response.status(201).json({
//   msg: "Account successfully created",
//   token: token,
//   name: savedUser.name,
//   email: savedUser.email,
// });
