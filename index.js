const myLibrary = [];
let i = 0;
// book’s title, author, the number of pages, and whether or not you have read the book.
function Book(title, author, pageCount, status){
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    
    var statusChosen = document.getElementsByName("status");
    for(let i = 0; i< statusChosen.length; i++){
        if(statusChosen[i].checked){
            this.status = statusChosen[i].value;
        }
    }
}


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

/*
const reader = new Book("The Hobbit", "J.R.R. Tolkien" , 295 , "no");
const reader2 = new Book("1984", "George Orwell", 328, "yes");
const reader3 = new Book("Pride and Prejudice", "Jane Austen", 279, "not read yet");
const reader4 = new Book("The Catcher in the Rye", "J.D. Salinger", 224, "not read yet");
const reader5 = new Book("Brave New World", "Aldous Huxley", 288, "not read yet");
const reader6 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 200, "not read yet");
*/

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
    var children = bookshelf.children;

    for(let j = children.length - 1; j >= 0; j--){
        console.log( "the class list: "+ children[j].classList);
        if(children[j].classList.contains("newBookCard")){
            console.log(bookshelf.children[j].className + " was removed");
            children[j].remove();
            
        }
   }
   
    for(let i = 0; i < myLibrary.length; i++){
        console.log("The Library Currently has : "+ myLibrary );
        displayBook(myLibrary[i]);
    }
   
    
}


function displayBook(card){
   
    console.log(card);
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("newBookCard");//newBookCard
    

    const cardBook = document.createElement("div");
    var a1 = card.status === "Completed" ? "checked": "";
    
    cardBook.innerHTML = `
                        <a href="#" class="close-button">&times;</a>
                        <p><strong>Title: </strong> ${card.title}</p> 
                        <p><strong>Author: </strong> ${card.author}</p> 
                        <p><strong>Pages: </strong> ${card.pageCount}</p> 
                        <p><strong>Status:</strong> ${card.status}</p>   
                       <div class = "status-switch" > 
                            <label class="switch">
                            <input name="changeProgress" type="checkbox" ${a1}/> 
                            </label>     
                        </div> 
    `;
    
    cardContainer.appendChild(cardBook);// add content in the newly created div

    //put into the new bookshelf
    const bookshelf = document.getElementById("bookshelf");
    bookshelf.appendChild(cardContainer);

}


var updateStatus = document.getElementsByClassName("checkbox");
  
for(var j = 0; j < updateStatus.length; j++){

    updateStatus[j].addEventListener('click', (e) =>{
    //e.preventDefault();
    console.log("clicked");

    /*for(var j = 0; j < statusSwitch.length; j++){

        
        for(let i = 0; i< statusChosen.length; i++){
            if(statusChosen[i].checked){
                if(statusChosen[i].value === "Completed"){
                    this.status = "In-Progress";
                }
                else if(statusChosen[i].value === "In-Progress"){
                    this.status = "Completed";
                }
            }
           
        }
}*/
    });

}

