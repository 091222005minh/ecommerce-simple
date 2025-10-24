const apiURL = "http://localhost:3000/api/products"; // backend của bạn

<<<<<<< HEAD
// =======================
// TẢI DANH SÁCH SẢN PHẨM
// =======================
=======
>>>>>>> 7ef27adf1d3571e8f0757d35e45e60cf6dfaf1c0
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
<<<<<<< HEAD

        <button onclick="addToCart(${p.id})" class="btn">🛒 Thêm vào giỏ</button>
        <a href="product.html?id=${p.id}" class="btn btn-detail">🔍 Xem chi tiết</a>

        <button class="delete-btn" data-id="${p.id}">🗑 Xóa</button>
=======
        <button onclick="addToCart(${p.id})" class="btn">🛒 Thêm vào giỏ</button>
        <a href="product.html?id=${p.id}" class="btn btn-detail">Xem chi tiết</a>
>>>>>>> 7ef27adf1d3571e8f0757d35e45e60cf6dfaf1c0
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
<<<<<<< HEAD
=======

>>>>>>> 7ef27adf1d3571e8f0757d35e45e60cf6dfaf1c0
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
<<<<<<< HEAD

// =======================
// 🗑 XÓA SẢN PHẨM
// =======================
document.addEventListener("click", async (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const id = e.target.getAttribute("data-id");

    if (confirm("Bạn có chắc muốn xóa sản phẩm này?")) {
      await fetch(`${apiURL}/${id}`, {
        method: "DELETE"
      });

      loadProducts(); // Tải lại UI sau khi xóa
    }
  }
});
=======
>>>>>>> 7ef27adf1d3571e8f0757d35e45e60cf6dfaf1c0
