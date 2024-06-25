const myLibrary = [];
// book’s title, author, the number of pages, and whether or not you have read the book.
function Book(title, author, pageCount, status){
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.status = status;
    this.info = function(){
        return ("Title: "+ this.title +"/n"+ " by "+ this.author+", " + this.pageCount+ " pages, "+ this.status+ ".");
     }
}//"The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
const dialog = document.getElementById("open-dialog");
function showDialog(){
    dialog.show();
}
function closeDialog(){
    dialog.close();
}

const addBtn = document.getElementById("addToLibraryBTN");
addBtn.addEventListener("click",showDialog);

const closeBoxBTN = document.getElementById("closeBox");
closeBoxBTN.addEventListener("click",closeDialog);
const reader = new Book("The Hobbit", "J.R.R. Tolkien" , 295 , " not read yet");
const reader2 = new Book("1984", "George Orwell", 328, "not read yet");
const reader3 = new Book("Pride and Prejudice", "Jane Austen", 279, "not read yet");
const reader4 = new Book("The Catcher in the Rye", "J.D. Salinger", 224, "not read yet");
const reader5 = new Book("Brave New World", "Aldous Huxley", 288, "not read yet");
const reader6 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 200, "not read yet");

const bookForm = document.getElementById("book-form");
bookForm.addEventListener('submit',  (e) => {
        e.preventDefault();
        const title = document.getElementById("title").value;
        const authorName = document.getElementById("authorName").value;
        const pageCount = document.getElementById("pageCount").value;
        const status = document.getElementById("status");
        const newBook = new Book(title,authorName,pageCount,status);
        addBookToLibrary(newBook);
        traverseLibrary();
        closeDialog();
        bookForm.reset();
        
    });
function addBookToLibrary(Book) {
    // TO DO : this function will create am object for a function and add it to the library object


    
    myLibrary.push(Book);
    
    
    /*
    myLibrary.push(reader);
    myLibrary.push(reader2);
    myLibrary.push(reader3);
    myLibrary.push(reader4);
    myLibrary.push(reader5);
    myLibrary.push(reader6);*/
}


function traverseLibrary(){
    const bookshelf = document.getElementById("bookshelf");// to reference bookshelf 
    bookshelf.innerHTML ="";
    for(let i = 0; i < myLibrary.length; i++){
        displayBook(myLibrary[i]);
    }
    
}


function displayBook(card){
   
    console.log(card);
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("new-div");

    const cardBook = document.createElement("div");
    cardBook.innerHTML = `<p><strong>Title: </strong>: ${card.title}</p> 
                        <p><strong>Author: </strong>: ${card.author}</p> 
                        <p><strong>Pages: </strong>: ${card.pageCount}</p> 
                        <p><strong>status</strong>: ${card.status}</p>         
    `;
     



    cardContainer.appendChild(cardBook);// add content in the newly created div


    //put the new bookshelf
    const bookshelf = document.getElementById("bookshelf");// to reference bookself 
    bookshelf.appendChild(cardContainer);

}


/*addBookToLibrary() ;
traverseLibrary();*/
