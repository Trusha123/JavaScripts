//creating js class using parameterized constructor fun
function Book(code,name,author,price)
{
    this.code=code;
    this.name=name;
    this.author=author;
    this.price=price;

this.printInfo=function()
{
    console.log("Book code:  " + this.code + " \tName: " +this.name + " \tAuthor: " + this.author + "\tPrice: " +this.price)
}

}
//end of class

//creating object of book class
let b1 = new Book(102,"JAVA complete refrence","Mc Graw Hill",600.00)
b1.printInfo();
//same another books can be declared 

var a=10;
a=true;
console.log(typeof(a))
console.log(typeof(a))

let s = "Trusha"
console.log(typeof(s))

let x=undefined
console.log(typeof(x))

console.log(typeof(b1))
