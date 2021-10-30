import './styles.css';
import countryCardsSucces from '../src/templates/success.hbs';
import debounce from 'lodash.debounce';
// import refs from './js/refs.js';
const refs = {
  seachForm: document.querySelector('#name_input'),
  // для вдагого
  cardContainer: document.querySelector('.js-render-card'),
  // невдалого
  listContainer: document.querySelector('.country_cards_list'),
};

refs.seachForm.addEventListener('input', debounce(seachContry, 500));

function seachContry(e) {
  e.preventDefault();

  const searchCountrys = refs.seachForm.value;
  featchCountrys(searchCountrys)
    .then(renderContryCards)
    .catch(error => console.log(error))
    .finally(() => form.reset());
}

function featchCountrys(country) {
  return fetch(`https://restcountries.com/v2/name/${country}`).then(response => {
    return response.json();
  });
}

function renderContryCards(country) {
  const marckup = countryCardsSucces(country);
  // const marckup = country.map(countryCardsSucces).join('');
  refs.cardContainer.innerHTML = marckup;
}
// function renderContryCards(country) {
//   const markup = country.map(countryCardsSucces).join('');
//   refs.cardContainer.innerHTML = markup;
// }

// peru
