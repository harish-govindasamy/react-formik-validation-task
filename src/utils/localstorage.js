export const getAuthorsFromLocalStorage = () => {
  const authors = localStorage.getItem("authors");
  return authors ? JSON.parse(authors) : [];
};

export const saveAuthorsToLocalStorage = (authors) => {
  localStorage.setItem("authors", JSON.stringify(authors));
};

export const getBooksFromLocalStorage = () => {
  const books = localStorage.getItem("books");
  return books ? JSON.parse(books) : [];
};

export const saveBooksToLocalStorage = (books) => {
  localStorage.setItem("books", JSON.stringify(books));
};
