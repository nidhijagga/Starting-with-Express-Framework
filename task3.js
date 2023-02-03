const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use("/", (req, res, next) => {
  console.log("This always runs");
  next();
});

app.use(bodyParser.urlencoded());

app.use("/add-product", (req, res, next) => {
  console.log("In the add-product middleware");
  res.send(
    `<form action = "/product" method = "POST"> <input type = "text" name = "title"><input type = "number" name = "quantity"><button type = "submit"> Add Product </button></form>`
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("In the Last middleware");
  res.send("<h1> Hello from Express </h1>");
  next();
});

app.listen(3000);

//What is the body parser used for?

//The body-parser middleware in Express.js is used to parse incoming request bodies and make the data available in the req.body property of the request object. This allows you to access and process data that has been sent by the client in the body of an HTTP request, such as POST data.

//By default, Express.js does not provide a way to access the request body, so you need to use a third-party middleware such as body-parser to parse the request body. Body-parser supports parsing of several different types of request bodies, including JSON, URL-encoded data, and text.
