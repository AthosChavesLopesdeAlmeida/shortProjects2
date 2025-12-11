import { getCountryData } from "./api.js";

let currentCountry = null;

export async function createFlag(container, h1) {
  const country = await getCountryData();
  container.innerHTML = `<img src = "${country.flag}">`

  currentCountry = country;
  h1.innerHTML = 'Que país é esse?';
  input.style.border = 'none'
}

export function checkAnswer(container, input, h1) {
  const answer = input.value.trim().toLowerCase();
  const correct = currentCountry.name.toLowerCase()

  if(answer === correct) {
    h1.innerHTML = 'Acertou!';
    input.style.border = '1px solid green'
    input.value = ''

    setTimeout(() => {
      createFlag(container, h1)
    }, 500)
  } else {
    h1.innerHTML = 'Errou';
    input.style.border = '1px solid red';
    input.value = ''
  }
}