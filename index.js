const { text } = require("express");
const express = require("express");
// const { countAllRequests } = require("./monitoring");
const PORT = process.env.PORT || "8080";
const app = express();
// app.use(countAllRequests());

app.get("/", (req, res) => {
  text = `Hello and welcome to the photo library.
  For Amit the pig masterpiece -> /amit
  For J.cole -> jcole
  `
  res.send(text);
});

app.get("/amit", (req, res) => {
  res.sendFile('./public/amit.jpeg', {root: './'});
});

app.get("/jcole", (req, res) => {
  res.sendFile('./public/jcole.jpg', {root: './'});
});

app.listen(parseInt(PORT, 10), () => {
  console.log(`Listening for requests on http://localhost:${PORT}`);
});