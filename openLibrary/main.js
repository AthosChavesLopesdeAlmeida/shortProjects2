import { createOption } from "./ui.js";

const searchBar = document.querySelector('#searchBar');
const list = document.querySelector('#options');
const container = document.querySelector('#section')
let debounce;

if (searchBar && list) {
  searchBar.addEventListener('input', () => {
    clearTimeout(debounce);

    debounce = setTimeout(() => {
      createOption(searchBar.value, list, container);
    }, 300);
  });
}

