// Modal created using info provided @ https://www.w3schools.com/howto/howto_css_modals.asp
var modal = document.getElementById("myModal");
var btn = document.getElementById("newBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var save = document.getElementById('saveBtn');
save.onclick = function() {
  console.log('SAVE CLICKED!')
}

const table = document.querySelector('#table');

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = false
    this.info = function() {
        return title + ' by ' + author + ", " + pages + " pages, " + read
    }
}

let myLibrary = [];

function addBookToLibrary(book) {
    array.forEach(element => {
        myLibrary.push(element)
    });
}

