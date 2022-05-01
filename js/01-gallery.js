import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const refs = document.querySelector('.gallery');

const createListImageEl = galleryItems.map(galleryItem =>
`<div class="gallery__item">
<a class="gallery__link" href="${galleryItem.original}">
<img class="gallery__image" src = "${galleryItem.preview}" data-source="${galleryItem.original}" alt = "${galleryItem.description}"/>
</a></div>`)
.join("");

// --------------рендер разметки-------------

refs.insertAdjacentHTML("beforeend", createListImageEl);

// -------------------вешаю слушатель событий на див с создаными элементами-----------
refs.addEventListener('click', onGalleryItemsClick);
 
// ------------колбек - функция - обработчик событый -------- 
function onGalleryItemsClick(event) {
  // -----------запрет для браузера на действия по умолчанию (чтоб не открывал картинку по ссылке )------------
  event.preventDefault();
  
  // --------проверяю куда попадает мой клик - если не в картинку, то выходим и ничего не делаем)-------------
  if (event.target.nodeName != 'IMG') {
    return;
  } // -------иначе, используя библиотеку бейсиклайтбокс, открываем оригинальное изображение в модальном окне-----------
  else {
    const instance = basicLightbox.create(`<img width="1400" height="900" src= "${event.target.dataset.source}">`, {

      // ---добавляю опции при открытом модальном окне-----------
      onShow: (instance) => {
        // ---колбек-функция -обработчик события ---
        instance.onInstanceclick = function (e) {
         
          if (e.code === "Escape") {
            instance.close();
          }
        }
        // ---добавляю слушательсобытий клавиатуры на кнопку эскейп при открытом модальном окне-----------
        document.addEventListener("keydown", instance.onInstanceclick);
      },
      // -------снимаю слушателя ссобытий после закрытия модального окна------
      onClose: (instance) => {
        document.removeEventListener("keydown", instance.onInstanceclick);
      }
    })
.show();
  }
}
