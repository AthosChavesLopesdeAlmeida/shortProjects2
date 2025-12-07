import { searchBook } from "./api.js";

export async function createOption(inputVal, list, container) {
  // Limpa a lista
  list.innerHTML = '';

  // Se o input está vazio, nada acontece
  if (!inputVal.trim()) return;

  try {
    const data = await searchBook(inputVal);

    // Se o array de data não for um array, dá erro
    if (!Array.isArray(data.docs)) {
      console.error("Resposta inválida", data);
      return;
    }

    // Cria um parágrafo para cada livro
    data.docs.forEach(book => {
      const bookOption = document.createElement('p');
      
      bookOption.innerHTML = `Título: ${book.title || '—'} - Autor: ${book.author_name ? book.author_name[0] : 'Desconhecido'}`;
      bookOption.dataset.book = JSON.stringify(book);


      list.appendChild(bookOption);

      bookOption.addEventListener('click', () => {
        console.log('livro criado');
        const bookElement = document.createElement('div');
        bookElement.innerHTML = `Título: ${book.title || '—'} - Autor: ${book.author_name ? book.author_name[0] : 'Desconhecido'}`;
        bookElement.classList.add('bookElement');

        container.appendChild(bookElement);
      });
    });
  } catch (err) {
    console.error("Erro:", err);
  }
};

// Função que cria o elemento do livro escolhido
export function createBookElement(bookData, main) {
  const bookElement = document.createElement('div');
  bookElement.classList.add('bookElement');


  // Aqui usa diretamente os dados do livro
  bookElement.innerHTML = `
     <h3>${bookData.title}</h3>
     <p>Autor: ${bookData.author_name}</p>
     <button id = 'deleteBtn'>Excluir</button>`;

  main.appendChild(bookElement);

  // Lógica de deletar 
  bookElement.querySelector('#deleteBtn').addEventListener('click', () => {
    bookElement.remove();
  })
};