const mongoose = require("mongoose");
const Product = require("./models/Product");
const connectDB = require("./config/db");
const fs = require("fs");
require("dotenv").config();

// Connect to MongoDB
connectDB();

const importData = async () => {
  try {
    // Load sample JSON
    const products = JSON.parse(
      fs.readFileSync("./data/sampleProducts.json", "utf-8")
    );

    // Clear existing products (optional)
    await Product.deleteMany();

    // Insert new products
    await Product.insertMany(products);

    console.log("Sample data imported successfully!");
    process.exit();
  } catch (error) {
    console.error("Error importing data:", error);
    process.exit(1);
  }
};

importData();
