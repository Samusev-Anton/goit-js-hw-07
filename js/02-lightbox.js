import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imageConteiner = document.querySelector('.gallery');
const imageMarkup = createGallery(galleryItems);
imageConteiner.insertAdjacentHTML('beforeend', imageMarkup);

function createGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <a class="gallery__item" href="${original}" data-caption="${description}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    
    }).join('');
}
// console.log(markup);
imageConteiner.addEventListener('click', onClickImage);
const lightbox = new SimpleLightbox('.gallery a', {
    // captions: true,
    // // captionSelector: 'img',
    // // captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 250
});
// SimpleLightbox.default = {
//     showCaption: true, captionAttribute: 'alt',
// }
function onClickImage(evt) {
    evt.preventDefault()
    if (evt.target.nodeName !== "IMG") {
        return;
    }
    const clickImg = evt.target.dataset.source
    

}