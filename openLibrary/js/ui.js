import { searchBook } from "./api";

//Função que cria as opções no input de acordo com o resultado
export async function createOption() {
  // Chama a função de busca
  const books = await searchBook(input.value);

  books.forEach(book => {
    const bookOption = document.createElement('option');
    bookOption.textContent = `Título: ${data.title} - Autor: ${data.author_name}`
    bookOption.classList.add('bookOption');
    list.appendChild(bookOption);
  });
}

// Função que cria o elemento do livro escolhido
export function createBookElement(bookData) {
  const bookElement = document.createElement('div');
  bookElement.classList.add('bookElement');


  // Aqui usa diretamente os dados do livro
  bookElement.innerHTML = `
     <h3>${bookData.title}</h3>
     <p>Autor: ${bookData.author_name}</p>
     <button id = 'deleteBtn'>Excluir</button>`;

  main.appendChild(bookElement);

  // Lógica de deletar 
  bookElement.querySelector('deleteBtn').addEventListener('click', () => {
    bookElement.remove
  })
}
