"use strict";

const menu = document.querySelector("#menu-principal");
const menuToggle = document.querySelector(".menu-toggle");
const filterButtons = document.querySelectorAll(".filter-button");
const cards = document.querySelectorAll(".temple-card");
const emptyMessage = document.querySelector("#empty-message");
const status = document.querySelector("#filter-status");

function setMenu(open) {
  menu.classList.toggle("is-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
}

function applyFilter(button, event) {
  event.preventDefault();
  const filter = button.dataset.filter;
  let visible = 0;

  filterButtons.forEach((item) => {
    const selected = item === button;
    item.classList.toggle("is-active", selected);
    if (selected) item.setAttribute("aria-current", "page");
    else item.removeAttribute("aria-current");
  });

  cards.forEach((card) => {
    const show = filter === "todos" || card.dataset.categories.split(" ").includes(filter);
    card.hidden = !show;
    if (show) visible += 1;
  });

  emptyMessage.hidden = visible > 0;
  status.textContent = visible === 1 ? "Mostrando 1 templo." : `Mostrando ${visible} templos.`;
  setMenu(false);
}

filterButtons.forEach((button) => button.addEventListener("click", (event) => applyFilter(button, event)));
menuToggle.addEventListener("click", () => setMenu(!menu.classList.contains("is-open")));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menu.classList.contains("is-open")) {
    setMenu(false);
    menuToggle.focus();
  }
});

document.querySelector("#current-year").textContent = new Date().getFullYear();

const modifiedTime = document.querySelector("#last-modified");
const modified = new Date(document.lastModified);
if (!Number.isNaN(modified.getTime())) {
  modifiedTime.dateTime = modified.toISOString();
  modifiedTime.textContent = new Intl.DateTimeFormat("pt-BR", { dateStyle: "short", timeStyle: "short" }).format(modified);
}