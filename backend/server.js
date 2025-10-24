<<<<<<< HEAD
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

// API Routes
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/customers", customerRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server chạy tại http://localhost:${PORT}`);
});
=======
// server.js
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const PORT = 3000; // 

// Middleware
app.use(cors());
app.use(express.json());

// --- Kết nối MySQL ---
const db = mysql.createConnection({
  host: "localhost",      // hoặc địa chỉ IP / domain
  user: "root",           // tài khoản MySQL
  password: "your_password", // mật khẩu MySQL
  database: "your_db_name"   // tên cơ sở dữ liệu
});

// Kiểm tra kết nối
db.connect((err) => {
  if (err) {
    console.error("❌ Lỗi kết nối MySQL:", err);
  } else {
    console.log("✅ Đã kết nối MySQL thành công!");
  }
});

// --- Ví dụ route cơ bản ---
app.get("/", (req, res) => {
  res.send("Server Express + MySQL đang hoạt động!");
});

// --- Ví dụ route lấy dữ liệu từ MySQL ---
app.get("/users", (req, res) => {
  const sql = "SELECT * FROM users"; // bảng mẫu
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Lỗi truy vấn:", err);
      res.status(500).json({ error: "Lỗi server" });
    } else {
      res.json(results);
    }
  });
});

// --- Khởi động server ---
app.listen(PORT, () => {
  console.log(`🚀 Server chạy tại http://localhost:${PORT}`);
});

>>>>>>> 7ef27adf1d3571e8f0757d35e45e60cf6dfaf1c0
