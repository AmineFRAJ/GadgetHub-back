const Product = require("../models/productModel");

exports.test = async (req, res) => {
  try {
    res.status(200).send("Test OK!");
  } catch (error) {
    res.status(500).send(error);
  }
};

//add one product
exports.addProduct = async (req, res) => {
  try {
    const {
      category,
      brand,
      model,
      price,
      releaseDate,
      description,
      stock,
      image,
    } = req.body;
    const newProduct = new Product({
      category,
      brand,
      model,
      price,
      releaseDate,
      description,
      stock,
      image,
    });
    await newProduct.save();
    res.status(200).send({ msg: "Product added successfully", newProduct });
  } catch (error) {
    res.status(500).send(error);
  }
};

// add many products
exports.addManyProducts = async (req, res) => {
  try {
    const products = req.body;
    // Check if the request body is an array
    if (!Array.isArray(products)) {
      return res
        .status(400)
        .send({ msg: "Request body must be an array of products" });
    }
    const newProducts = await Product.insertMany(products);
    res.status(200).send({ msg: "Products added successfully", newProducts });
  } catch (error) {
    console.error("Error adding products:", error);
    res.status(500).send({ msg: "Server error", error: error.message });
  }
};

//get all product
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (products.length === 0) {
      return res.status(404).send({ msg: "No Products found" });
    }
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error);
  }
};

//get one product by id
exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const foundProduct = await Product.findById(id);
    if (!foundProduct) {
      return res.status(404).send({ msg: "Product not found" });
    }
    res.status(200).send(foundProduct);
  } catch (error) {
    res.status(500).send(error);
  }
};
//get product by category
exports.getProductsByCategory = async (req, res) => {
  const { category } = req.params; // Get the category from route parameters
  try {
    const products = await Product.find({ category });
    if (products.length === 0) {
      return res
        .status(404)
        .send({ msg: "No Products found for this category" });
    }
   res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error);
  }
};

//delete Product
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res
      .status(200)
      .send({ msg: "Product deleted successfully", deletedProduct });
  } catch (error) {
    res.status(500).send(error);
  }
};

//edit product
exports.editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      category,
      brand,
      model,
      price,
      releaseDate,
      description,
      stock,
      image,
    } = req.body;
    const editProduct = await Product.findByIdAndUpdate(
      id,
      { category, brand, model, price, releaseDate, description, stock, image },
      { new: true }
    );
    res.status(200).send({ msg: "Product edited successfully", editProduct });
  } catch (error) {
    res.status(500).send(error);
  }
};
