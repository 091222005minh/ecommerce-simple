-- ==============================
-- DATABASE: CoffeeShop
-- Author: Thành viên #1 (Database)

-- ✅ Giải thích cấu trúc:

-- products: danh sách cà phê bán ra.

-- customers: thông tin khách.

-- orders: thông tin đơn hàng.

-- order_details: chi tiết từng sản phẩm trong đơn hàng.
-- → Mỗi đơn hàng có thể chứa nhiều sản phẩm (1–n).
-- ==============================
CREATE DATABASE IF NOT EXISTS coffeeshop;
USE coffeeshop;

-- Bảng sản phẩm (Coffee)
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  description TEXT,
  image_url VARCHAR(255),
  category VARCHAR(50) DEFAULT 'Cà phê',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bảng khách hàng
CREATE TABLE customers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  phone VARCHAR(20),
  address VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bảng đơn hàng
CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_id INT NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL,
  order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (customer_id) REFERENCES customers(id)
);

-- Bảng chi tiết đơn hàng
CREATE TABLE order_details (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL DEFAULT 1,
  subtotal DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (order_id) REFERENCES orders(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);

