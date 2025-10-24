const apiURL = "http://localhost:3000/api/products";
let selectedID = null;

// Tải danh sách SP
async function loadProducts() {
  const res = await fetch(apiURL);
  const data = await res.json();
  const container = document.getElementById("admin-products");

  container.innerHTML = "";

  data.forEach(p => {
    container.innerHTML += `
      <div class="product-card">
        <img src="${p.image_url}" width="120" />
        <h3>${p.name}</h3>
        <p>${p.price.toLocaleString()} VNĐ</p>

        <button onclick="fillForm('${p.id}','${p.name}','${p.price}','${p.image_url}','${p.description}')">✏️</button>
        <button onclick="deleteProduct(${p.id})">🗑 Xóa</button>
      </div>
      <hr>
    `;
  });
}

// Fill form khi chọn sửa
function fillForm(id, name, price, img, desc) {
  selectedID = id;
  pname.value = name;
  pprice.value = price;
  pimg.value = img;
  pdesc.value = desc;
}

// Thêm SP
async function addProduct() {
  const data = {
    name: pname.value,
    price: pprice.value,
    image_url: pimg.value,
    description: pdesc.value
  };

  await fetch(apiURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  loadProducts();
}

// Cập nhật SP
async function updateProduct() {
  if (!selectedID) return alert("Chưa chọn SP để sửa!");

  const data = {
    name: pname.value,
    price: pprice.value,
    image_url: pimg.value,
    description: pdesc.value
  };

  await fetch(`${apiURL}/${selectedID}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  loadProducts();
  alert("✅ Sửa thành công");
}

// Xóa SP
async function deleteProduct(id) {
  if (!confirm("Xóa thật chứ?")) return;

  await fetch(`${apiURL}/${id}`, { method: "DELETE" });
  loadProducts();
}

document.addEventListener("DOMContentLoaded", loadProducts);
