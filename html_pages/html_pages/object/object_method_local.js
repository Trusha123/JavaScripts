let car = {
    code:'E2345',
    mode1: "Trusha Patel",
    price: 25000.00,

    printDetails:function()
    {
        console.log("Code: " + this.code + "\t Mode1:" +this.mode1 + "\tPrice: " + this.price)
    }
}

car.printDetails();
