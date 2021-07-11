const express = require("express");

const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("shop", {
    prods: adminData.products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

module.exports = router;
