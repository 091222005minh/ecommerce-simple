async function loadAdmin() {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  const box = document.getElementById("admin-products");

  box.innerHTML = "";
  data.forEach(p => {
    box.innerHTML += `
      <div>
        <strong>${p.name}</strong> – ${p.price.toLocaleString()} VNĐ
        <button onclick="delProduct(${p.id})">❌</button>
      </div>
    `;
  });
}

async function addProduct() {
  const newP = {
    name: document.getElementById("pname").value,
    price: document.getElementById("pprice").value,
    description: document.getElementById("pdesc").value,
    image_url: document.getElementById("pimg").value
  };

  await fetch("http://localhost:3000/api/products", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(newP)
  });

  loadAdmin();
}

async function delProduct(id) {
  if (!confirm("Xoá sản phẩm này?")) return;
  await fetch("http://localhost:3000/api/products/" + id, { method: "DELETE" });
  loadAdmin();
}

document.addEventListener("DOMContentLoaded", loadAdmin);
