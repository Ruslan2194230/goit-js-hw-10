import './style.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const url = 'https://api.thecatapi.com/v1';
const api_ley =
  'live_KntuZdtnNFJZaxJY14OeBY8Nt8L3FzvSiYh0fdzUtF9H8IYUuwwU1dKW4fp39JUS';

export function fetchBreeds() {
  return fetch(`${url}/breeds?api_key=${api_ley}`).then(response => {
    return response.json();
  });
}
export function fetchCatByBreed(breedId) {
  return fetch(
    `${url}/images/search?api_key=${api_ley}&breed_ids=${breedId}`
  ).then(response => {
    response.json();
  });
}

const ref = {
  selector: document.querySelector('.breed-select'),
  divCatInfo: document.querySelector('.cat-info'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
};

const { selector, divCatInfo, loader, error } = ref;
console.log(loader);

loader.classList.replace('loader','is-hidden');
error.classList.add('is-hidden');
divCatInfo.classList.add('is-hidden');

let arrBreedsId = [];
fetchBreeds()
  .then(data => {
    data.forEach(element => {
      arrBreedsId.push({ text: element.name, value: element.id });
      new SlimSelect({
        select: selector,
        data: arrBreedsId,
      });
    });
  })
  .catch();

selector.addEventListener('change',onSelectedBreed);

function onSelectedBreed(event) {
  loader.classlist.replace('is-hidden', 'loader');
  selector.classlist.add('is-hidden');
  divCatInfo.classlist.add('is-hidden');

  const breedId = event.currentTarget.value;
  fetchCatByBreed(breedId).then(data => {
    loader.classlist.replace('loader','is-hidden')
    selector.classlist.remove('is-hidden')
    const{url,breeds} = data[0];
    console.log();
  })
}
