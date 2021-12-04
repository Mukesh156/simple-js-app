//IIFE Implementation
let pokemonRepository = (function () {

  let pokemonList = [
      {
        name: 'Bulbasaur',
        height: 0.7,
        type: ['grass', 'poison']
      },
      {
        name: 'Beedrill',
        height: 1,
        type: ['bug']
      },
      {
        name: 'Pikachu',
        height: 0.4,
        type: ['electric']
      },
    ];
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function getAll() {
    return pokemonList;
  }
  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);

    //Event listener
    button.addEventListener('click', function () {
      showDetails(pokemon);
    });
  }

  function showDetails (pokemon){
    console.log(pokemon.name);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

pokemonRepository.add({ name: "Squirtle", height: 1, types: ["water"] });

console.log(pokemonRepository.getAll());



pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
