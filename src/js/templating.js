import itemsTemplate from '../templates/menu-items.hbs';
import menu from '../menu.json';

const menuRef = document.querySelector('.js-menu');

const marcup = itemsTemplate(menu);

console.log(menuRef);

menuRef.insertAdjacentHTML('beforeend', marcup);