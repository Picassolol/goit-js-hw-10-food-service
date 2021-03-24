import itemsTamplate from '../tamplates/menu.hbs';
import dishes from '../menu.json';

const listItems = itemsTamplate(dishes);

const menuListRef = document.querySelector('.js-menu');

menuListRef.insertAdjacentHTML('beforeend', listItems);