const btnSubmit = document.querySelector('.submit');

let bookObj;

let bookid = 0;
let author = ' ';
let title = ' ';
let bookListObj = [];
let deserializedBookList;

// Create class
class Books {
    constructor(bookid, title, author) {
        this.bookid = bookid;
        this.title = title;
        this.author = author;
    }

    saveData(dataObj) {
      const dataString = JSON.stringify(dataObj);
      localStorage.setItem('bookList', dataString);
    }
      
    getData(key) {
      return JSON.parse(localStorage.getItem(key));
    }
    
    getBookList() {
      let books = ' ';
      deserializedBookList = this.getData('bookList');
    
      deserializedBookList.forEach((value) => {
        books += `
                <div class="book" data-id="${value.bookid}">
                  <h2 class="title">${value.title}
                    <span class="author">${value.author}</span>
                  </h2>
                  <button class="btn btn-remove" type="button">Remove</button>
                  <hr/>
                </div>
                  `;
      });
    
      const booklist = document.querySelector('.book-display');
      booklist.innerHTML = books;
    }

    addToList(bookObj) {
      bookListObj.push(bookObj);  
      this.saveData(bookListObj);
      this.getBookList();
    }

    removeFromList(e) {
      const currentDiv = e.target.parentElement;
      currentDiv.parentElement.removeChild(currentDiv);
    
      const bookId = parseInt(currentDiv.dataset.id, 10);
      const bookList = this.getData('bookList');
      const temp = bookList.filter((item) => item.bookid !== bookId);
    
      this.saveData(temp);
      this.getBookList();
    }
}

// Submit Data Event Handler
btnSubmit.addEventListener('click', () => {
  title = document.querySelector('.form-title').value;
  author = document.querySelector('.form-author').value;

  let dummy = new Books();
  bookListObj = dummy.getData('bookList');
  
  if (bookListObj !== null && bookListObj.length > 0) {
    const lastObject = bookListObj[bookListObj.length - 1];
    bookid = lastObject.bookid + 1;
  } else {
    bookid = 1;
    bookListObj = [];
  }
  
  let obj1 = new Books(bookid, title, author);
  console.log(obj1);

  obj1.addToList(obj1);

  document.querySelector('.form-title').value = '';
  document.querySelector('.form-author').value = '';
});

const bookDisplay = document.querySelector('.book-display');

// Remove Data Event Handler
bookDisplay.addEventListener(
  'click',
  (e) => {
    if (e.target.tagName === 'BUTTON') {
      let removeBook = new Books();
      removeBook.removeFromList(e);
    }
  },
  true,
);


// Load Data Initially if there is any
const key = localStorage.getItem('bookList');
if (key) {
  let getbooklists = new Books();
  getbooklists.getBookList();
}
