import NegativeNumbers from "./negative_number";

function fact(num){
    if(num<0)
        throw new NegativeNumberError("Factorial is not possible")
    else
        console.log("Logic is possible");
}
try{
    fact(-1);
}
catch(error)
{
    console.error(error.name + ":" + error.message)
}
