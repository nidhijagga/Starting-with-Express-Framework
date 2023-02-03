const { Router } = require("express");
const express = require("express");
const router = express.Router();

//admin/add-product
router.use("/add-product", (req, res, next) => {
  console.log("In the add-product middleware");
  res.send(
    `<form action = "/admin/product" method = "POST"> <input type = "text" name = "title"><input type = "number" name = "quantity"><button type = "submit"> Add Product </button></form>`
  );
});

//admin/add-product
router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/shop");
});

module.exports = router;
