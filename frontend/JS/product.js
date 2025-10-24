
const products = [
  {
    id: 1,
    name: "Cà phê sữa đá",
    price: 35000,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Ca_phe_sua_da.jpg"
  },
  {
    id: 2,
    name: "Bạc xỉu",
    price: 40000,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bac_xiu_coffee.jpg"
  },
  {
    id: 3,
    name: "Cappuccino",
    price: 55000,
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Cappuccino_at_Sightglass_Coffee.jpg"
  },
  {
    id: 4,
    name: "Cold Brew cam sả",
    price: 65000,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Cold_brew_coffee_in_a_glass.jpg"
  },
  {
    id: 5,
    name: "Espresso",
    price: 45000,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
  }
];

// 🔍 Lấy id từ query string (VD: ?id=3)
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

// 🔎 Tìm sản phẩm tương ứng
const product = products.find(p => p.id === id);

// 🧱 Hiển thị thông tin
const detailContainer = document.getElementById("product-detail");

if (product) {
  detailContainer.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p>Giá: ${product.price.toLocaleString()} VND</p>
  `;
} else {
  detailContainer.innerHTML = `<p>Không tìm thấy sản phẩm!</p>`;
}

