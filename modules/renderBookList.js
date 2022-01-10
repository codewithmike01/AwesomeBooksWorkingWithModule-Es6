import BookClass from './bookClass.js';

const bookItems = document.getElementById('book__items');
const book = document.getElementById('book__container');
const singleBook = document.createElement('div');
singleBook.classList.add('book');

export const BookInventory = new BookClass();

export default function render() {
  book.innerHTML = '';

  BookInventory.list.forEach((currentBook) => {
    singleBook.innerHTML = `
    <p id="book__aurthor">"<span id="book__title">${currentBook.title}</span>" ${currentBook.author}</p>
    <button type="button" class="remove__button">Remove</button>`;
    book.appendChild(singleBook.cloneNode(true));
    bookItems.appendChild(book);
  });

  // Define the remove button after Creation
  const removeButton = Array.from(
    // eslint-disable-next-line comma-dangle
    document.getElementsByClassName('remove__button')
  );
  Object.keys(removeButton).forEach((removeKey) => {
    const btn = removeButton[removeKey];
    btn.addEventListener('click', () => {
      BookInventory.removeBook(btn.parentNode);
    });
  }, false);
}

export { bookItems, book };
