const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.get("/add-product", (req, res) => {
  res.send(`
  <form action="/add-product" method="POST">
    <input type="text" name="title">
        <button type="submit">Submit</button>
    </input>
  </form>`
  );
});

app.post("/add-product", (req, res) => {
    console.log(req.body.title);
    res.redirect("/");
});

app.use("/users", (req, res) => {
  res.send("<h1>Hello from the Users page</h1>");
});

app.use("/", (req, res) => {
  res.send("<h1>Hello from the Index page</h1>");
});

app.listen(3000);
