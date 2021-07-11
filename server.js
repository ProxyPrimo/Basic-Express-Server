const express = require("express");

const app = express();

// app.use('/', (req, res, next) => {
//     console.log("In the middleware!");
//     res.send("<h1>Hello from Express middleware!</h1>")
// });

// app.use((req, res, next) => {
//   console.log("Logging info");
//   next();
// });

// app.use((req, res, next) => {
//   next();
// });

// app.use((req, res, next) => {
//   res.send("Sending a response to the client");
// });

app.use("/add-product", (req, res, next) => {
  res.send("<h1>Hello from Express Add Product middleware!</h1>");
});

app.use("/users", (req, res, next) => {
  res.send("<h1>Hello from the Users page</h1>");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from the Index page</h1>");
});

app.listen(3000);
