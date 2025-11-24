const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// GET all products from MongoDB
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({}); // fetches all documents in the collection
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// GET /search?q=term
router.get("/search", async (req, res) => {
  try {
    const { q } = req.query; // get the search term from query string

    if (!q) {
      return res.status(400).json({ message: "Query is required" });
    }

    // Find products with name matching the query (case-insensitive, partial match)
    const products = await Product.find({
      name: { $regex: q, $options: "i" } // i = case-insensitive
    }).limit(5); // return max 5 results

    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;
