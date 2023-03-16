const header = document.querySelector(".primary-header");
const hamBtn = document.querySelector(".primary-header__ham");

hamBtn.addEventListener("click", () => {
  header.classList.toggle("active");
});

function moveCards() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.dataset.order = parseInt(card.dataset.order) + 1;

    console.log(card.dataset.order);

    if (card.dataset.order > cards.length) {
      setTimeout(() => {
        card.style.opacity = 0;
        card.dataset.order = 1;

        setTimeout(() => {
          card.style.opacity = 1;
        }, 1000);
      }, 200);
    }
  });
}

setInterval(moveCards, 7500);
