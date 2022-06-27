const btnSubmit = document.querySelector('.submit');

class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

let bookid = 0;

function appendDiv(book) {
  let titleElement = ' ';
  titleElement += `
            <div class="book" data-id="${book.id}">
              <h2 class="title">${book.title}
                  <span class="author">${book.author}</span>
               </h2>
              <button class="btn btn-remove">Remove</button>
              <hr/>
            </div>
          `;

  const sectionBookDisplay = document.querySelector('.book-display');
  sectionBookDisplay.innerHTML += titleElement;
}

btnSubmit.addEventListener('click', () => {
  const title = document.querySelector('.form-title').value;
  const author = document.querySelector('.form-author').value;

  bookid += 1;

  const book = new Book(title, author, bookid);

  appendDiv(book);
});

const bookDisplay = document.querySelector('.book-display');

bookDisplay.addEventListener(
  'click',
  (e) => {
    if (e.target.tagName === 'BUTTON') {
      const currentDiv = e.target.parentElement;
      currentDiv.parentElement.removeChild(currentDiv);
    }
  },
  true
);
