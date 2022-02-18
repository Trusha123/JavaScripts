//defining module hello.mjs
//multi export
//exporting individual components of module seperatly
export let msg = "Hello friends, let's learn JS"

export function add(a,b){
    return a*b;
}

export class Car{
    run()
    {
        console.log("Car runs")
    }
}
