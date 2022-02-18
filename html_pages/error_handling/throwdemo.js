function add(a,b){
    if(typeof(a)!='number'){
        throw TypeError("Not a number")
    }
    else{
        return a+b;

    }
}


try{

    let res = add("10",10);
    console.log("Result: " + res)
}
catch(error){
    //console.error(error)
    console.error("Error name: " +error.name + "\tMessage: " +error.message)
}

finally{
    console.error("ALwaysbexecuted")
}
