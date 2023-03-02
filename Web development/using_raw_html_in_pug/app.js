const { urlencoded } = require('express');
const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const port = 80;

//Express Specific Configuration
app.use("/static", express.static('static'));   //Serving static files
app.use(express.urlencoded());

//pug Specific Configuration

app.set('view engine', 'pug');      //set the template engine as pug
app.set('views', path.join(__dirname, 'views'));

//ENDPOINTS
app.get('/index', (req, res) => {
    const con = "This is best content on the internet Ever"
    const params = { 'title': "This is a Gym Website", 'content': con }        //sending variables
    res.status(200).render('index.pug', params)
});

app.post('/index', (req, res) => {
    name = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    number = req.body.number;
    address = req.body.address;
    more = req.body.more;

    let outputToWrite = `The name of theclient is:${name},age is:${age}years old,gender is:${gender},phone number is:${number},address of client is:${address},more about his/her:${more}`
    fs.writeFileSync('output.txt', outputToWrite)
    const params = { 'message': "your form submitted Successfully" }
    res.status(200).render('index.pug', params)

})
//Start the Server
app.listen(port, () => {
    console.log(`Website Successfully run on port ${port}`);
});