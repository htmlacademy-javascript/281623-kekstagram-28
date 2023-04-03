import { getPictures } from './create.js';
import { picturesContainer } from './template.js';
import { isEscapeKey } from './get-random-integer.js';

const bigImageElement = document.querySelector('.big-picture');
const bigImageCansel = document.querySelector('.big-picture__cancel');


const onBigImageKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigImageElement.classList.add('hidden');
  }
};


/*const renderBigPictureDetails = ({url, likes, description}) => {
  bigImageElement.querySelector('.big-picture__img img').src = url;
  bigImageElement.querySelector('.big-picture__img img').alt = description;
  bigImageElement.querySelector('.likes-count').textContent = likes;
  bigImageElement.querySelector('.social__caption').textContent = description;
};*/


const openImagePreview = (evt) => {
  if (evt.target.closest('.picture')) {
    evt.preventDefault();
    bigImageElement.classList.remove('hidden');
    document.body.classList.add('modal-open');
    bigImageElement.querySelector('.big-picture__img img').src = evt.target.src;
    console.log(document.querySelector('[data-picture-id]'));
    const pictureDetails = document.querySelector('[data-picture-id]');
    console.log(document.querySelector('.social__caption').textContent);
    pictureDetails = document.querySelector('.social__caption').textContent = evt.target.dataset.description;
    console.log(bigImageElement.querySelector('.likes-count').textContent);
    pictureDetails = bigImageElement.querySelector('.likes-count').textContent = evt.target.likes;
  }
  document.addEventListener('keydown', onBigImageKeydown);
};


picturesContainer.addEventListener ('click', openImagePreview);

bigImageCansel.addEventListener ('click', () => {
  bigImageElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onBigImageKeydown);
});

