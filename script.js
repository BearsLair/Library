const bookCollection = document.querySelector(".book-list");
const newBookBtn = document.querySelector("#newBook");
const dialog = document.querySelector("dialog");
const closeModal = document.querySelector("dialog #closeModal");

const myLibrary = [
  // {
  //   title: "Book 1",
  //   author: "Patrick",
  //   pages: 256,
  //   "was-read": true,
  // },
  // {
  //   title: "Book 2",
  //   author: "Melvin",
  //   pages: 129,
  //   "was-read": false,
  // },
  // {
  //   title: "Book 3",
  //   author: "Beatrice",
  //   pages: 92,
  //   "was-read": true,
  // }
];

displayBookCollection();

newBookBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeModal.addEventListener("click", () => {
  dialog.close();
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  e.preventDefault();
}

function displayBookCollection() {
  bookCollection.innerHTML = "";

  myLibrary.map((el) => {
    const book = document.createElement("p");
    book.innerHTML = `Title: ${el.title}    Author: ${el.author}   Pages: ${
      el.pages
    }    Was Read: ${
      el["was-read"] ? "Yes" : "No"
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

  console.log(myLibrary);
}
