import '../styles/reset.css';
import '../styles/index.scss';

const elements = document.getElementsByClassName('item-favourite-icon');

const toggleClass = (event) => {
  event.preventDefault();
  const classList = event.currentTarget.classList;
  classList.contains('item-favourite-icon--active') ?
    classList.remove('item-favourite-icon--active') :
    classList.add('item-favourite-icon--active');
};

Array.from(elements).forEach((element) => {
  element.addEventListener('click', toggleClass, false);
});
