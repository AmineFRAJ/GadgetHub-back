const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const productSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
      enum: ["smartphone", "laptop", "tablet"],
    },
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    releaseDate: {
      type: Date,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    stock: { type: Number, required: true },
    image: { type: String },
  },
  {
    timestamps: true,
  },
  {
    collection: "products",
  }
);
module.exports = Product = mongoose.model("Product", productSchema);
