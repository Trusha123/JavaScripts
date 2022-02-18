//object literal in JS
let person = {
    name:"Trusha Patel",
    age:22,
    gender: "Female",
    height: 6.0
}

console.log(person.name)
console.log(person.height)
console.log(person['age'])
console.log(person['name']);

//using for..in loop
for(let prop in person)
{
    console.log(prop)
}

person.city = "Ahmedabad"
console.log(person.city)
console.log("All properties")

//delete object property
delete person.age
for(let prop in person)
{
    console.log(prop)
}



