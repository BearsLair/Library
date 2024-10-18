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

closeModal.addEventListener("click", (e) => {
  e.preventDefault();

  userBookTitle.value = "";
  userBookAuthor.value = "";
  userBookPages.value = "";
  userBookRead.checked = false;
  dialog.close();
});

submit.addEventListener("click", (e) => {
  e.preventDefault();

  addBookToLibrary();

  userBookTitle.value = "";
  userBookAuthor.value = "";
  userBookPages.value = "";
  userBookRead.checked = false;

  dialog.close();
});

function addBookToLibrary() {
  bookCollection.innerHTML = "";

  const title = userBookTitle.value;
  const author = userBookAuthor.value;
  const pages = userBookPages.value;
  const read = userBookRead.checked;

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
    book.innerHTML = `<span class="orderNumber">${
      myLibrary.indexOf(el) + 1
    }. </span><span class="userTitle">Title: ${
      el.title
    }</span><span class="userAuthor">Author: ${
      el.author
    }</span><span class="userPages">Pages: ${
      el.pages
    }</span><span class="userRead">Was Read: ${
      el.read ? "Yes" : "No"
    }<button onclick="wasRead(${myLibrary.indexOf(
      el
    )})">Change</button></span><span class="userDelete"><button onclick="deleteABook(${myLibrary.indexOf(
      el
    )})">Delete Book</button>`;

    bookCollection.appendChild(book);
  });
}

function deleteABook(book) {
  myLibrary.splice(book, 1);
  displayBookCollection();
}

function wasRead(book) {
  if (myLibrary[book].read === true) {
    myLibrary[book].read = false;
  } else if (myLibrary[book].read === false) {
    myLibrary[book].read = true;
  }

  displayBookCollection();
}
