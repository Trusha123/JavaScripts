let book={
    id:1001,
    name:"Learn JS",
    author:"John FLeming",
    price: 350.00
}

//defining global function
function printInfo()
{
    console.log("Book ID: " + book.id + "\tName: " + book.name)
    console.log("Author: " + book.author + "\tPrice: " + book.price)
}


//create new property and assign global function 
book.show = printInfo;
book.show()


