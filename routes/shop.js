const express = require("express");

const router = express.Router();

router.use("/", (req, res) => {
  res.send("<h1>Hello from the Index page</h1>");
});

module.exports = router;
