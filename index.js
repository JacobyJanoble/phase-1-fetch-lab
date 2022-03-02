const booksUrl = 'https://anapioficeandfire.com/api/books'

function fetchBooks() {
  fetch(booksUrl)
  .then((resp) => resp.json())
  .then((titlesData) => renderBooks(titlesData.message))
};



function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.textContent = book;
    main.appendChild(h2);
  });

};

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});






