const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryContainer = document.querySelector('.gallery');

const addImgColection = images.map
  (image => `<li> <img class='img-gallery' src='${image.url}' alt='${image.alt}'width = 200 heigth = 200 ></li>`)
  .join('');


galleryContainer.insertAdjacentHTML('afterbegin', addImgColection);

galleryContainer.setAttribute('style', 'list-style-type: none; display:flex; ');




