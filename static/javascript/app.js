const pokeContainer = document.querySelector(`#container`);
const numbOfPokemon = 151;

function createPokeCard(pokemon) {
    const pokeCard = document.createElement(`section`);
    pokeCard.classList.add(`pokemon`);
    
    const pokemonName = pokemon.data.name.toUpperCase();
  
    // Create an anchor tag as the container link and set the href attribute to the Pokemon page URL
    const containerLink = document.createElement('a');
    containerLink.href = `pokemon/${pokemonName}`; 
  
    const cardContent = `
      <div class="img-container">
        <img src="${pokemon.data.sprites.front_shiny}" alt="${pokemon.data.name}">
      </div>
      <h3 class="name">${pokemonName}</h3>
    `;
    
    // Set the innerHTML of the container link to the card content
    containerLink.innerHTML = cardContent;
  
    pokeCard.appendChild(containerLink);
    pokeContainer.appendChild(pokeCard);
  }

async function getPokemonData(id){
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const pokemonData = await axios.get(url);
    createPokeCard(pokemonData);
}

async function getPokemon(i){
    for(i=1; i < numbOfPokemon; i++){
        await getPokemonData(i);
    }
};

getPokemon();