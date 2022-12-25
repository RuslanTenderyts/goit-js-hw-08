// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);



const imgGallery = document.querySelector('.gallery');
const imgsMarcup = createImageItems(galleryItems);

imgGallery.insertAdjacentHTML('beforeend', imgsMarcup);


function createImageItems(gallery) {
    return gallery
    .map(({preview,original,description}) => {
        return `
            <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>`
        }).join('');
};
  
  let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250,
})

