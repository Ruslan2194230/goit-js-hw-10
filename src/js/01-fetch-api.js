// import '../css/common.css';
// import pokemonCardTpl from '../templates/pokemon-card.hbs';
// import pokemonCardTpl from '../templates/';

const refs = {
  cardContainer: document.querySelector('.js-card-container'),
  searchFrom: document.querySelector('.js-search-form'),
};

refs.searchFrom.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;

  fetchPokemon(searchQuery)
    .then(renderPokemonCard)
    .catch(error => {
      console.log(error);
    })
    .finally(() => form.reset());
}

function fetchPokemon(pokemonId) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(
    response => {
      return response.json();
    }
  );
}

function renderPokemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  refs.cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert('Ups chto to poslo ne tak')
}