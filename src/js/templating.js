import itemsTemplate from '../templates/menu-items.hbs';
import menu from '../menu.json';

const menuRef = document.querySelector('.js-menu');
const marcup = itemsTemplate(menu);

menuRef.insertAdjacentHTML('beforeend', marcup);