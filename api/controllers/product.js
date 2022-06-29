import productModel from "../models/Product.js";

export const sellProduct = async (request, response, next) => {
  try {
    const newProduct = new productModel({
      name: request.body.name,
      price: request.body.price,
      desc: request.body.desc,
      owner: request.body.owner,
    });

    await newProduct.save();
    response.status(200).send("Product has been uploaded");
  } catch (error) {
    next(error);
  }
};
