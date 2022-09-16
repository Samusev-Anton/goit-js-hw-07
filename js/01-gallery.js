import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imageConteiner = document.querySelector('.gallery');
const imageMarkup = createGallery(galleryItems);
imageConteiner.insertAdjacentHTML('beforeend', imageMarkup);

function createGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      rel="lightbox"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    
    }).join('');
}
// console.log(markup);
imageConteiner.addEventListener('click', onClickImage);

function onClickImage(evt) {
    evt.preventDefault()
    console.log(evt.target);
  const instance = 	basicLightbox.create(imageMarkup).show()
    
}