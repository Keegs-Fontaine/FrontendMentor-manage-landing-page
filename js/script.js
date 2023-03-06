const header = document.querySelector(".primary-header");
const hamBtn = document.querySelector(".primary-header__ham");

hamBtn.addEventListener("click", () => {
  header.classList.toggle("active");
});
