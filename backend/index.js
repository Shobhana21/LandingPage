const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// DB connect
connectDB();

app.get("/test", (req, res) => {
  res.send("Backend is working!");
});

// Mount routes
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
