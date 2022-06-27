const btnSubmit = document.querySelector('.submit');

let bookObj;
let bookid = 0;
let serializedBookObj;
let deserializedBookObj;

function appendDiv(book) {
  deserializedBookObj = JSON.parse(localStorage.getItem("bookData"));

  let titleElement = ' ';
  titleElement += `
            <div class="book" data-id="${deserializedBookObj.bookid}">
              <h2 class="title">${deserializedBookObj.title}
                  <span class="author">${deserializedBookObj.author}</span>
               </h2>
              <button class="btn btn-remove">Remove</button>
              <hr/>
            </div>
          `;

  const sectionBookDisplay = document.querySelector('.book-display');
  sectionBookDisplay.innerHTML += titleElement;
}

btnSubmit.addEventListener('click', () => {
  let title = document.querySelector('.form-title').value;
  let author = document.querySelector('.form-author').value;
  bookid += 1;
  addToList(title,author,bookid);
});

function addToList(author, title, bookid){ 
  bookObj = {
    title : title,
    author: author,
    bookid: bookid
  }

  serializedBookObj = JSON.stringify(bookObj);
  localStorage.setItem("bookData", serializedBookObj);
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
