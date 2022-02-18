function add(a=10,b=90){
    console.log("a: " +a)
    console.log("b: " +b)
    return a+b;
}

let res = add(100);
console.log("Result:  " + res)
console.log("Result is: " + add(100))
console.log("Result is: " + add(100,200))
console.log("Result is: " + add(undefined,3000))

function mul(a=10,b=a,c=a*b){
    return c;
}
console.log("Multiplication: " + mul())
