const path = require("path");
const express = require("express");
// const rootDir = require("../utils/path");
const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/admin/add-product");
});

module.exports = router;
