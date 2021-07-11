const path = require("path");
const express = require("express");

const fileDir = require("../util/path");
const adminData = require("./admin");
const router = express.Router();

router.get("/", (req, res) => {
  const products = adminData.products;
  res.render("index", {products, docTitle: "My Shop"});
});

module.exports = router;
