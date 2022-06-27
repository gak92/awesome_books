const form = document.querySelector('.form');
const btnSubmit = document.querySelector('.submit');

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

// const book1 = new Book('ABC', 'xyz');
// console.log(book1);

console.log(form);

btnSubmit.addEventListener('click', ()=> {
    console.log('form submitted');
    const title = document.querySelector('.form-title').value;
    const author = document.querySelector('.form-author').value;

    console.log(title, author);
    
    const book = new Book(title, author);
    console.log(book);

});

