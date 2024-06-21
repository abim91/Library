const myLibrary = [];
// book’s title, author, the number of pages, and whether or not you have read the book.
function Book(title, author, pageCount, status){
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.status = status;
    this.info = function(){
        return (this.title + " by "+ this.author+", " + this.pageCount+ " pages, "+ this.status+ ".");
     }
}//"The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

const reader = new Book("The Hobbit", "J.R.R. Tolkien" , 295 , " not read yet");
const reader2 = new Book("1984", "George Orwell", 328, "not read yet");
const reader3 = new Book("Pride and Prejudice", "Jane Austen", 279, "not read yet");
const reader4 = new Book("The Catcher in the Rye", "J.D. Salinger", 224, "not read yet");
const reader5 = new Book("Brave New World", "Aldous Huxley", 288, "not read yet");
const reader6 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 200, "not read yet");


function addBookToLibrary() {

    myLibrary.push(reader);
    myLibrary.push(reader2);
    myLibrary.push(reader3);
    myLibrary.push(reader4);
    myLibrary.push(reader5);
    myLibrary.push(reader6);
}

function traverseLibrary(){
    
    for(let i = 0; i < myLibrary.length; i++){
        createCard(myLibrary[i]);
    }
    
}

function createCard(card){
   

    const newDiv = document.createElement("div");
    newDiv.classList.add("new-div");
    const newContent = document.createTextNode(card.info());


    newDiv.appendChild(newContent);// add content in the newly created div


    //put the new bookshelf
    const bookshelf = document.getElementById("bookshelf");// to reference bookself 
    bookshelf.appendChild(newDiv);

}


addBookToLibrary() ;
traverseLibrary();

const dialog = document.getElementById("open-dialog");
function showDialog(){
    dialog.show();
}
function closeDialog(){
    dialog.close();
}