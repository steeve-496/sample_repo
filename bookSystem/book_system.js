let books=[];
function addBook(){
    const bookName= document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription= document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)){
        const book={
            name :bookName,
            authorName : authorName,
            bookDescription : bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        const added= `<p>Book added Successfully</p>`;
        document.getElementById('action').innerHTML = added;
        showbooks();
        clearInputs();
    }else{
        alert("Please fill in all fields correctly.");
    }
}

function showbooks(){
        const booksDiv= books.map((book,index) => `<h2>Book Number ${index+1}</h2><br>
        <p><strong>Book Name\t\t\t:</strong> ${book.name}</p>
        <p><strong>Author Name\t\t:</strong> ${book.authorName}</p>
        <p><strong>Book Description\t: </strong>${book.bookDescription}</p>
        <p><strong>No. of Pages\t\t: </strong>${book.pagesNumber} pages</p>
        <p><button onclick="deletebook(${index})">Delete Book</button></p>`
        );
    document.getElementById('books').innerHTML = booksDiv.join('');
}

function deletebook(index){
    if (index >= 0 && index < books.length) {
        books.splice(index, 1); // Remove 1 element at position 'index' from the 'books' array
        showbooks(); // Update the displayed list of books
        document.getElementById('deleted').innerHTML = `<p>Book ${index+1} deleted Successfully</p>`;
    } else {
        alert("Invalid index provided.");
    }
}



function clearInputs(){
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value= '';    
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

function clearInput(){
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value= '';    
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
    const cleared= `<p>Cleared Inputs</p>`;
    document.getElementById('action').innerHTML = cleared;
}