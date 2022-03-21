const booksUrl = 'https://anapioficeandfire.com/api/books'

function fetchBooks() {
  return fetch(booksUrl)
  .then((resp) => resp.json())
  .then((titlesData) => renderBooks(titlesData))
};



function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach((book) => {
    const h2 = document.createElement('h2');
    h2.textContent = book.name;
    main.appendChild(h2);
  });
};


document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});






