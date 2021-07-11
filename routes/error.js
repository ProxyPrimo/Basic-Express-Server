const express = require("express");

const router = express.Router();

router.use((req, res) => {
    res.status(404).send("<h1>Page Not Found</h1>");
});


module.exports = router;