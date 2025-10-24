const apiURL = "http://localhost:3000/api/products";

async function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cart-items");
  let total = 0;

  container.innerHTML = "";

  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const response = await fetch(`${apiURL}/${item.id}`);
    const product = await response.json();

    const subtotal = product.price * item.qty;
    total += subtotal;

    container.innerHTML += `
      <div class="cart-item">
        <h3>${product.name}</h3>
        <p>Giá: ${product.price.toLocaleString()} VNĐ</p>
        <p>Số lượng: ${item.qty}</p>
        <p>Tạm tính: ${subtotal.toLocaleString()} VNĐ</p>

        <button onclick="increaseQty(${i})">➕</button>
        <button onclick="decreaseQty(${i})">➖</button>
        <button onclick="removeItem(${i})">❌ Xóa</button>
        <hr>
      </div>
    `;
  }

  document.getElementById("total").innerText =
    `💰 Tổng thanh toán: ${total.toLocaleString()} VNĐ`;
}

// ➕ Tăng SL
function increaseQty(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart[index].qty++;
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

// ➖ Giảm SL (≥ 1)
function decreaseQty(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart[index].qty > 1) {
    cart[index].qty--;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

// ❌ Xóa 1 item
function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function checkout() {
  alert("✅ Thanh toán thành công!");
  localStorage.removeItem("cart");
  location.reload();
}

document.addEventListener("DOMContentLoaded", loadCart);
