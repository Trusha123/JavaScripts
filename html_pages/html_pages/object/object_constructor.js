let person = new Object();

person.name = "Trusha Patel";
person.age = 22;
person.show = function(){

    console.log("Name: " + this.name+  "\tAge: " + this.age);

}
person.show();


let Book = new Object( {

    code :2122,
    name: "Complete refrence JAVA",
    author : "Mc Graw hill",
    price : 2300.00,


    print:function(){
        console.log("Book code:" +this.code+ "\t Book name: " + this.name)
        console.log("author name: " +this.author+ "\tPrice: " +this.price)
    }

});

Book.print();


//creating copy of book object
let book1 = Object.create(Book);//book is prototype of book1
book1.print();

book1.publisher = "Navneet Publisher"
console.log("Publisher: " +book1.publisher)
console.log(Object.prototype)



