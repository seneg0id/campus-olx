import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    desc: { type: String },
    owner: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("productModel", productSchema);
