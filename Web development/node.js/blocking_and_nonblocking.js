// blocking or Syncronous:-
    // -line by line exicution
    
//nonBlocking or Asynchronus:-
        // - line by line exicution but not Guarntee
        // - Callback will fire

        //nonblocking

    const fs = require("fs");
    fs.readFile("modules.txt" , "utf-8" , (err , data) =>{
        console.log(data);
    });
    console.log("This is a nonblocking...");