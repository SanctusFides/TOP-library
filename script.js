// Modal created using info provided @ https://www.w3schools.com/howto/howto_css_modals.asp
var modal = document.getElementById("myModal");
var btn = document.getElementById("newBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// EVERYTHING BELOW IS NON-MODAL BOILER CODE

// list that store the books to create a table from
let myLibrary = [];
// the Book constructor
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function () {
    return title + ' by ' + author + ", " + pages + " pages, " + read
  }
}


// function for when save button is clicked
var save = document.getElementById('saveBtn');
save.onclick = function (event) {
  // Prevents page error and clears the modal from the screen
  event.preventDefault();
  modal.style.display = "none";

  // Collects the user fields and packages them as a book- adding it to the list
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const status = document.getElementById('readStatus').checked;

  const book = new Book(title, author, pages, status);
  myLibrary.push(book);
  tableUpdate();
  // Resets the form fields for the next entry
  const form = document.getElementById('bookForm')
  form.reset();
}



function tableUpdate() {

  let table = document.getElementById('Library');

  // Each time the update is run, these the block below gathers all the books and clears them from the table so that
  // it can repopulate the table and avoid duplicating the table data when a new book is added
  let rows = document.querySelectorAll('#Book');
  rows.forEach(row => {
    row.remove();
  })

  // Simply loops through the book list and packages together a row to be inserted into the table
  myLibrary.forEach(book => {
    const title = book.title;
    const author = book.author;
    const pages = book.pages;
    const read = book.read;
    let row = table.insertRow();
    row.setAttribute("id", "Book");
    let titleCell = row.insertCell();
    titleCell.textContent = title;
    let authorCell = row.insertCell();
    authorCell.textContent = author;
    let pagesCell = row.insertCell();
    pagesCell.textContent = pages;
    // console.log(`${title} ${author} ${pages} ${read}`);
  });
  // console.log(rows);
}



// Used for test printing to console
function print() {
  myLibrary.forEach(element => {
    console.log(element);
  });
}

