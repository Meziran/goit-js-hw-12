function featchCountry(name) {
  return featch('https://restcountries.com/v2/name/${name}').then(response => {
    return response.json();
  });
}
