const form = document.querySelector('.form');
const btnSubmit = document.querySelector('.submit');
const btnRemove = document.querySelector('.btn-remove');
//const bookDisplaySection = document.querySelector('book-display');

class Book {
    constructor(title, author, id) {
        this.title = title;
        this.author = author;
        this.id = id;
    }
}

// const book1 = new Book('ABC', 'xyz');
// console.log(book1);

console.log(form);

let bookid = 0;

btnSubmit.addEventListener('click', ()=> {
    console.log('form submitted');
    
    const title = document.querySelector('.form-title').value;
    const author = document.querySelector('.form-author').value;

    console.log(title, author);
    bookid += 1;
    
    const book = new Book(title, author, bookid);
    
    console.log(book);
    appendDiv(book);
});

document.addEventListener('click', ()=> {
    console.log('Btn clicked');
}, true);

function appendDiv(book){
    let titleElement = " ";
    titleElement += `
          <div class="book" data-id="${book.bookid}">
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