const path = require("path");
const express = require("express");

const fileDir = require("../util/path");

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(fileDir, "views", "index.html"));
});

module.exports = router;
