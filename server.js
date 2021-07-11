const express = require("express");

const app = express();

app.use('/add-product', (req, res, next) => {
    console.log("In the middleware!");
    res.send("<h1>Hello from Express Add Product middleware!</h1>")
});

app.use('/', (req, res, next) => {
    console.log("In the middleware!");
    res.send("<h1>Hello from Express middleware!</h1>")
});

app.listen(3000);