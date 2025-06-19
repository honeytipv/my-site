const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const results = document.getElementById("results");

const products = [
  { number: "1", title: "트랄랄레로 트랄랄라 인형", link: "#" },
  { number: "2", title: "트랄랄레로 세트", link: "#" },
  { number: "3", title: "트랄랄라 미니 인형", link: "#" }
];

function renderResults(filter = "") {
  results.innerHTML = "";
  const filtered = products.filter(p => !filter || p.number === filter);
  if (filtered.length === 0) {
    results.innerHTML = "<p>검색 결과가 없습니다.</p>";
    return;
  }
  filtered.forEach(p => {
    const div = document.createElement("div");
    div.style.padding = "10px";
    div.style.border = "1px solid #ddd";
    div.style.marginBottom = "10px";
    div.innerHTML = `<strong>${p.number}번:</strong> <a href="${p.link}" target="_blank">${p.title}</a>`;
    results.appendChild(div);
  });
}

searchBtn.addEventListener("click", () => {
  renderResults(searchInput.value.trim());
});

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    renderResults(searchInput.value.trim());
  }
});

// 초기 렌더링 (전체)
renderResults();
