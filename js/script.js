//IIFE Implementation
let pokemonRepository = (function () {

  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modalContainer = document.querySelector('#modal-container');

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "detailsUrl"
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
     button.addEventListener('click', function(event) {
      showDetails(pokemon);
    });
  }


    function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
          console.log(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }
  
    function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      }).catch(function (e) {
        console.error(e);
        
      });
    }

function add(pokemon) {
  pokemonList.push(pokemon);
};

  
  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  function showModal(pokemon) {
     modalContainer.innerHTML = '';

     let modal = document.createElement('div');
     modal.classList.add('modal');
     // Close modal
     let closeButtonElement = document.createElement('button');
     closeButtonElement.classList.add('modal-close');
     closeButtonElement.innerText = 'Close';
     closeButtonElement.addEventListener('click', hideModal);

     let titleElement = document.createElement('h2');
     titleElement.innerText = pokemon.name;

     let contentElement = document.createElement('p');
     contentElement.innerText = 'Height: ' + pokemon.height;

     let imageElement = document.createElement('img');
     imageElement.src = pokemon.imageUrl;
     

     modal.appendChild(closeButtonElement);
     modal.appendChild(titleElement);
     modal.appendChild(contentElement);
     modal.appendChild(imageElement);
     modalContainer.appendChild(modal);

     modalContainer.classList.add('is-visible');
   }

   function hideModal() {
     modalContainer.classList.remove('is-visible');
   }

   // When ESC is pressed.
   window.addEventListener('keydown', (e) => {
     if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
       hideModal();
     }
   });

   modalContainer.addEventListener('click', (e) => {
     let target = e.target;
     if (target === modalContainer) {
       hideModal();
     }
   });


// fetch('https://pokeapi.co/api/v2/pokemon/').then(function (response) {
//   return response.json();
// }).then(function (pokemonList) {
//   console.log(pokemonList);
// }).catch(function () {
// });

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails

  };
})();

// pokemonRepository.add({ name: "Squirtle", height: 1, types: ["water"] });

pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
});
