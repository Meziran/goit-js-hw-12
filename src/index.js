import './styles.css';
import countryCardsSucces from '../src/templates/success.hbs';
import countryList from '../src/templates/error.hbs';
import debounce from 'lodash.debounce';
// import refs from './js/refs.js';
// import '@pnotify/core/dist/BrightTheme.css';
// import '@pnotify/core/dist/PNotify.css';
// import { alert } from '@pnotify/core';
import { showAlert, showError } from './pnofity';

const refs = {
  seachForm: document.querySelector('#name_input'),
  // для вдагого
  cardContainer: document.querySelector('.js-render-card'),
  // невдалого
  listContainer: document.querySelector('.country_cards_list'),
};

refs.seachForm.addEventListener('input', debounce(seachContry, 1000));

function seachContry(e) {
  e.preventDefault();

  const searchCountrys = refs.seachForm.value;
  featchCountrys(searchCountrys)
    .then(country => {
      if (country.length <= 2) {
        renderContryCards(country);
      } else if (2 < country.length <= 10) {
        renderContryList(country);
      }
      if (country.length > 10) {
        // errorContry();
        return showAlert(`Too many matches found.Please enter a more specific query!`);
      } else {
        return errorContry;
      }
    })
    // renderContryCards
    // .then(renderContryList)
    .catch(errorContry())
    .finally(() => (refs.seachForm.value = ''));
}

function featchCountrys(name) {
  return fetch(`https://restcountries.com/v2/name/${name}`).then(response => {
    return response.json();
  });
}

function renderContryCards(country) {
  const marckup = countryCardsSucces(country);
  // const marckup = country.map(countryCardsSucces).join('');
  refs.cardContainer.innerHTML = marckup;
}
function renderContryList(country) {
  const marckup = countryList(country);
  refs.cardContainer.innerHTML = marckup;
}
function errorContry(error) {
  showError('This country not found');
}
