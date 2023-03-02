const express = require("express");
const path = require('path');
const app = express();
const port = 80;

//serving static file which is include in static folder
app.use("/static", express.static('static'));

//set the template engine as pug
app.set('view engine', 'pug')

//set the view directory
app.set('views', path.join(__dirname, 'views'));

//our pug demo endpoint
app.get('/demo', (req, res) => {
    res.render('demo', { title: 'Hey Sudarshan', message: 'Welcome to my pug website!' })
  })

app.get("/home", (req, res) => {
    res.send("This is my first express app");
});

app.get("/about", (req, res) => {
    res.send("This is my about page");
});

app.post("/about", (req, res) => {
    res.send("This is my about page on post request");
});

app.post("/not_page", (req, res) => {
    res.status(404).send("page not found");
});
app.listen(port, () => {
    console.log(`Application started successully on port ${port}`);
})