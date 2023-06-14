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
function Book(id, title, author, pages, read) {
  this.id = id;
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function () {
    return title + ' by ' + author + ", " + pages + " pages, " + read
  }
}


let indexCount = 0;
// function for when save button is clicked
var save = document.getElementById('saveBtn');
save.onclick = function (event) {
  // Prevents page error and clears the modal from the screen
  event.preventDefault();
  modal.style.display = "none";

  // Collects the user fields and packages them as a book- adding it to the list

  // This can probably be replaced by the new reindexing function - but it works for now
  const id = indexCount;
  indexCount++;


  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const status = document.getElementById('readStatus').checked;

  const book = new Book(id, title, author, pages, status);
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
    const id = book.id;
    const title = book.title;
    const author = book.author;
    const pages = book.pages;
    const read = book.read;

    let row = table.insertRow();
    row.setAttribute("id", "Book");

    // using the index count to set the value hidden on the table - this index is used to make updates in the list
    let indexCell = row.insertCell();
    indexCell.setAttribute('class', 'index')
    indexCell.style.display = "none";
    indexCell.textContent = id;

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

    let statusCell = row.insertCell();
    let readingButton = document.createElement('button');
    readingButton.textContent = 'Change Status'
    readingButton.onclick = function () {
      readUpdate();
    };
    statusCell.appendChild(readingButton);

    let deleteCell = row.insertCell();
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete'
    deleteButton.onclick = function () {
      deleteRow();
    };
    deleteCell.appendChild(deleteButton);


  });
}


//This function takes the whole table and splits it into rows, then looping through the number of rows it
// assigns a click handler to it that goes into that row and pulls out the ID so that it can be used to index
// the book lists and change the value on the read status and then refreshes the table on the page 
function readUpdate() {
  var table = document.getElementById("Library");
  var rows = table.getElementsByTagName("tr");
  for (i = 0; i < rows.length; i++) {
    var currentRow = table.rows[i];
    var createClickHandler =
      function (row) {
        return function () {
          var cell = row.getElementsByTagName("td")[0];
          var id = cell.innerHTML;
          
          let book = myLibrary[id];
          if (book.read == true) {
            book.read = false;
          } else {
            book.read = true;
          }
          tableUpdate();
        };
      };
    currentRow.onclick = createClickHandler(currentRow);
  }
}
window.onload = readUpdate();

// Function will identify the row, grab the ID and then use splice to remove it - then it goes through the list
// and adjusts all the index values of each book and then redraws the table with the updated index
function deleteRow() {
  var table = document.getElementById("Library");
  var rows = table.getElementsByTagName("tr");
  for (i = 0; i < rows.length; i++) {
    var currentRow = table.rows[i];
    var createClickHandler =
      function (row) {
        return function () {
          var cell = row.getElementsByTagName("td")[0];
          var id = cell.innerHTML;
          myLibrary.splice(id,1);
          indexCount--;
          reindex();
          tableUpdate();
        };
      };
    currentRow.onclick = createClickHandler(currentRow);
  }
}
window.onload = deleteRow();

// Loops through list to assign 
function reindex() {
  for (i = 0; i < myLibrary.length; i++) {
    myLibrary[i].id = i; 
  }
}


// Used for test printing to console
function print() {
  myLibrary.forEach(element => {
    console.log(element);
  });
}

