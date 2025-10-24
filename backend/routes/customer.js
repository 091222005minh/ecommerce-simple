// backend/routes/customer.js
const express = require("express");
const router = express.Router();
const db = require("../config/db");

// ===============================
// POST /customers  -> Thêm khách hàng mới
// ===============================
router.post("/", (req, res) => {
  const { name, email, phone, address } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Thiếu tên hoặc email khách hàng" });
  }

  const sql = "INSERT INTO customers (name, email, phone, address) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, email, phone || null, address || null], (err, result) => {
    if (err) {
      console.error("❌ Lỗi thêm khách hàng:", err);
      return res.status(500).json({ error: "Lỗi server" });
    }

    res.status(201).json({
      message: "Thêm khách hàng thành công",
      customer_id: result.insertId
    });
  });
});

// ===============================
// GET /customers  -> Lấy danh sách khách hàng
// ===============================
router.get("/", (req, res) => {
  const sql = "SELECT * FROM customers";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("❌ Lỗi truy vấn:", err);
      return res.status(500).json({ error: "Lỗi server" });
    }
    res.json(results);
  });
});

// ===============================
// GET /customers/:id  -> Lấy chi tiết 1 khách hàng
// ===============================
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM customers WHERE id = ?";
  db.query(sql, [id], (err, results) => {
    if (err) {
      console.error("❌ Lỗi truy vấn:", err);
      return res.status(500).json({ error: "Lỗi server" });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Không tìm thấy khách hàng" });
    }

    res.json(results[0]);
  });
});

module.exports = router;
<<<<<<< HEAD
=======
const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
const customerRoutes = require("./routes/customer");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Gắn routes
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/customers", customerRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server chạy tại http://localhost:${PORT}`);
});
>>>>>>> 7ef27adf1d3571e8f0757d35e45e60cf6dfaf1c0
