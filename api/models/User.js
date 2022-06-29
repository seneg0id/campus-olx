import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    sales: { type: Array },
    messages: { type: Array },
  },
  { timestamps: true }
);

export default mongoose.model("userModel", userSchema);
