const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const contactUsRoutes = require("./routes/contactUs");
const successRoutes = require("./routes/success");
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);
app.use("/", contactUsRoutes);
app.use("/", successRoutes);
app.use("/", (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});
app.listen(4000);
