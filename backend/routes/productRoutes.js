const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// GET /products - list all
router.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// GET /search?q=term
router.get("/search", async (req, res) => {
  const term = req.query.q || "";
  
  const results = await Product.find({
    name: { $regex: term, $options: "i" },
  }).limit(5);

  res.json(results);
});

module.exports = router;
