const express = require("express");

const adminsController = require("../controllers/admin");

const router = express.Router();

router.get("/add-product", adminsController.getAddProduct);
router.post("/add-product", adminsController.postAddProduct);

router.get("/edit-product/:productId", adminsController.getEditProduct);
router.post("/edit-product/:productId", adminsController.postEditProduct);

router.get("/products", adminsController.getProducts);

module.exports = router;
