const { text } = require("express");
const express = require("express");
// const { countAllRequests } = require("./monitoring");
const PORT = process.env.PORT || "8080";
const app = express();
// app.use(countAllRequests());

app.get("/", (req, res) => {
  const text = `<h1>Hello and welcome to the photo library. </h1>
  
  <h4>  For J.cole -> /jcole</h4>
  `
  res.send(text);
});

{/* <h4>  For Amit the pig masterpiece -> /amit</h4> */}

// app.get("/amit", (req, res) => {
//   res.sendFile('./public/amit.jpeg', {root: './'});
// });

app.get("/jcole", (req, res) => {
  res.sendFile('./public/jcole.jpg', {root: './'});
});

app.listen(parseInt(PORT, 10), () => {
  console.log(`Listening for requests on http://localhost:${PORT}`);
});