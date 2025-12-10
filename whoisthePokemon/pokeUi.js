import { returnPokemon } from "./pokeApi.js";

let currentPokemon = null;

export async function createPokemon(container) {
  container.innerHTML = '';

  const pokemon = await returnPokemon();
  container.innerHTML = `<img src = ${pokemon.image}>`;

  const img = container.querySelector('img');


  currentPokemon = pokemon;
};

export function checkAnswer(container, input) {
  if (input.value === '') {
    return
  };

  const answer = input.value.trim().toLowerCase();
  const correct = currentPokemon.name.toLowerCase();

  if (answer === correct) {

    input.style.border = '1px solid green';
    input.value = '';



    setTimeout(() => {
      createPokemon(container);
    }, 1000);
  } else {
    input.style.border = '1px solid red';
    input.innerHTML = '';
  };
};