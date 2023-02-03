// const http = require("http");
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("In the middleware");
  next();
});

app.use((req, res, next) => {
  console.log("In the another middleware");
  res.send("<h1> Hello from Express </h1>");
  next();
});

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);

//1. Why are we using Express JS?

//Express.js is a popular web application framework for Node.js, designed to simplify the development of web applications and APIs. Express.js provides a middleware architecture, which allows developers to easily add additional functionality to their applications.

//3.What are MiddleWares?

//Middleware in the context of web development refers to a function or set of functions that sit between the application and the incoming request and outgoing response

//4.What is next used for.

//When a middleware function is finished processing, it can call the next function to pass control to the next middleware function in the chain. This allows multiple middleware functions to be combined to perform complex tasks.

//5.What is res.send used for?

//In Express.js, res.send is a method used to send a response to the client. It can be used to send a variety of different types of responses, eg. Plain Text, HTML, JSON etc.

//6. If i do res.send('<h1> hello to node js </h1>') . What will be the content-type header equal to?

//The value of the Content-Type header is automatically set by Express.js as text/html.

//7.If I do res.send( { key1: value }) . What will be the content-type header equal to?

//The value of the Content-Type header is automatically set by Express.js as application/json.

//8.What does app.listen(3000) do behind the scenes?

//This code will generate
// const server = http.createServer(app);
// server.listen(3000);
