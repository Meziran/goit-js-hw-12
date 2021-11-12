export default class API {
  constructor() {
    this.name = '';
  }
  featchCountrys() {
    return fetch(`https://restcountries.com/v2/name/${this.name}`).then(response => {
      return response.json();
    });
  }

  get input() {
    return this.name;
  }
}
