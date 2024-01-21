const url = 'https://api.thecatapi.com/v1';
const api_key =
  'live_KntuZdtnNFJZaxJY14OeBY8Nt8L3FzvSiYh0fdzUtF9H8IYUuwwU1dKW4fp39JUS';

export function fetchBreeds() {
  return fetch(`${url}/breeds?api_key=${api_key}`)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });
}

export function fetchCatByBreed(breedId) {
  return fetch(`${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });
}
