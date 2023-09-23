import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
let instance = null;
console.log(galleryItems);
galleryItems.forEach((item) => {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");
  galleryItem.innerHTML = `<a class="gallery__link" href="${item.original}">
      <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
      />
      </a>`;
  gallery.append(galleryItem);

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
gallery.addEventListener("click", openImageInLightbox);

// Funcția pentru gestionarea click-ului pe elementele galeriei
function openImageInLightbox(event) {
  const clickedOn = event.target;

  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault(); // Oprirea comportamentului implicit de redirectionare
  instance = basicLightbox.create(
    `<img width="1400" height="900" src="${clickedOn.dataset.source}" />`,
    {
      onShow: (instance) => console.log("onShow", instance),
      onClose: (instance) => console.log("onClose", instance),
    }
  );

  instance.show((instance) => console.log("finished show()", instance));

  setTimeout(() => {
    instance.close((instance) => console.log("finished close()", instance));
  }, 3000);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && instance) {
    instance.close((instance) => console.log("finished close()", instance));
    instance = null;
  }
});
