//imprt entire module
import * as md1 from "./hello.mjs";

console.log("Message: " + md1.msg);
console.log("Result : " + md1.add(20,50));

let c = new md1.Car();
c.run();

