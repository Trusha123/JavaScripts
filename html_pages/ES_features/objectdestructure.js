//object destructuring 
let person = {
    name:"TrushaPatel",
    age:22
}


let {name:p_name,age:p_age} = person;

console.log("Person name:" +p_name)
console.log("Person age:" +p_age )

//short syntax
let{name,age} = person;
console.log("Person name:" +name)
console.log("Person age:" +age )
