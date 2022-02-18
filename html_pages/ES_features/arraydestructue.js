let arr =[45,69,89,66];

//destructure an array
let [a,b,c,d] = arr;
console.log("a: " +a)
console.log("b: " +b)
console.log("c: " +c)
console.log("d: " +d)

function getCities()
{
    return ['Baroda','Rajkot','Ahmedabad','Mehsana']
}

let[c1,c2,c3,c4] = getCities();
console.log(c1)
console.log(c2)
console.log(c3)
console.log(c4)

let[city1,city2,...carr] = getCities();
console.log("city1: " + city1)
console.log("city2: " + city2)
console.log("cArr: " + carr)



