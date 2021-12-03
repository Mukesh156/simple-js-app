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

  function getAll() {
    return pokemonList;
  }
  function add(pokemon) {
  pokemonList.push(pokemon);
}
    return {
      getAll: getAll,
      add: add
    };
  })();

  document.write ( pokemonRepository. getAll());


  pokemonRepository.getAll().forEach(function(pokemon){
       pokemonRepository.add(pokemon);
    });
    //


// pokemonList.forEach(function(pokemon){
//   document.write('<li>' + pokemone.name + ' ' + pokemon.height + ' ' + pokemon.type);
// });





// for (let i=0; i < pokemonList.length; i++) {
//   document.write('<li>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')');
//   if (pokemonList[i].height >= 1) {
//     document.write('- Wow! That\'s big!');
//   }  else if (pokemonList[i].height < 0.7 && pokemonList[i].height > 0.1 ) {
//       document.write('- Oh! That\'s small!');
//   }else {
//    document.write('- That\'s average!')
//   }
// }
