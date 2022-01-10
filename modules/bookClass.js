const inputBookTitle = document.getElementById('input__title');
const inputAuthor = document.getElementById('input__author');
// eslint-disable-next-line object-curly-newline

export default class BookClass {
  constructor() {
    this.list = localStorage.getItem('bookCollection')
      ? JSON.parse(localStorage.getItem('bookCollection'))
      : [];
  }

  addBook() {
    // Save user input to Array Object
    this.list.push({
      title: inputBookTitle.value,
      author: inputAuthor.value,
    });
    localStorage.setItem('bookCollection', JSON.stringify(this.list));

    // Refactoring
    inputBookTitle.value = '';
    inputAuthor.value = '';
  }

  removeBook(b) {
    // Parent Node with an ID of Book__title
    const title = b.querySelector('#book__title').innerText;
    b.remove();
    this.list = this.list.filter((book) => book.title !== title);

    localStorage.setItem('bookCollection', JSON.stringify(this.list));
  }
}
