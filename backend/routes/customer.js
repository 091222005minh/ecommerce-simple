const express = require("express");
const router = express.Router();
const db = require("../config/db");

// ===============================
// GET ALL CUSTOMERS
// ===============================
router.get("/", (req, res) => {
  const sql = "SELECT * FROM customers";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Lỗi truy vấn:", err);
      return res.status(500).json({ error: "Lỗi server" });
    }
    res.json(results);
  });
});

// ===============================
// GET CUSTOMER BY ID
// ===============================
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM customers WHERE id = ?";
  db.query(sql, [id], (err, results) => {
    if (err) {
      console.error("Lỗi truy vấn:", err);
      return res.status(500).json({ error: "Lỗi server" });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "Không tìm thấy khách hàng" });
    }
    res.json(results[0]);
  });
});

// ===============================
// CREATE CUSTOMER
// ===============================
router.post("/", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Thiếu tên hoặc email" });
  }

  const sql = "INSERT INTO customers (name, email) VALUES (?, ?)";
  db.query(sql, [name, email], (err, result) => {
    if (err) {
      console.error("Lỗi thêm khách hàng:", err);
      return res.status(500).json({ error: "Lỗi server" });
    }
    res.status(201).json({ message: "Thêm khách hàng thành công", id: result.insertId });
  });
});

// ===============================
// UPDATE CUSTOMER
// ===============================
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const sql = "UPDATE customers SET name = ?, email = ? WHERE id = ?";
  db.query(sql, [name, email, id], (err, result) => {
    if (err) {
      console.error("Lỗi cập nhật khách hàng:", err);
      return res.status(500).json({ error: "Lỗi server" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Không tìm thấy khách hàng cần cập nhật" });
    }
    res.json({ message: "Cập nhật khách hàng thành công" });
  });
});

// ===============================
// DELETE CUSTOMER
// ===============================
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM customers WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Lỗi xóa khách hàng:", err);
      return res.status(500).json({ error: "Lỗi server" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Không tìm thấy khách hàng để xóa" });
    }
    res.json({ message: "Xóa khách hàng thành công" });
  });
});

module.exports = router;
