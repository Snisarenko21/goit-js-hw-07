import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const galleryListEl = document.querySelector('.gallery');
console.log(galleryListEl);

const createListImageEl = galleryItems.map(galleryItem =>
`<a class="gallery__item" href="${galleryItem.original}">
<img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}"/>
</a>`)
.join("");


galleryListEl.insertAdjacentHTML("beforeend", createListImageEl);

let lightbox = new SimpleLightbox('.gallery a', {});

lightbox.options.captionsData = `alt`;
lightbox.options.captionPosition = 'bottom';
lightbox.options.captionDelay = 250;





