let actorPhMap=new Map();

actorPhMap.set("Amitabh Bachhan", 9876549679);
actorPhMap.set("Abhishek Bachhan", 9876535829);

actorPhMap.set("Amitabh Bacchan", 9876289015);
actorPhMap.set("Madhuri dixit", 9376289821)

//Printing whole map
console.log(actorPhMap)

//checking no of key-value pairs in Map
console.log("Size of Map" + actorPhMap.size);

//Iterating over keys
for(let actor of actorPhMap.keys())
{
    console.log("Actor: " +actor + "Phone no: " + actorPhMap.get(actor))
}

//iterating over values
for(let phoneNo of actorPhMap.values())
{
    console.log(phoneNo)
}

for(let entry of actorPhMap.entries())
{
    console.log("Actor: " + entry[0]+ " Phoneno:" + entry[1])
}

//using destructure
for(let [key,value] of actorPhMap.entries())
{
    console.log("Key: " +key + "Value: " + value)
}

//using foreach method for callback function
actorPhMap.forEach((key,value)=>console.log("Actor: " + key + "Phoneno: " +value))

//using get 
console.log("Phone number of Amitabh: " +actorPhMap.get("Amitabh Bachhan"))

//checking is it present or not?
console.log("Is value present" +actorPhMap.has("Abhishek Bachhan"))

//deleting mapping
actorPhMap.delete("Madhuri dixit")
console.log(actorPhMap)
console.log("Size of Map: " + actorPhMap.size)


//removing all key value pairs
actorPhMap.clear()
console.log(actorPhMap)
console.log("Size of map: " + actorPhMap.size)

//creating objects
let India = {name:"India", population:138000000};
let IndiaFlag = {name:"Triranga",
                desc: "Triciolor: flag,saffron,white,green"}
console.log(IndiaFlag)
console.log(India)

let USA = {name:"UNITED STATES OF AMERICA", population:138279000};
let USAFlag = {name:"USA Flag",
                desc:"white strips and red dots"}
console.log(USAFlag)
console.log(USA)

//creating 2D array
let countFlagarr = [[India,IndiaFlag],[USA,USAFlag]]


//creating map using iterable array
//object as key value 
let countFlagmap = new Map(countFlagarr);
console.log(countFlagmap)
console.log("size of countflagmap: " + countFlagmap.size);

//adding key-value pairs
countFlagmap.set(India,IndiaFlag);
console.log(countFlagmap)
console.log("size of countflagmap: " + countFlagmap.size);

countFlagmap.forEach((flag,country)=>{
            console.log("KEY: Country deatils: Name=" + country.name+
                                                "\nPopulation= " + country.population);              
            console.log("VALUE:Flag details : Name= " + flag.name+
                                                "\nDescription= " + flag.desc);

})

