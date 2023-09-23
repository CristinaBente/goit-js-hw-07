import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);
const gallery = document.querySelector(".gallery");
let Lightbox = null;

console.log(galleryItems);
galleryItems.forEach((item) => {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");
  galleryItem.innerHTML = `<a class="gallery__link" href="${item.original}">
      <img
          class="gallery__image"
          src="${item.preview}"
          
          alt="${item.description}"
      />
      </a>`;
  gallery.appendChild(galleryItem);
  gallery.addEventListener("click", openLightbox);
  /* const galleryLink = document.createElement("a");
    galleryLink.classList.add("gallery__link");
    galleryLink.href = item.largeImage;
    galleryLink.setAttribute("data-source", item.largeImage);

    const galleryImage = document.createElement("img");
    galleryImage.classList.add("gallery__image");
    galleryImage.src = item.smallImage;
    galleryImage.alt = item.alt;

    galleryLink.appendChild(galleryImage);
    galleryItem.appendChild(galleryLink);
    gallery.appendChild(galleryItem);*/
});

// Funcția pentru gestionarea click-ului pe elementele galeriei
function openLightbox(event) {
  const clickedOn = event.target;

  if (event.target.nodeName !== "IMG") {
    return;
  }

  Lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionDelay: 250,
    captionSelector: "img",
    captionType: "attr",
    captionsData: "alt",
  });

  Lightbox.open();
}
