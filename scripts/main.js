import Books from './Books.js';
import BookStorage from './BookStorage.js';

const btnSubmit = document.querySelector('.submit');
let bookid = 0;
let author = ' ';
let title = ' ';
let bookListObj = [];
let deserializedBookList;

class UI {
  static getBookList() {
    let books = ' ';
    deserializedBookList = BookStorage.getData('bookList');

    deserializedBookList.forEach((value) => {
      books += `
              <div class="book" data-id="${value.bookid}">
                <h2 class="title">${value.title}
                  <span class="author">${value.author}</span>
                </h2>
                <button class="btn btn-remove" type="button">Remove</button>
              </div>
                `;
    });

    const booklist = document.querySelector('.book-display');
    booklist.innerHTML = books;
  }

  static addToList(bookObj) {
    bookListObj.push(bookObj);
    BookStorage.saveData(bookListObj);
    UI.getBookList();
  }

  static removeFromList(e) {
    const currentDiv = e.target.parentElement;
    currentDiv.parentElement.removeChild(currentDiv);

    const bookId = parseInt(currentDiv.dataset.id, 10);
    const bookList = BookStorage.getData('bookList');
    const temp = bookList.filter((item) => item.bookid !== bookId);

    BookStorage.saveData(temp);
    UI.getBookList();
  }
}

// Submit Data Event Handler
btnSubmit.addEventListener('click', () => {
  title = document.querySelector('.form-title').value;
  author = document.querySelector('.form-author').value;

  // const getUI = new UI();
  bookListObj = BookStorage.getData('bookList');

  if (bookListObj !== null && bookListObj.length > 0) {
    const lastObject = bookListObj[bookListObj.length - 1];
    bookid = lastObject.bookid + 1;
  } else {
    bookid = 1;
    bookListObj = [];
  }

  const addBook = new Books(bookid, title, author);
  UI.addToList(addBook);

  document.querySelector('.form-title').value = '';
  document.querySelector('.form-author').value = '';
});

const bookDisplay = document.querySelector('.book-display');

// Remove Data Event Handler
bookDisplay.addEventListener(
  'click',
  (e) => {
    if (e.target.tagName === 'BUTTON') {
      // const removeBookUI = new UI();
      UI.removeFromList(e);
    }
  },
  true,
);

// Load Data Initially if there is any
const key = localStorage.getItem('bookList');
if (key) {
  // const getbookUI = new UI();
  UI.getBookList();
}
