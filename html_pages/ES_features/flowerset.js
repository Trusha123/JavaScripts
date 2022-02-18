
let flowerset =  Set [('lotus', 'Rose','Daisy','JAsmine')];

//printing set
console.log(flowerset)
console.log("Size of set: " +flowerset.size)

//adding values to set
flowerset.add('Lotus').add('tulip');

//print set
console.log(flowerset)
console.log("Size of set: " +flowerset.size)

//iterate for loop
console.log("Using for..of loop")
for(let flower of flowerset){
    console.log(flower)
}

//using foreach method of set
console.log("Using ForEach loop")
flowerset.forEach((flower)=>console.log(flower))

console.log("Is the value present" + flowerset.has('Rose'))
console.log("Is the value present" + flowerset.has('Jasmine'))

flowerset.clear();
console.log(flowerset)
