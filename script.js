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
  // creating a variable to keep index count as it loops below
  let indexCount = 0;
  myLibrary.forEach(book => {
    const title = book.title;
    const author = book.author;
    const pages = book.pages;
    const read = book.read;

    let row = table.insertRow();
    row.setAttribute("id", "Book");

    // using the index count to set the value hidden on the table - this index is used to make updates in the list
    let indexCell = row.insertCell();
    indexCell.setAttribute('id', 'index-'+indexCount)
    indexCount++;
    indexCell.style.display = "none";

    let titleCell = row.insertCell();
    titleCell.textContent = title;
    let authorCell = row.insertCell();
    authorCell.textContent = author;
    let pagesCell = row.insertCell();
    pagesCell.textContent = pages;

    // Checks the true/false status of the book and sets text to match
    let readCell = row.insertCell();
    if (read === true) {
      const status = document.createElement('text');
      status.textContent = 'Completed'
      readCell.appendChild(status);
    } else {
      const status = document.createElement('text');
      status.textContent = 'Not Completed'
      readCell.appendChild(status);
    }

    let buttonCell = row.insertCell();
    const readingButton = document.createElement('button');
    readingButton.textContent = 'Change Status'
    readingButton.onclick = function() {
      readUpdate();
    };
    buttonCell.appendChild(readingButton);


    // ORIGINAL METHOD USING CHECK BOX INSTEAD OF TEXT
    // if (read === true) {
    //   var status = document.createElement('input');
    //   status.setAttribute('type', 'checkbox');
    //   status.checked = true;
    //   readCell.appendChild(status);
    // } else {
    //   var status = document.createElement('input');
    //   status.setAttribute('type', 'checkbox');
    //   status.checked = false;
    //   readCell.appendChild(status);
    //   console.log('NOT TRUE');
    // }
  });
}

function readUpdate() {
  console.log('CLICK!');
}



// Used for test printing to console
function print() {
  myLibrary.forEach(element => {
    console.log(element);
  });
}

