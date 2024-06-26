const myLibrary = [];

// object constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


// Toggles the status for read or unread
Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    updateLibrary();
}


// Book constructor values will be pushed into the variable array of myLibrary[]
function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    updateLibrary();
    console.log(newBook);
}


// This function will update and render when both adding or removing books each time
function updateLibrary() {
    let library = document.querySelector("#libraryCard");
    library.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookCardDiv = document.createElement("div");
        bookCardDiv.setAttribute("class", "bookCard");
        bookCardDiv.innerHTML = `
            <div class="cardHeader">
                <h3 class="title">${book.title}</h3>
                <h5 class="author">by ${book.author}</h5>
            </div>
            <div class="cardBody">
                <p>${book.pages} pages</p>
                <p class="statusRead">${book.read ? "Read" : "Unread"}</p>
                <button class="cardButton" onclick="remove(${i})">Remove</button>
                <button class="cardButton" onclick="toggleRead(${i})">Toggle Read</button>
            </div>
        `;
        library.appendChild(bookCardDiv);
    }
}


// remove books in the library
function remove(index) {
    myLibrary.splice(index, 1);
    updateLibrary();
}


// When clicked, book form will display to enter book details for library 
let addBook = document.querySelector("#addBookButton");
addBook.addEventListener("click", function() {
    let bookForm = document.querySelector("#displayBookForm");
    bookForm.style.display = "block";
})

document.querySelector("#displayBookForm").addEventListener("submit", function(event) {
    event.preventDefault();
    addBookToLibrary();
})