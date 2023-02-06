const path = require("path");
const express = require("express");
// const rootDir = require("../utils/path");
const router = express.Router();

router.get("/shop", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = router;
