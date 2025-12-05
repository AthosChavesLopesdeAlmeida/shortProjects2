import { searchBook } from "./api";
import { createBookElement, createOption } from "./ui";

const input = document.getElementById('searchBar');
const main = document.getElementById('section');
const list = document.getElementById('options');

// Event listener que dispara enquanto o usuário digita
input.addEventListener('input', () => {
  createOption(input.value, list);
});

// Event listener que acontece quando a opção é clicada
