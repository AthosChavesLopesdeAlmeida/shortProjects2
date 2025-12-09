import { createPokemon, checkAnswer } from "./pokeUi.js";

const container = document.querySelector('#pokemonImg');
const btn = document.querySelector('#submit');
const input = document.querySelector('#pokemonName')

document.addEventListener('DOMContentLoaded', () => {
  createPokemon(container);
})

btn.addEventListener('click', () => {
  checkAnswer(container, input)
})