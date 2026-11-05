const temples = [
  {
    name: "Templo de Caracas, Venezuela",
    place: "Caracas, Venezuela",
    image: "https://www.churchofjesuschrist.org/imgs/d709367e4fd0fdb422b80130d127f341947f6dfa/full/1200%2C/0/default",
    alt: "Vista frontal do Templo de Caracas em um dia nublado.",
    categories: ["antigo", "pequeno"]
  },
  {
    name: "Templo de Bogotá, Colômbia",
    place: "Bogotá, Colômbia",
    image: "https://www.churchofjesuschrist.org/imgs/d08e861b3d488bc4327fd4183e1136e23bd441c7/full/1200%2C/0/default",
    alt: "Templo de Bogotá com arquitetura clara e torre central.",
    categories: ["antigo", "pequeno"]
  },
  {
    name: "Templo de Lima, Peru",
    place: "Lima, Peru",
    image: "https://www.churchofjesuschrist.org/imgs/10f4371cc51a00ac1cf2f074228fe0570709e93f/full/1200%2C/0/default",
    alt: "Torres do Templo de Lima em meio à paisagem ao redor.",
    categories: ["antigo", "grande"]
  },
  {
    name: "Templo de Roma, Itália",
    place: "Roma, Itália",
    image: "https://www.churchofjesuschrist.org/imgs/bf73f132564c2d84658d4cd8d4a3c9fab184dd22/full/1200%2C/0/default",
    alt: "Templo de Roma com os jardins e a cidade ao redor.",
    categories: ["novo", "grande"]
  },
  {
    name: "Templo do Centro da Cidade de Provo, Utah",
    place: "Provo, Utah, Estados Unidos",
    image: "https://www.churchofjesuschrist.org/imgs/ac0830150e1847c82dcb5fc0c01ecbf94d29af5f/full/1200%2C/0/default",
    alt: "Detalhe das torres do Templo do Centro da Cidade de Provo.",
    categories: ["novo", "grande"]
  },
  {
    name: "Templo de Salt Lake, Utah",
    place: "Salt Lake City, Utah, Estados Unidos",
    image: "https://www.churchofjesuschrist.org/imgs/bb20ac26429ab0478980168fbcac032c25dfb3d9/full/1200%2C/0/default",
    alt: "Templo de Salt Lake com suas torres e paisagismo.",
    categories: ["antigo", "grande"]
  }
];

const gallery = document.querySelector("#temple-gallery");
const emptyMessage = document.querySelector("#empty-message");
const filterButtons = document.querySelectorAll(".filter-button");
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu-principal");

function renderGallery(filter = "todos") {
  const visibleTemples = temples.filter((temple) => filter === "todos" || temple.categories.includes(filter));
  gallery.replaceChildren();
  emptyMessage.hidden = visibleTemples.length > 0;

  visibleTemples.forEach((temple) => {
    const card = document.createElement("article");
    card.className = "temple-card";
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    image.src = temple.image;
    image.alt = temple.alt;
    image.loading = "lazy";
    image.decoding = "async";
    image.width = 1200;
    image.height = 900;
    image.addEventListener("error", () => {
      image.alt = `${temple.alt} A foto não foi carregada; consulte a galeria oficial.`;
      image.removeAttribute("src");
      image.classList.add("image-unavailable");
    }, { once: true });

    const caption = document.createElement("figcaption");
    const heading = document.createElement("h2");
    heading.textContent = temple.name;
    const location = document.createElement("p");
    location.textContent = temple.place;
    caption.append(heading, location);
    figure.append(image, caption);
    card.append(figure);
    gallery.append(card);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    renderGallery(button.dataset.filter);
    menu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

menuToggle.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelector("#current-year").textContent = String(new Date().getFullYear());
const modified = new Date(document.lastModified);
document.querySelector("#last-modified").textContent = Number.isNaN(modified.getTime())
  ? "indisponível"
  : new Intl.DateTimeFormat("pt-BR", { dateStyle: "short", timeStyle: "short" }).format(modified);

renderGallery();


