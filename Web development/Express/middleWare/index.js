const express = require('express')
const path = require("path");
const app = express()
const port = 3000

const SudarshanMiddleware = (req ,res,next) =>{
    console.log(req);
    next();
}
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})