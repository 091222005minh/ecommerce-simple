const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
const customerRoutes = require("./routes/customer");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/customers", customerRoutes);

// Root test (optional)
app.get("/", (req, res) => {
  res.send("✅ Coffee Shop API đang chạy!");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server chạy tại http://localhost:${PORT}`);
});
