const filterLinks = document.querySelectorAll(".filter-button");
const cards = document.querySelectorAll(".temple-card");
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu-principal");
filterLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const filter = link.dataset.filter;
    filterLinks.forEach((item) => {
      const selected = item === link;
      item.classList.toggle("is-active", selected);
      if (selected) item.setAttribute("aria-current", "page");
      else item.removeAttribute("aria-current");
    });
    cards.forEach((card) => {
      card.hidden = filter !== "todos" && !card.dataset.categories.split(" ").includes(filter);
    });
    menu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
menuToggle.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
document.querySelector("#current-year").textContent = String(new Date().getFullYear());
const modifiedTime = document.querySelector("#last-modified");
const modified = new Date(document.lastModified);
if (!Number.isNaN(modified.getTime())) {
  modifiedTime.dateTime = modified.toISOString();
  modifiedTime.textContent = new Intl.DateTimeFormat("pt-BR", { dateStyle: "short", timeStyle: "short" }).format(modified);
}
