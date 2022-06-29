import express from "express";
import { sellProduct } from "../controllers/product.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/uploadproduct/:id", verifyUser, sellProduct);

export default router;
