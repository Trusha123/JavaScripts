//importing alias from another module
//import {message} from "./export_alias.mjs"

//while importing using alias
import {message as welcome} from "./export_alias.mjs";
console.log(welcome());


//console.log(message());