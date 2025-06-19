// 동의창 관련
const consentScreen = document.getElementById("consentScreen");
const consentAgreeBtn = document.getElementById("consentAgree");
const consentDetailBtn = document.getElementById("consentDetail");
const consentDetailText = document.getElementById("consentDetailText");
const mainApp = document.getElementById("mainApp");

consentDetailBtn.addEventListener("click", () => {
  consentDetailText.classList.toggle("hidden");
});

consentAgreeBtn.addEventListener("click", () => {
  consentScreen.style.display = "none";
  mainApp.style.display = "block";
  startApp(); // 기존 스크립트 실행
});

// --------- 기존 스크립트 실행 함수 (동의 후에만 실행됨) ---------
function startApp() {
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

  renderProducts();

  searchInput.addEventListener("input", () => {
    const val = searchInput.value.trim();
    renderProducts(val);
  });

  // 모달 처리
  const modal = document.getElementById("feedbackModal");
  const openModalBtn = document.getElementById("openModal");
  const closeModalBtn = document.getElementById("closeModal");

  openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
  }
