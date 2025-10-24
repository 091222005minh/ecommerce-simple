async function checkout() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length == 0) return alert("Giỏ hàng trống!");

  const customer = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value
  };

  const resCus = await fetch("http://localhost:3000/api/customers", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(customer)
  });
  const c = await resCus.json();

  let total = 0;
  for (let item of cart) {
    const res = await fetch(`http://localhost:3000/api/products/${item.id}`);
    const p = await res.json();
    total += p.price * item.qty;
  }

  await fetch("http://localhost:3000/api/orders", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      customer_id: c.customer_id,
      total_amount: total
    })
  });

  alert("✅ Thanh toán thành công!");
  localStorage.removeItem("cart");
  window.location = "index.html";
}
