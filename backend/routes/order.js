// backend/routes/order.js
const express = require("express");
const router = express.Router();
const db = require("../config/db");

// ===============================
// POST /orders  → Tạo đơn hàng mới
// ===============================
router.post("/", (req, res) => {
  const { customer_id, total_amount, note } = req.body;

  // Kiểm tra dữ liệu đầu vào
  if (!customer_id || !total_amount) {
    return res
      .status(400)
      .json({ message: "Thiếu thông tin bắt buộc: customer_id hoặc total_amount" });
  }

  // Câu lệnh SQL thêm đơn hàng
  const sql = "INSERT INTO orders (customer_id, total_amount, note) VALUES (?, ?, ?)";
  const values = [customer_id, total_amount, note || null];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("❌ Lỗi tạo đơn hàng:", err);
      return res.status(500).json({ error: "Lỗi server khi thêm đơn hàng" });
    }

    res.status(201).json({
      message: "✅ Tạo đơn hàng thành công",
      order_id: result.insertId,
    });
  });
});

module.exports = router;
