// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// console.log(galleryItems);

// Завдання 2 -------------------------------------------

import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
// --- ----нашла ссылку на элемент div.gallery ------------
const galleryListElem = document.querySelector('.gallery');
console.log(galleryListElem);
// --------------создаю разметку по шаблону (шаблонная строка)----------
const listImageElement = createListImageElement(galleryItems);
function createListImageElement(galleryItems) {

     return galleryItems.map(galleryItem => ` <a class="gallery__item" href="${galleryItem.original}">
  <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
</a> `).join("");
}
// console.log(listImageElement);

// --------------рендер разметки (2 способа)-------------
// galleryListElem.innerHTML = listImageElements;
galleryListElem.insertAdjacentHTML("beforeend", listImageElement)

// --------- использую библиотеку симпллайтбокс как обработчик событий по клику на изображения-----------------
 let gallery = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
    })

// ---------ЭТО ВСЕ НЕ НУЖНО----------------------
// -------------------вешаю слушатель событий на див с создаными элементами-----------
// galleryListElem.addEventListener('click', onGalleryItemClick)
// // ------------колбек - функция - обработчик событый --------
// function onGalleryItemClick(event) {
//   // -----------запрет для браузера на действия по умолчанию (чтоб не открывал картинку по ссылке )------------
//   event.preventDefault();
//   // console.log(event.target);
//   // console.log(event.target.nodeName);
//   // --------проверяю куда попадает мой клик - если не в картинку, то выходим и ничего не делаем)-------------
//   if (event.target.nodeName != 'IMG') {
//     return
//   }
//   else {
//     console.log("открываем библиотеку");
//     //     // -------иначе, используя библиотеку симпллайтбокс, открываем оригинальное изображение в модальном окне-----------
//     let gallery = new SimpleLightbox('.gallery a', {
//       captionsData: 'alt',
//       captionPosition: 'bottom',
//       captionDelay: 250,
//     })
//     console.log(event.target);
//     console.log(gallery);
//   }
// }



//  gallery.on ('show.simplelightbox', function () {
// // сделай что-нибудь…
//  event.preventDefault();
// });




