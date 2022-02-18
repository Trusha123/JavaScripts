//define es6(ECMAScript 2015) class
class product
{
    constructor(id,name,brand,price)
    {
        this.id=id;
        this.name=name;
        this.brand=brand;
        this.price=price;
    }

    //defining object method w/o function keyword
    printDetails()
    {
        console.log("Produc ID: " + this.id + "\tName: " + this.name )
        console.log("Brand: " + this.brand + "\tPrice: " +this.price )
    }

    //getter ans setter methods
    set _price(price)
    {
        this.price=price;
    }

    get _price()
    {
        this.price=price;
    }


    //sttaic method(does not belong to object of class)
    static categoryInfo()
    {
        console.group("Product category")
    }
}
//end of product class ES6

//creating object of product class
let p1 = new product(1001,"Car","Maruti",600000.00)
p1.printDetails()

let p2 = new product(1002,"Mobile Phone","Samsung",25000.00)
p2.printDetails()

//calling set and get methods
p2.price=56000.00;
console.log(p2.price)

//calling static method
product.categoryInfo()




console.log(p2 instanceof product)
console.log(p2 instanceof Number)
let dt = new Date();
console.log(dt)
console.log(dt instanceof Date)

