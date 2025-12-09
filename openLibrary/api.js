export async function searchBook(inputVal) {
  const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(inputVal)}&limit=50&has_fulltext=true`;

  const response = await fetch(url);
  const data = await response.json();

  // Filtra livros de universidades (especialmente Toronto) e limita a 7
  data.docs = data.docs
    .filter(book => {
      if (!book.ia || book.ia.length === 0) return false;
      
      // Verifica se foi contribuído por universidades
      const contributor = (book.ia_collection_s || '').toLowerCase();
      return contributor.includes('university') || 
             contributor.includes('toronto') ||
             contributor.includes('harvard') ||
             contributor.includes('oxford') ||
             contributor.includes('mit');
    })
    .slice(0, 7);

  return data;
};

export function getCoverURL(book) {

  // 1. A mais comum no search.json
  if (book.cover_i) {
    return `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
  }

  // 2. Muito comum em livros digitalizados por universidades
  if (book.cover_edition_key) {
    return `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`;
  }

  // 3. Também pode aparecer
  if (book.cover_id) {
    return `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`;
  }

  // 4. Livro sem capa
  return null;
};