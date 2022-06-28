const btnSubmit = document.querySelector('.submit');

let bookObj;

let bookid = 0;
let author = ' ';
let title = ' ';

let serializedBookObj;
let deserializedBookObj;

let bookListObj = [];
// let serializedBookList;
let deserializedBookList;

function saveData(dataObj) {
  const dataString = JSON.stringify(dataObj);
  localStorage.setItem('bookList', dataString);
}

function getData(key) {
  return JSON.parse(localStorage.getItem(key));
}

function appendDiv() {
  deserializedBookObj = JSON.parse(localStorage.getItem('bookData'));

  let bookElement = ' ';
  bookElement += `
            <div class="book" data-id="${deserializedBookObj.bookid}">
              <h2 class="title">${deserializedBookObj.title}
                  <span class="author">${deserializedBookObj.author}</span>
               </h2>
              <button class="btn btn-remove" type="button">Remove</button>
              <hr/>
            </div>
          `;

  const sectionBookDisplay = document.querySelector('.book-display');
  sectionBookDisplay.innerHTML += bookElement;
}

function getBookList() {
  let books = ' ';
  deserializedBookList = JSON.parse(localStorage.getItem('bookList'));

  const valuesArray = Object.values(deserializedBookList);

  for (const value of valuesArray) {
    books += `
          <div class="book" data-id="${value.bookid}">
            <h2 class="title">${value.title}
              <span class="author">${value.author}</span>
            </h2>
            <button class="btn btn-remove" type="button">Remove</button>
            <hr/>
          </div>
            `;
  }
  const booklist = document.querySelector('.book-display');
  booklist.innerHTML += books;
}

function addToList(title, author) {
  bookListObj = getData('bookList');

  const lastObject = bookListObj[bookListObj.length - 1];

  bookid = lastObject.bookid + 1;

  bookObj = { title, author, bookid, };

  bookListObj.push(bookObj);

  serializedBookObj = JSON.stringify(bookObj);
  saveData(bookListObj);

  appendDiv(serializedBookObj);
  getBookList();
}

function removeFromList(e) {
  const currentDiv = e.target.parentElement;
  currentDiv.parentElement.removeChild(currentDiv);

  const bookId = currentDiv.dataset.id;

  const bookList = getData('bookList');
  const temp = bookList.filter((item) => item.bookid !== bookId);
  saveData(temp);
  getBookList();
}

btnSubmit.addEventListener('click', () => {
  title = document.querySelector('.form-title').value;
  author = document.querySelector('.form-author').value;
  addToList(title, author);
});

const bookDisplay = document.querySelector('.book-display');

bookDisplay.addEventListener(
  'click',
  (e) => {
    if (e.target.tagName === 'BUTTON') {
      removeFromList(e);
    }
  },
  true,
);
