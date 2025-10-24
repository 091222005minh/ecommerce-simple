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
        <img src="${p.image || 'https://via.placeholder.com/150'}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>${p.price.toLocaleString()} VNĐ</p>
        <a href="product.html?id=${p.id}" class="btn">Xem chi tiết</a>
      `;

      container.appendChild(productCard);
    });
  } catch (error) {
    console.error("Lỗi khi tải sản phẩm:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadProducts);
