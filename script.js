const bookCollection = document.querySelector(".book-list");
const newBookBtn = document.querySelector("#newBook");
const dialog = document.querySelector("dialog");
const closeModal = document.querySelector("dialog #closeModal");
const userBookTitle = document.querySelector("dialog #title");
const userBookAuthor = document.querySelector("dialog #author");
const userBookPages = document.querySelector("dialog #pages");
const userBookRead = document.querySelector("dialog #read");
const submit = document.querySelector("#submit");

const myLibrary = [];

displayBookCollection();

newBookBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeModal.addEventListener("click", () => {
  dialog.close();
});

submit.addEventListener("click", () => {
  addBookToLibrary();
  dialog.close();
  displayBookCollection();
});

function addBookToLibrary() {
  const title = userBookTitle.value;
  const author = userBookAuthor.value;
  const pages = userBookPages.value;
  const read = userBookRead.value;

  function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  const userBook = new Book(title, author, pages, read);
  myLibrary.push(userBook);
}

function displayBookCollection() {
  bookCollection.innerHTML = "";

  myLibrary.map((el) => {
    const book = document.createElement("p");
    book.innerHTML = `Title: ${el.title}    Author: ${el.author}   Pages: ${
      el.pages
    }    Was Read: ${
      el.read ? "Yes" : "No"
    } <button onClick="wasRead(${myLibrary.indexOf(
      el
    )})">Was Read?</button> <button onClick="deleteABook(${myLibrary.indexOf(
      el
    )}
    )">Delete Book</button>`;

    bookCollection.appendChild(book);
  });
}

function deleteABook(book) {
  myLibrary.splice(book, 1);
  displayBookCollection();
}

function wasRead(book) {
  if (myLibrary[book].read === false) {
    myLibrary[book].read = true;
  } else if (myLibrary[book].read === true) {
    myLibrary[book].read = false;
  }

  displayBookCollection();
}
