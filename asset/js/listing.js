const filter = document.getElementById("filter");
const cards = document.querySelectorAll("#listings .card");

filter.addEventListener("change", () => {
  const type = filter.value;
  cards.forEach(card => {
    card.style.display = type === "all" || card.dataset.type === type ? "block" : "none";
  });
});
