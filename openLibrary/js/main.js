import { searchBook } from "./api";
import { createBookElement, createOption } from "./ui";

const input = document.getElementById('searchBar');
const main = document.getElementById('section');
const list = document.getElementById('options');

input.addEventListener('change', () =>  {
  createOption()
})