USE coffeeshop;

-- Dữ liệu mẫu sản phẩm
INSERT INTO products (name, price, description, image_url, category) VALUES
('Cà phê Sữa Đá', 39000, 'Cà phê sữa đá đậm đà, vị truyền thống Việt Nam', '/assets/images/cf_suada.jpg', 'Cà phê'),
('Cà phê Đen Đá', 35000, 'Cà phê đen nguyên chất, hương thơm mạnh mẽ', '/assets/images/cf_denda.jpg', 'Cà phê'),
('Cà phê Cold Brew', 45000, 'Cold Brew ủ lạnh 12 tiếng, hương vị nhẹ nhàng', '/assets/images/cf_coldbrew.jpg', 'Cà phê'),
('Bạc Xỉu Đá', 36000, 'Bạc xỉu vị sữa nhiều hơn, phù hợp người thích ngọt', '/assets/images/cf_bacxiu.jpg', 'Cà phê'),
('Espresso', 40000, 'Espresso nguyên chất hương Ý', '/assets/images/cf_espresso.jpg', 'Cà phê'),
('Latte', 42000, 'Latte béo mịn với lớp sữa nóng', '/assets/images/cf_latte.jpg', 'Cà phê'),
('Cappuccino', 42000, 'Cappuccino hương vị Ý đậm đà', '/assets/images/cf_cappuccino.jpg', 'Cà phê'),
('Americano', 38000, 'Americano nhẹ nhàng, dễ uống', '/assets/images/cf_americano.jpg', 'Cà phê'),
('Mocha', 45000, 'Mocha kết hợp cà phê và chocolate', '/assets/images/cf_mocha.jpg', 'Cà phê'),
('Caramel Macchiato', 49000, 'Hòa quyện vị caramel và sữa béo', '/assets/images/cf_caramel.jpg', 'Cà phê');

-- Dữ liệu khách hàng mẫu
INSERT INTO customers (name, email, phone, address) VALUES
('Nguyễn Minh', 'minh@example.com', '0901234567', 'Hà Nội'),
('Trần Anh', 'anh@example.com', '0912345678', 'TP.HCM'),
('Lê Mai', 'mai@example.com', '0939876543', 'Đà Nẵng');

-- Đơn hàng mẫu
INSERT INTO orders (customer_id, total_amount) VALUES
(1, 78000),
(2, 125000);

-- Chi tiết đơn hàng
INSERT INTO order_details (order_id, product_id, quantity, subtotal) VALUES
(1, 1, 2, 78000),
(2, 3, 1, 45000),
(2, 9, 1, 45000),
(2, 10, 1, 35000);
