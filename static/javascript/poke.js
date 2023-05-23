const h1Element = document.querySelector('h1');

const pokeName = h1Element.textContent.toLowerCase();

console.log(pokeName);

const pokeContainer = document.querySelector(`#container`);


function createPokeCard(pokemon) {
    // console.log(pokemon.data);
    const pokeCard = document.createElement(`section`);
    pokeCard.classList.add(`pokemon`);
    pokeContainer.append(pokeCard);

    const statsList = document.createElement('ul'); // Create a <ul> element for the stats
    statsList.classList.add('stats-list');

    pokemon.data.stats.forEach(function(stat) {
        const statItem = document.createElement('li'); // Create a <li> element for each stat
        statItem.textContent = `${stat.stat.name}: ${stat.base_stat}`;
        statsList.append(statItem); // Add the stat item to the stats list
    });

    pokeCard.innerHTML = `
    <div class="img-container">
        <img src="${pokemon.data.sprites.front_shiny}" alt="${pokemon.data.name}">
    </div>
    <h3 class="name">${pokemon.data.name.toUpperCase()}</h3>
    <p>Stats:</p>
    `;
    
    pokeCard.appendChild(statsList); // Add the stats list to the pokeCard
}


async function getPokemonData() {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
        const pokemonData = await axios.get(url);
        createPokeCard(pokemonData);
    } catch (error) {
        console.error('Error while fetching Pokémon data:', error);
    }
}

getPokemonData()