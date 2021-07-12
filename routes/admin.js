const express = require("express");

const adminsController = require("../controllers/admin");

const router = express.Router();

router.get("/add-product", adminsController.getAddProduct);
router.post("/add-product", adminsController.postAddProduct);

router.get("/products");

module.exports = router;
