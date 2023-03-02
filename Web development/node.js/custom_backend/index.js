const http = require("http");
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const home = fs.readFileSync("./index.html");
const about = fs.readFileSync("./about.html");
const services = fs.readFileSync("./services.html");
const contact = fs.readFileSync("./contact.html");



const server = http.createServer((req , res)=>{
    console.group(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('content-type' ,'text/html');
    if(url=='/home'){
        res.end(home);
    }
    else if(url=='/about'){
        res.end(about);
    }
    else if(url=='/services'){
        res.end(services);
    }
    else if(url=='/contact'){
        res.end(contact);
    }
    else{
        statusCode = 404;
        res.end("<h2>404 page not found</h2>");
    }
});
server.listen(port ,hostname ,()=> {
    console.log(`server running at http://${hostname}:${port}/`)
});