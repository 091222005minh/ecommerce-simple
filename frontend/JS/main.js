const apiURL = "http://localhost:3000/api/products"; // backend của bạn

async function loadProducts() {
  try {
    const response = await fetch(apiURL);
    const products = await response.json();

    const container = document.getElementById("product-list");
    container.innerHTML = ""; // Xóa nội dung cũ

    products.forEach((p) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");

      productCard.innerHTML = `
        <img src="${p.image_url || 'https://via.placeholder.com/150'}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>${p.price.toLocaleString()} VNĐ</p>
        <button onclick="addToCart(${p.id})" class="btn">🛒 Thêm vào giỏ</button>
        <a href="product.html?id=${p.id}" class="btn btn-detail">Xem chi tiết</a>
      `;

      container.appendChild(productCard);
    });
  } catch (error) {
    console.error("Lỗi khi tải sản phẩm:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadProducts);

// =======================
// 🛒 GIỎ HÀNG LOCALSTORAGE
// =======================

function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const item = cart.find(item => item.id === productId);

  if (item) {
    item.qty++;
  } else {
    cart.push({ id: productId, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("✅ Đã thêm vào giỏ!");
}
