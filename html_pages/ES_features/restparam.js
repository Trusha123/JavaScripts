function fun(a,b,...v){
    console.log(a);
    console.log(b);
    console.log("Length of res parameter: " + v.length)
    console.log(v);
    v.forEach(e=>console.log(e))

}

fun(10,20);//rest parameter is empty
fun(10,20,30,"Hello World",true,new Date())
