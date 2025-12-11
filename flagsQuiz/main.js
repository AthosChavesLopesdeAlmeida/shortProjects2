import { createFlag, checkAnswer } from "./ui.js";

const input = document.querySelector('#inp');
const btn = document.querySelector('#confirmar');
const conteiner = document.querySelector('#conteiner');
const h1 = document.querySelector('#h1');

document.addEventListener('DOMContentLoaded', () => {
  createFlag(conteiner, h1)
})

btn.addEventListener('click', () => {
  checkAnswer(conteiner, input, h1)
})