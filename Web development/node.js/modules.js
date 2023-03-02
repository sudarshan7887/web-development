const fs = require("fs");        //import modules

//Reading a file.....
let a = fs.readFileSync("modules.txt" ,"utf-8");

a = a.replace("Sudarshan" , "Pansare");     //replace sudarshan to pansare
console.log(a);

//Writting a file...
let b = fs.writeFileSync("modules2.txt","writeFileSync function is used to write a content into file");

//or

// b = fs.writeFileSync("modules2.txt" , a);   //used to written file content of a varible 
console.log(b);