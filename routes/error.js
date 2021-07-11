const path = require("path");
const express = require("express");

const fileDir = require("../util/path");

const router = express.Router();

router.use((req, res) => {
    res.status(404).render("404");
});


module.exports = router;