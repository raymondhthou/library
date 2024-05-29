const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

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
                <button class"removeButton" onclick="remove(${i})">Remove</button>
            </div>
        `;
        library.appendChild(bookCardDiv);
    }
}

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