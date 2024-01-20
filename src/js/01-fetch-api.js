// import '../css/common.css';
// import pokemonCardTpl from '../templates/pokemon-card.hbs';
import pokemonCardTpl from '../templates';

const refs = {
  cardContainer: document.querySelector('.js-card-container'),
};

fetchPokemon()
  .then(renderPokemonCard)
  .catch(error => {
    console.log(error);
  });

function fetchPokemon(pokemonId) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(response => {
    return response.json();
  });
}

function renderPokemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  refs.cardContainer.innerHTML = markup;
}
