import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (request, response, next) => {
//   response.send("Hello user, you are logged in");
// });
// router.get("/checkuser/:id", verifyUser, (request, response, next) => {
//   response.send("Hello user, you are logged in and can delete your account");
// });
// router.get("/checkadmin/:id", verifyAdmin, (request, response, next) => {
//   response.send("Hello admin, you are logged in and can delete any account");
// });
router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);
router.get("/:id", verifyUser, getUser);
router.get("/", verifyAdmin, getUsers);

export default router;
