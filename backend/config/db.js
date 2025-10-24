const mysql = require("mysql2");

// Tạo kết nối MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "webuser",
  password: "112705",
  database: "coffeeshop"
});

// Kiểm tra kết nối
db.connect(err => {
  if (err) {
    console.error("Lỗi kết nối MySQL:", err);
  } else {
    console.log("✅ Kết nối MySQL thành công!");
  }
});

module.exports = db;
