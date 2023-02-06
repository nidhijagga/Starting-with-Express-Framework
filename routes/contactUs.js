const path = require("path");
const express = require("express");
// const rootDir = require("../utils/path");
const router = express.Router();

router.get("/contactUs", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "contactUs.html"));
});

router.post("/submit", (req, res, next) => {
  console.log(req.body);
  res.redirect("/success");
});

module.exports = router;
