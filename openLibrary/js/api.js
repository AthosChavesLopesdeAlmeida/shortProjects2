// Função que busca os livro na API com os dados passados
export async function searchBook(inputVal) {
  // Usa o valor do input para pesquisar na API qualquer livro que corresponda com o valor do input
  const url  = `https://openlibrary.org/search.json?q=${encodeURIComponent(inputVal)}`;

  const response = await fetch(url);
  const data = await response.json();

  return data.docs
};

