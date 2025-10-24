const apiURL = "http://localhost:3000/api/products";

// Lấy id từ URL (ví dụ: product.html?id=3)
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

async function loadProductDetail() {
  try {
    const response = await fetch(`${apiURL}/${id}`);
    if (!response.ok) throw new Error("Không tìm thấy sản phẩm");
    const p = await response.json();

    const container = document.getElementById("product-detail");
    container.innerHTML = `
      <div class="product-detail-card">
        <img src="${p.image || 'https://via.placeholder.com/400'}" alt="${p.name}">
        <h2>${p.name}</h2>
        <p class="price">${p.price.toLocaleString()} VNĐ</p>
        <p class="desc">${p.description || "Không có mô tả."}</p>
        <a href="index.html" class="btn-back">⬅ Quay lại menu</a>
      </div>
    `;
  } catch (error) {
    console.error(error);
    document.getElementById("product-detail").innerHTML = `<p>Không tải được sản phẩm.</p>`;
  }
}

document.addEventListener("DOMContentLoaded", loadProductDetail);
