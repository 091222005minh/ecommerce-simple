// backend/routes/order.js
const express = require("express");
const router = express.Router();
const db = require("../config/db");

// ===============================
// POST /orders  -> Thêm đơn hàng mới
// ===============================
router.post("/", (req, res) => {
  const { customer_id, total_amount, note } = req.body;

  if (!customer_id || !total_amount) {
    return res.status(400).json({ message: "Thiếu thông tin bắt buộc (customer_id, total_amount)" });
  }

  const sql = "INSERT INTO orders (customer_id, total_amount, note) VALUES (?, ?, ?)";
  db.query(sql, [customer_id, total_amount, note || null], (err, result) => {
    if (err) {
      console.error("❌ Lỗi thêm đơn hàng:", err);
      return res.status(500).json({ error: "Lỗi server" });
    }
    res.status(201).json({
      message: "Thêm đơn hàng thành công",
      order_id: result.insertId
    });
  });
});

// ===============================
// GET /orders/:customer_id  -> Lấy đơn hàng theo khách hàng
// ===============================
router.get("/:customer_id", (req, res) => {
  const { customer_id } = req.params;

  const sql = "SELECT * FROM orders WHERE customer_id = ?";
  db.query(sql, [customer_id], (err, results) => {
    if (err) {
      console.error("❌ Lỗi truy vấn:", err);
      return res.status(500).json({ error: "Lỗi server" });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Khách hàng này chưa có đơn hàng nào" });
    }

    res.json(results);
  });
});

module.exports = router;
const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order"); // import routes order

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Gắn các routes
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server chạy tại http://localhost:${PORT}`);
});

