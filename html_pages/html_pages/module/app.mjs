//importing inividual modules form hello.mjs

import{Car,msg, add} from "./hello.mjs";

console.log("Message: " + msg);
let res = add(40,40);
console.log("Addition is: " + res);

let c = new Car();
c.run();

