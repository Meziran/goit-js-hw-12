import './styles.css';
import countryCardsSuccess from '../src/templates/success.hbs';
import debounce from 'lodash.debounce';
// import refs from './js/refs.js';
const refs = {
  seachForm: document.querySelector('.seach_country'),
  cardConteiner: document.querySelector('.js-render-card'),
};

refs.seachForm.addEventListener('input', debounce(seachContry, 500));

function seachContry(e) {
  e.preventDefault();

  const searchCountryss = refs.seachForm.value;
  featchCountry(searchCountryss)
    .then(renderContryCards)
    .catch(error => console.log(error));
  // .finally(() => form.reset());
}

function featchCountry(name) {
  fetch(`https://restcountries.com/v3.1/name/${name}`).then(response => {
    return response.json();
  });
}

function renderContryCards(country) {
  const marckup = countryCardsSuccess(country);
  refs.cardConteiner.innerHTML = marckup;
}
