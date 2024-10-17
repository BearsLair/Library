const bookCollection = document.querySelector(".book-list");
const newBookBtn = document.querySelector("#newBook");
const dialog = document.querySelector("dialog");
const closeModal = document.querySelector("dialog #closeModal");
const userBookTitle = document.querySelector("dialog #title");
const userBookAuthor = document.querySelector("dialog #author");
const userBookPages = document.querySelector("dialog #pages");
const userBookRead = document.querySelector("dialog #read");
const userBookNotRead = document.querySelector("dialog #notread");
const submit = document.querySelector("#submit");

const myLibrary = [];

displayBookCollection();

newBookBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary();
  dialog.close();
});

function addBookToLibrary() {
  bookCollection.innerHTML = "";

  const title = userBookTitle.value;
  const author = userBookAuthor.value;
  const pages = userBookPages.value;
  const wasRead = userBookRead.value;

  console.log("Radio button value selected is ", userBookRead.value);
  console.log("Type of input for radio button is ", typeof userBookRead.value);

  let read = null;

  //NEED checkbox for read status

  console.log("read equals ", read);

  function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  const userBook = new Book(title, author, pages, read);
  myLibrary.push(userBook);

  displayBookCollection();
}

function displayBookCollection() {
  bookCollection.innerHTML = "";
  myLibrary.map((el) => {
    const book = document.createElement("p");
    book.innerHTML = `Title: ${el.title}    Author: ${el.author}   Pages: ${
      el.pages
    }    Was Read: ${
      el.read ? "Yes" : "No"
    } <button onclick="wasRead(${myLibrary.indexOf(
      el
    )})">Was Read?</button> <button onclick="deleteABook(${myLibrary.indexOf(
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
  if (myLibrary[book][read] === true) {
    myLibrary[book][read] = false;
    console.log("Read changed to false");
  } else if (myLibrary[book][read] === false) {
    myLibrary[book][read] = true;
    console.log("Read changed to true");
  }

  console.log(myLibrary);

  displayBookCollection();
}
