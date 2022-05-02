import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const refs = document.querySelector(".gallery");

const listEl = createListEl(galleryItems);

function createListEl(galleryItems) {
  return galleryItems.map(galleryItem =>
    `<div class="gallery__item">
    <a class="gallery__link" href="${galleryItem.original}">
    <img class="gallery__image" src = "${galleryItem.preview}" data-source="${galleryItem.original}" alt = "${galleryItem.description}"/>
    </a>
    </div>`)
    .join("");
}
refs.insertAdjacentHTML("beforeend", listEl);

refs.addEventListener(`click`, (event)=> {

event.preventDefault(); 

const imgElement = event.target.classList.contains(`gallery__image`)
if(!imgElement){
  return
}

const instance = basicLightbox.create(`<img src="${event.target.dataset.source}"/>`).show();

});

