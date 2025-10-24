// backend/routes/product.js
const express = require("express");
const router = express.Router();
const db = require("../config/db"); // kết nối MySQL

// ===============================
// GET all products
// ===============================
router.get("/", (req, res) => {
  const sql = "SELECT * FROM products";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("❌ Lỗi truy vấn:", err);
      return res.status(500).json({ error: "Lỗi server" });
    }
    res.json(results);
  });
});

// ===============================
// GET product by ID
// ===============================
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM products WHERE id = ?";
  db.query(sql, [id], (err, results) => {
    if (err) {
      console.error("❌ Lỗi truy vấn:", err);
      return res.status(500).json({ error: "Lỗi server" });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
    }
    res.json(results[0]);
  });
});

// ===============================
// POST (Thêm sản phẩm mới)
// ===============================
router.post("/", (req, res) => {
  const { name, price, description } = req.body;

  if (!name || !price) {
    return res.status(400).json({ message: "Thiếu tên hoặc giá sản phẩm" });
  }

  const sql = "INSERT INTO products (name, price, description) VALUES (?, ?, ?)";
  db.query(sql, [name, price, description || null], (err, result) => {
    if (err) {
      console.error("❌ Lỗi thêm sản phẩm:", err);
      return res.status(500).json({ error: "Lỗi server" });
    }
    res.status(201).json({ message: "Thêm sản phẩm thành công", id: result.insertId });
  });
});

// ===============================
// PUT (Cập nhật sản phẩm theo ID)
// ===============================
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, price, description } = req.body;

  const sql = "UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?";
  db.query(sql, [name, price, description, id], (err, result) => {
    if (err) {
      console.error("❌ Lỗi cập nhật:", err);
      return res.status(500).json({ error: "Lỗi server" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Không tìm thấy sản phẩm để cập nhật" });
    }
    res.json({ message: "Cập nhật sản phẩm thành công" });
  });
});

// ===============================
// DELETE (Xóa sản phẩm theo ID)
// ===============================
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM products WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("❌ Lỗi xóa:", err);
      return res.status(500).json({ error: "Lỗi server" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Không tìm thấy sản phẩm để xóa" });
    }
    res.json({ message: "Xóa sản phẩm thành công" });
  });
});

module.exports = router;
const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const productRoutes = require("./routes/product"); // import routes

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Gắn route sản phẩm
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server chạy tại http://localhost:${PORT}`);
});

