const path = require("path");
const express = require("express");

const fileDir = require("../util/path");

const router = express.Router();

router.get("/add-product", (req, res) => {
  res.sendFile(path.join(fileDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res) => {
  console.log(req.body.title);
  res.redirect("/");
});


module.exports = router;