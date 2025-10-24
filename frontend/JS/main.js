
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

// Lấy phần tử hiển thị danh sách
const list = document.getElementById("product-list");

// Hiển thị danh sách sản phẩm
list.innerHTML = products.map(p => `
  <div class="product-card" onclick="window.location.href='product.html?id=${p.id}'">
    <img src="${p.image}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>${p.price.toLocaleString()} VND</p>
  </div>
`).join('');

