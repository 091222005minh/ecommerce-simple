const express = require("express");
const router = express.Router();
const db = require("../config/db");

// ===============================
// GET ALL ORDERS
// ===============================
router.get("/", (req, res) => {
  const sql = "SELECT * FROM orders";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("❌ Lỗi truy vấn:", err);
      return res.status(500).json({ error: "Lỗi server" });
    }
    res.json(results);
  });
});

// ===============================
// GET ORDER BY ID
// ===============================
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM orders WHERE id = ?";
  db.query(sql, [id], (err, results) => {
    if (err) {
      console.error("❌ Lỗi truy vấn:", err);
      return res.status(500).json({ error: "Lỗi server" });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "Không tìm thấy đơn hàng" });
    }
    res.json(results[0]);
  });
});

// ===============================
// CREATE ORDER
// ===============================
router.post("/", (req, res) => {
  const { customer_name, total_price } = req.body;

  if (!customer_name || !total_price) {
    return res.status(400).json({ message: "Thiếu thông tin đơn hàng" });
  }

  const sql = "INSERT INTO orders (customer_name, total_price) VALUES (?, ?)";
  db.query(sql, [customer_name, total_price], (err, result) => {
    if (err) {
      console.error("❌ Lỗi tạo đơn hàng:", err);
      return res.status(500).json({ error: "Lỗi server" });
    }
    res.status(201).json({ message: "Tạo đơn hàng thành công", id: result.insertId });
  });
});

// ===============================
// DELETE ORDER
// ===============================
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM orders WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("❌ Lỗi xóa đơn hàng:", err);
      return res.status(500).json({ error: "Lỗi server" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Không tìm thấy đơn hàng để xóa" });
    }
    res.json({ message: "Xóa đơn hàng thành công" });
  });
});

module.exports = router;
