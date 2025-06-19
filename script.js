const searchInput = document.getElementById("searchInput");
const results = document.getElementById("results");

const products = [
  {
    number: "1",
    image:
      "https://thumbnail9.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/91d7/4ba4cc9def1ff057f50b1d95b68dbc418a1e9e785a6c2597961ebf28daa2.jpg",
    title: "트랄랄레로 트랄랄라 인형",
    link: "https://link.coupang.com/a/czNwDC",
  },
  // 더 추가 가능
];

function renderProducts(filter = "") {
  results.innerHTML = "";
  const filtered = products.filter((p) => !filter || p.number === filter);

  filtered.forEach((product) => {
    const box = document.createElement("div");
    box.className = "product-box";
    box.innerHTML = `
      <a href="${product.link}" target="_blank" class="product-link">
        <div class="product-info">
          <div class="product-number">${product.number}</div>
          <img src="${product.image}" alt="product ${product.number}" />
        </div>
        <div class="title">${product.title}</div>
      </a>
    `;
    results.appendChild(box);
  });
}

// 초기 전체 표시
renderProducts();

searchInput.addEventListener("input", () => {
  const val = searchInput.value.trim();
  renderProducts(val);
});

// ⬇ 모달 관련 수정 포함
const modal = document.getElementById("feedbackModal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");
const topBar = document.querySelector(".top-bar");
const container = document.querySelector(".container");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
  topBar.style.display = "none";
  container.style.display = "none";
  document.body.style.overflow = "hidden";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
  topBar.style.display = "flex";
  container.style.display = "flex";
  document.body.style.overflow = "auto";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    topBar.style.display = "flex";
    container.style.display = "flex";
    document.body.style.overflow = "auto";
  }
});
