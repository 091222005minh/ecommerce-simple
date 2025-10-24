const apiURL = "http://localhost:3000/api/products";

async function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cart-items");
  let total = 0;

  container.innerHTML = "";

  for (const item of cart) {
    const response = await fetch(`${apiURL}/${item.id}`);
    const product = await response.json();

    total += product.price * item.qty;

    container.innerHTML += `
      <div class="cart-item">
        <h3>${product.name}</h3>
        <p>Giá: ${product.price.toLocaleString()} VNĐ</p>
        <p>Số lượng: ${item.qty}</p>
        <hr>
      </div>
    `;
  }

  document.getElementById("total").innerText =
    `Tổng thanh toán: ${total.toLocaleString()} VNĐ`;
}

function checkout() {
  alert("🚀 Thanh toán thành công!");
  localStorage.removeItem("cart");
  location.reload();
}

document.addEventListener("DOMContentLoaded", loadCart);
