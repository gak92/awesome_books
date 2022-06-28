const btnSubmit = document.querySelector('.submit');

let bookObj;

let bookid = 0;
let author = ' ';
let title = ' ';

let serializedBookObj;
let deserializedBookObj;

let bookListObj = [];
let serializedBookList;
let deserializedBookList;

function appendDiv(book) {
  deserializedBookObj = JSON.parse(localStorage.getItem("bookData"));

  let bookElement = ' ';
  bookElement += `
            <div class="book" data-id="${deserializedBookObj.bookid}">
              <h2 class="title">${deserializedBookObj.title}
                  <span class="author">${deserializedBookObj.author}</span>
               </h2>
              <button class="btn btn-remove">Remove</button>
              <hr/>
            </div>
          `;

  const sectionBookDisplay = document.querySelector('.book-display');
  sectionBookDisplay.innerHTML += bookElement;
}

btnSubmit.addEventListener('click', () => {
  title = document.querySelector('.form-title').value;
  author = document.querySelector('.form-author').value;
  bookid += 1;
  addToList(title,author, bookid);
});

function addToList(title, author, bookid){ 
  bookObj = {
    title : title,
    author: author,
    bookid: bookid
  }
  
  bookListObj.push(bookObj);
  console.log(bookListObj.values);
  
  serializedBookObj = JSON.stringify(bookObj);
  localStorage.setItem("bookData", serializedBookObj);

  serializedBookList = JSON.stringify(bookListObj);
  localStorage.setItem("bookList", serializedBookList);
  
  appendDiv(serializedBookObj);
}

const bookDisplay = document.querySelector('.book-display');

bookDisplay.addEventListener(
  'click',
  (e) => {
    if (e.target.tagName === 'BUTTON') {
      removeFromList(e);
    }
  }, true,
);

function removeFromList(e) { 
  const currentDiv = e.target.parentElement;
  currentDiv.parentElement.removeChild(currentDiv);
}

function getBookList(){
  let books = " ";
  deserializedBookList = JSON.parse(localStorage.getItem("bookList"));

  let valuesArray = Object.values(deserializedBookList);
  
  for (let value of valuesArray) {
    //console.log(value);
    books += `
      <div class="book" data-id="${value.bookid}">
        <h2 class="title">${value.title}
          <span class="author">${value.author}</span>
        </h2>
        <button class="btn btn-remove">Remove</button>
        <hr/>
      </div>
        `;
  }

  /*bookListObj.forEach((deserializedBookList)=>{
  books += `
      <div class="book" data-id="${deserializedBookList.bookid}">
        <h2 class="title">${deserializedBookList.title}
          <span class="author">${deserializedBookList.author}</span>
        </h2>
        <button class="btn btn-remove">Remove</button>
        <hr/>
      </div>
        `;
  });*/

  const booklist = document.querySelector('.book-display');
  booklist.innerHTML += books;
}
