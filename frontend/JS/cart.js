const apiURL = "http://localhost:3000/api/products";

async function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cart-items");
  let total = 0;

  container.innerHTML = "";

<<<<<<< HEAD
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const response = await fetch(`${apiURL}/${item.id}`);
    const product = await response.json();

    const subtotal = product.price * item.qty;
    total += subtotal;
=======
  for (const item of cart) {
    const response = await fetch(`${apiURL}/${item.id}`);
    const product = await response.json();

    total += product.price * item.qty;
>>>>>>> 7ef27adf1d3571e8f0757d35e45e60cf6dfaf1c0

    container.innerHTML += `
      <div class="cart-item">
        <h3>${product.name}</h3>
        <p>Giá: ${product.price.toLocaleString()} VNĐ</p>
        <p>Số lượng: ${item.qty}</p>
<<<<<<< HEAD
        <p>Tạm tính: ${subtotal.toLocaleString()} VNĐ</p>

        <button onclick="increaseQty(${i})">➕</button>
        <button onclick="decreaseQty(${i})">➖</button>
        <button onclick="removeItem(${i})">❌ Xóa</button>
=======
>>>>>>> 7ef27adf1d3571e8f0757d35e45e60cf6dfaf1c0
        <hr>
      </div>
    `;
  }

  document.getElementById("total").innerText =
<<<<<<< HEAD
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
=======
    `Tổng thanh toán: ${total.toLocaleString()} VNĐ`;
}

function checkout() {
  alert("🚀 Thanh toán thành công!");
>>>>>>> 7ef27adf1d3571e8f0757d35e45e60cf6dfaf1c0
  localStorage.removeItem("cart");
  location.reload();
}

document.addEventListener("DOMContentLoaded", loadCart);
