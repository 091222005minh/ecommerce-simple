// server-frontend.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = 5500;

// Serve toàn bộ folder hiện tại
app.use(express.static(__dirname));

// Trả file index.html mặc định
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Frontend chạy tại http://localhost:${PORT}`);
});
