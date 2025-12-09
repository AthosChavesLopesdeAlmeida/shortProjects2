import { searchBook, getCoverURL } from "./api.js";

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
    };

    // Cria um parágrafo para cada livro
    data.docs.forEach(book => {
      const bookOption = document.createElement('p');
      
      bookOption.innerHTML = `Título: ${book.title || '—'} - Autor: ${book.author_name ? book.author_name[0] : 'Desconhecido'}`;
      bookOption.dataset.book = JSON.stringify(book);


      list.appendChild(bookOption);

      bookOption.addEventListener('click', () => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('bookElement');

        const coverURL = getCoverURL(book);
        
        bookElement.innerHTML = `
          ${coverURL ? `<img src="${coverURL}" alt="Capa do livro">` : ""}
          <div>
            <p>Título: ${book.title || '—'}</p>
            <p>Autor: ${book.author_name ? book.author_name[0] : 'Desconhecido'}</p>
            <button class = "delBtn">Delete</button>
          </div>`;
        
        container.appendChild(bookElement);

        const delBtn = bookElement.querySelector('.delBtn');
        delBtn.addEventListener('click', (event) => {
          event.stopPropagation()
          bookElement.remove();
        });
      });
    });
  } catch (err) {
    console.error("Erro:", err);
  };
};