let a = 10;

function multiply(a,b){
    return a*b;
}

class Bird{
    fly()
    {
        console.log("Bird is flying..")
    }
}

//single export used to export required components at a time
module.export={a,Bird,multiply};


