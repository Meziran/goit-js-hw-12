
import './styles.css';
import menuEl from './menu.json';
import MenuTmp from './templates/gallery.hbs';

const refs = {
    body: document.querySelector('body'),
    switcher: document.querySelector('#theme-switch-toggle'),
    menu: document.querySelector('.js-menu'),
}; 
// MENU
const menuMarkUp = MenuTmp([...menuEl]);
refs.menu.insertAdjacentHTML('beforeend', menuMarkUp);
// /MENU

// THEMS
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
 
refs.switcher.addEventListener ('change', setClasslist);

function switchThem (q, e) {
    refs.body.classList.add(q);
    refs.body.classList.remove(e);
}

function setClasslist() {
    const chek = refs.switcher.checked;
    if(chek) {
        return switchThem(Theme.DARK, Theme.LIGHT)
    } else {
        switchThem (Theme.LIGHT, Theme.DARK)
    }
};

// /THEMS


// LocalStorage
refs.switcher.addEventListener('change', setLocalStorage);

function setLocalStorage() {
    const check = refs.switcher.checked;
    if (check) {
      localStorage.setItem('theme', Theme.DARK);
    } else {
      localStorage.removeItem('theme');
      localStorage.setItem('theme', Theme.LIGHT);
    }
  }
  
  const localTheme = localStorage.getItem('theme');
  if (localTheme === Theme.DARK) {
    refs.body.classList.add(Theme.DARK);
    refs.switcher.checked = true;
  }
  // /LocalStorage