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


var save = document.getElementById('saveBtn');
// function for when save button is clicked - reads the values from form, packages them into book form and adds to library list
save.onclick = function (event) {
  event.preventDefault();
  modal.style.display = "none";

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const status = document.getElementById('readStatus').checked;

  const book = new Book(title, author, pages, status);
  // console.log(book);
  myLibrary.push(book);

  const form = document.getElementById('bookForm')
  form.reset();
}


const table = document.querySelector('#table');

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function () {
    return title + ' by ' + author + ", " + pages + " pages, " + read
  }
}

let myLibrary = [];

function TableUpdate(book) {

}



// Used for test printing to log
function Print() {
  myLibrary.forEach(element => {
    console.log(element);
  });
}

