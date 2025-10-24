
const products = [
  { id: 1, name: "Cà phê sữa đá", price: 35000, image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Ca_phe_sua_da.jpg", desc: "Cà phê pha phin đậm đà cùng sữa đặc béo ngậy, vị truyền thống Việt Nam." },
  { id: 2, name: "Bạc xỉu", price: 40000, image: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bac_xiu_coffee.jpg", desc: "Bạc xỉu béo thơm, kết hợp giữa sữa tươi và cà phê nhẹ nhàng." },
  { id: 3, name: "Cappuccino", price: 55000, image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Cappuccino_at_Sightglass_Coffee.jpg", desc: "Cappuccino phong cách Ý với lớp bọt sữa mịn và hương cà phê đậm." },
  { id: 4, name: "Cold Brew cam sả", price: 65000, image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Cold_brew_coffee_in_a_glass.jpg", desc: "Cold Brew ủ lạnh 8 tiếng, kết hợp hương cam sả tươi mát." },
  { id: 5, name: "Espresso", price: 45000, image: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG", desc: "Espresso nguyên chất với vị đắng mạnh mẽ và hương thơm sâu." }
];

// Lấy ID từ query string (VD: ?id=3)
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

// Tìm sản phẩm theo ID
const product = products.find(p => p.id === id);

// Hiển thị thông tin chi tiết
const container = document.getElementById("product-detail");

if (product) {
  container.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p>${product.desc}</p>
    <p><strong>Giá:</strong> ${product.price.toLocaleString()} VND</p>
  `;
} else {
  container.innerHTML = `<p>Không tìm thấy sản phẩm!</p>`;
}
